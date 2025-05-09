import React, { useEffect, useState } from "react";
// import Menu from "../../pages/menu";
import { Link } from "react-router-dom";

const Header = () => {
  const slides = ["/images/KK_depan.png", "/images/KK_belakang.png", "/images/KK_depan.png", "/images/KK_belakang.png"]; // Array gambar slider

  const [currentIndex, setCurrentIndex] = useState(0);

  // Fungsi untuk berpindah ke slide berikutnya
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Auto-slide menggunakan useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Ganti slide setiap 2 detik

    return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
  }); // Kosong untuk menjalankan hanya saat komponen pertama kali dimuat

  return (
    <>
      {/* <Menu /> */}
      <div className=" w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg mt-4">
        {/* Slides */}
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <img key={index} src={slide} alt={`Slide ${index + 1}`} className="w-full object-cover" />
          ))}
        </div>
      </div>
      <hr />
      {/* <div className="flex gap-2 items-center mt-4 justify-center bg-black px-4 py-2 text-white rounded-lg ">
        <h1 className="text-center font-medium text-lg md:text-xl ">Daftar</h1>
      </div> */}

      {/* <div className="flex gap-2 w-full text-center mt-5 mb-8 text-xs md:text-base ">
        <Link to="/tentang" className="w-full">
          <div className="border border-orange-600 px-7 py-2 w-full rounded-lg text-orange-600 hover:bg-orange-600 hover:text-white">Tentang</div>
        </Link>

        <Link to="/visimisi" className="w-full ">
          <div className="border border-orange-600 px-7 py-2 w-full rounded-lg text-orange-600 hover:bg-orange-600 hover:text-white  ">Visi Misi</div>
        </Link>

        <Link to="/program" className="w-full">
          <div className="border border-orange-600 px-7 py-2 w-full rounded-lg text-orange-600 hover:bg-orange-600 hover:text-white">Program</div>
        </Link>
      </div> */}
      {/* Indicator */}
      {/* <div className=" mt-2 -translate-x-1/2 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <div key={index} className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-red-700" : "bg-gray-300"}`}></div>
        ))}
      </div> */}
    </>
  );
};

export default Header;
