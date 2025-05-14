import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const merchandiseData = [
  {
    id: 1,
    image: "/images/kaosorenbk.jpg",
    title: "Kaos Orange Belas Kasih",
    price: "Rp. 120.000",
    description: "Kaos berwarna orange berbahan cotton combed 24s yang adem dan nyaman dipakai sehari-hari. Dilengkapi sablon plastisol doff berkualitas tinggi yang tahan lama dan tampak elegan.",
    variant: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    image: "/images/kaoshitambk.jpg",
    title: "Kaos Hitam Belas Kasih",
    price: "Rp. 120.000",
    description: "Kaos berwarna hitam berbahan cotton combed 24s yang adem dan nyaman dipakai sehari-hari. Dilengkapi sablon plastisol doff berkualitas tinggi yang tahan lama dan tampak elegan.",
    variant: ["S", "M", "L", "XL"],
  },
];

const MerchandiseDetail = () => {
  const [nama, setnama] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [no_hp, setno_hp] = useState<string>("");
  const [alamat, setAlamat] = useState<string>("");
  const [selectedVariant, setSelectedVariant] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const parsePrice = (price: string): number => {
    return parseInt(price.replace(/[^\d]/g, ""));
  };

  const formatRupiah = (number: number): string => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(number);
  };

  const isFormValid = nama && email && no_hp && alamat && selectedVariant && quantity > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleSendToWhatsApp = () => {
    const message =
      `*Pembelian Merchandise*\n\n` +
      `*Nama:* ${nama}\n` +
      `*Email:* ${email}\n` +
      `*Nomor WhatsApp:* ${no_hp}\n` +
      `*Alamat Pengiriman:* ${alamat}\n\n` +
      `*Produk:* ${item!.title}\n` +
      `*Harga:* ${item!.price}\n` +
      `*Ukuran:* ${selectedVariant}\n` +
      `*Jumlah:* ${quantity}\n\n` +
      `*Total Harga:* Rp${totalPrice.toLocaleString("id-ID")} (Belum Termasuk Ongkir)\n\n` +
      `Terima kasih `;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/6281235757667?text=${encodedMessage}`;

    window.open(whatsappLink, "_blank");
    setShowPopup(false);
  };

  const { id } = useParams();
  const item = merchandiseData.find((data) => data.id === parseInt(id ?? ""));
  const totalPrice = item ? parsePrice(item.price) * quantity : 0;

  if (!item) return <p className="text-center mt-10 text-red-600">Merchandise tidak ditemukan.</p>;

  return (
    <>
      <div className="border rounded-lg max-w-xl mx-auto">
        <div className="relative overflow-hidden">
          {/* Tombol back */}
          <Link to="/">
            <button className="absolute top-4 left-4 bg-black bg-opacity-10 text-sm p-3 rounded-full shadow hover:bg-gray-100">
              <img className="w-4 h-4" src="/images/back.png" alt="" />
            </button>
          </Link>

          <img src={item.image} alt={item.title} className="w-full object-cover" />
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-2">{item.title}</h1>
            <p className="text-orange-600 text-lg font-bold">{item.price}</p>
            <p className="text-gray-700 mb-4">{item.description}</p>
          </div>
        </div>

        <div className={`${isExpanded ? "" : "px-6 overflow-hidden"}`}>
          <form className="mt-4 flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Nama */}
            <div>
              <label className="block mb-1 font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukkan Nama Lengkap" className="bg-gray-100 px-3 py-2 w-full rounded-lg outline-none" value={nama} onChange={(e) => setnama(e.target.value)} />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukkan Email" className="bg-gray-100 px-3 py-2 w-full rounded-lg outline-none" value={email} onChange={(e) => setemail(e.target.value)} />
            </div>

            {/* Nomor Telepon */}
            <div>
              <label className="block mb-1 font-semibold">Nomor WhatsApp</label>
              <input type="text" name="no_hp" placeholder="Masukkan Nomor WhatsApp" className="bg-gray-100 px-3 py-2 w-full rounded-lg outline-none" value={no_hp} onChange={(e) => setno_hp(e.target.value)} />
            </div>

            {/* Alamat */}
            <div>
              <label className="block mb-1 font-semibold">Alamat Pengiriman</label>
              <textarea rows={4} placeholder="Masukkan Alamat" className="bg-gray-100 px-3 py-2 w-full rounded-lg outline-none" value={alamat} onChange={(e) => setAlamat(e.target.value)} />
            </div>

            {/* Pilihan Varian */}

            <div className="flex gap-3">
              <div className="w-full">
                <label className="block mb-1 font-semibold">Pilih Ukuran</label>
                <select className="bg-gray-100 px-3 py-2 w-full rounded-lg outline-none" value={selectedVariant} onChange={(e) => setSelectedVariant(e.target.value)} required>
                  <option value="">Pilih Ukuran</option>
                  {item.variant?.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pilihan Jumlah */}
              <div className="w-full">
                <label className="block mb-1 font-semibold">Jumlah</label>
                <div className="flex items-center gap-4">
                  <button type="button" onClick={() => setQuantity((prev) => Math.max(1, prev - 1))} className="px-3 py-1 bg-gray-200 rounded-lg text-lg">
                    −
                  </button>
                  <span>{quantity}</span>
                  <button type="button" onClick={() => setQuantity((prev) => prev + 1)} className="px-3 py-1 bg-gray-200 rounded-lg text-lg">
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end gap-3 mb-10 mt-4">
              <button type="submit" className={`px-7 py-2 rounded-lg ${isFormValid ? "bg-orange-600 text-white" : "bg-gray-400 text-gray-200 cursor-not-allowed"}`} disabled={!isFormValid || isSubmitting}>
                {isSubmitting ? "Mengirim..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white px-8 py-6 rounded-2xl w-[90%] max-w-md text-center">
            <div className="flex justify-center mb-4">
              <img className="w-16 h-20" src="/images/bk.png" alt="logo" />
            </div>
            <p className="text-black font-semibold text-xl mb-4">Konfirmasi Pembeliaan Anda</p>

            <div className="text-left text-sm text-black mb-4 space-y-1">
              <div className="flex justify-between">
                <strong className="w-16">Nama :</strong>
                <span>{nama}</span>
              </div>
              <div className="flex justify-between">
                <strong className="w-16">Email :</strong>
                <span>{email}</span>
              </div>
              <div className="flex justify-between">
                <strong className="w-28">No WhatsApp :</strong>
                <span> {no_hp}</span>
              </div>
              <div className="flex justify-between">
                <strong className="w-28">Produk :</strong>
                <span>{item!.title}</span>
              </div>
              <div className="flex justify-between">
                <strong className="w-28">Harga :</strong>
                <span>{item!.price}</span>
              </div>
              <div className="flex justify-between">
                <strong className="w-28">Ukuran :</strong>
                <span> {selectedVariant}</span>
              </div>
              <div className="flex justify-between">
                <strong className="w-28">Jumlah :</strong>
                <span> {quantity}</span>
              </div>
              <div className="flex justify-between">
                <strong className="w-28">Total Harga :</strong>
                <span className="font-semibold">{formatRupiah(totalPrice)}</span>
              </div>
              <div className="flex flex-col ">
                <strong className="w-16 ">Alamat :</strong>
                <span>{alamat}</span>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="flex-1 bg-orange-600 text-white py-2 rounded-lg" onClick={handleSendToWhatsApp}>
                Kirim
              </button>
              <button className="flex-1 border border-orange-600 text-orange-600 py-2 rounded-lg" onClick={() => setShowPopup(false)}>
                Perbaiki
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MerchandiseDetail;
