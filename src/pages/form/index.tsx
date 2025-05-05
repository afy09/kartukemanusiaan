import React, { useState } from "react";
import Foother from "../../components/foother/foother";

const Form = () => {
  const [nama, setnama] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [no_hp, setno_hp] = useState<string>("");
  const [alamat, setAlamat] = useState<string>("");
  const [jenisKartu, setJenisKartu] = useState<string>("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const isFormValid = nama && email && no_hp && alamat && jenisKartu;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true); // hanya munculkan popup, belum redirect
  };

  const handleSendToWhatsApp = () => {
    const message =
      `*Pendaftaran Kartu Kemanusiaan*\n\n` +
      `*Nama:* ${nama}\n` +
      `*Email:* ${email}\n` +
      `*Nomor WhatsApp:* ${no_hp}\n` +
      `*Alamat Pengiriman:* ${alamat}\n` +
      `*Jenis Kartu:* ${jenisKartu}\n` +
      `*Harga:* ${jenisKartu === "Reguler" ? "Rp. 20.000" : "Rp. 10.000"} (Belum Termasuk Ongkos Kirim)\n\n` +
      `*Silakan balas pesan ini dengan mengirimkan foto Profile Anda untuk verifikasi.*\n\n` +
      `Terima kasih atas partisipasi Anda`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/6281235757667?text=${encodedMessage}`;

    window.open(whatsappLink, "_blank");
    setShowPopup(false);
  };

  return (
    <>
      {/* <div className="flex gap-2 items-center justify-center my-4">
        <h1 className="text-black text-center font-bold text-[22px] md:text-[25px]">Formulir Kartu Kemanusiaan</h1>
      </div> */}

      <div className="flex gap-2 items-center mt-4 justify-center bg-black px-4 py-2 text-white rounded-lg ">
        <h1 className="text-center font-medium text-lg md:text-xl ">Formulir Kartu Kemanusiaan</h1>
      </div>
      <div className="px-4 py-4 border border-gray-400 rounded-lg mt-4 mb-4">
        <div className={`${isExpanded ? "" : "max-h-[700px] overflow-hidden"}`}>
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

            <div>
              <label className="block mb-1 font-semibold">Jenis Kartu</label>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input className="accent-orange-600" type="radio" name="jenis_kartu" value="Reguler" checked={jenisKartu === "Reguler"} onChange={(e) => setJenisKartu(e.target.value)} />
                  Reguler
                </label>
                <label className="flex items-center gap-2">
                  <input className="accent-orange-600" type="radio" name="jenis_kartu" value="E-Money" checked={jenisKartu === "E-Money"} onChange={(e) => setJenisKartu(e.target.value)} />
                  E-Money
                </label>
              </div>
            </div>

            {jenisKartu === "Reguler" && (
              <p className="text-sm text-gray-700 mb-1">
                Harga: <strong>Rp. 20.000 </strong> (Belum Termasuk Ongkos Kirim)
              </p>
            )}
            {jenisKartu === "E-Money" && (
              <p className="text-sm text-gray-700 mb-1">
                Harga: <strong>Rp. 100.000 </strong> (Belum Termasuk Ongkos Kirim)
              </p>
            )}

            {/* Submit Button */}
            <div className="flex justify-end gap-3 mb-10">
              <button type="submit" className={`px-7 py-2 rounded-lg ${isFormValid ? "bg-orange-600 text-white" : "bg-gray-400 text-gray-200 cursor-not-allowed"}`} disabled={!isFormValid || isSubmitting}>
                {isSubmitting ? "Mengirim..." : "Daftar"}
              </button>
            </div>
          </form>
        </div>
        <Foother />
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white px-8 py-6 rounded-2xl w-[90%] max-w-md text-center">
            <div className="flex justify-center mb-4">
              <img className="w-16 h-20" src="/images/bk.png" alt="logo" />
            </div>
            <p className="text-black font-semibold text-xl mb-4">Konfirmasi Data Anda</p>

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
                <strong className="w-28">Jenis Kartu :</strong>
                <span> {jenisKartu}</span>
              </div>
              <div className="flex flex-col ">
                <strong className="w-16">Alamat :</strong>
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

export default Form;
