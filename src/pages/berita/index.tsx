import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Definisi tipe data untuk berita
interface BeritaItem {
  id: number;
  gambar: string;
  judul: string;
  deskripsi: string;
  penulis: string;
  created_at: string;
  updated_at: string;
}

// Definisi tipe data untuk respons API
interface BeritaResponse {
  status: string;
  message: string;
  data: BeritaItem[];
}

const Berita: React.FC = () => {
  const [berita, setBerita] = useState<BeritaItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const truncate = (text: string, maxLength: number): string => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const response = await fetch("https://relawan.rekapitung.id/api/berita");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result: BeritaResponse = await response.json();
        if (result.status === "success") {
          setBerita(result.data);
        } else {
          throw new Error(result.message || "Unknown error");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchBerita();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="flex gap-2 items-center mt-4 justify-center bg-black px-4 py-2 text-white rounded-lg ">
        <h1 className="text-center font-medium text-lg md:text-xl ">Berita PM08</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
        {berita.map((item) => (
          <div key={item.id} className="border rounded-lg shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img src={item.gambar} alt={item.judul} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2 hover:text-[#A31D1D] cursor-pointer" onClick={() => navigate(`/detail/${item.id}`)}>
                {truncate("Ragam Respons Koalisi 02 soal Peluang PKS Gabung Prabowo-Gibran", 50)}
              </h2>
              <p className="text-gray-600 text-sm mb-4 hover:text-[#A31D1D] cursor-pointer" onClick={() => navigate(`/detail/${item.id}`)}>
                {truncate(item.deskripsi, 100)}
              </p>
              <div className="text-gray-500 text-xs flex justify-between">
                <span>Dibuat: {new Date(item.created_at).toLocaleDateString()}</span>
                <span>Author: {item.penulis}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Berita;
