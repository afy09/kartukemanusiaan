import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Tipe data berita
interface BeritaItem {
  id: number;
  gambar: string;
  judul: string;
  deskripsi: string;
  penulis: string;
  created_at: string;
  updated_at: string;
}

const DetailBerita: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [berita, setBerita] = useState<BeritaItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetailBerita = async () => {
      try {
        const response = await fetch(`https://relawan.rekapitung.id/api/berita/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setBerita(result.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchDetailBerita();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-[650px] mx-auto px-4">
      <div className="px-4 py-4 border border-gray-400 rounded-lg mt-4 mb-4">
        <h1 className="text-[#A31D1D] font-bold text-xl mb-4">Ragam Respons Koalisi 02 soal Peluang PKS Gabung Prabowo-Gibran</h1>
        <img src={berita?.gambar} alt={berita?.judul} className="w-full h-64 object-cover mb-4" />
        <div className="text-gray-600 text-sm mb-4 w-full leading-normal">{berita?.deskripsi}</div>
        <div className="text-gray-500 text-xs">
          <p>Author: {berita?.penulis}</p>
          <p>Dibuat: {new Date(berita?.created_at || "").toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailBerita;
