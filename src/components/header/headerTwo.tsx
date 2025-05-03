import React, { useEffect, useState } from "react";

const Header = () => {
  const slides = ["/images/header.png", "/images/bg-mania08.png", "/images/header.png", "/images/bg-mania08.png"]; // Array gambar slider

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
      <div className=" w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg mt-4">
        {/* Slides */}
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <img key={index} src={slide} alt={`Slide ${index + 1}`} className="w-full object-cover" />
          ))}
        </div>
      </div>
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
