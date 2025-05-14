import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const merchandiseData = [
  {
    id: 1,
    image: "/images/kaospolos.jpg",
    title: "Kaos Polos Belas Kasih",
    price: "Rp100.000",
    description: "Kaos katun premium dengan logo keren dan nyaman dipakai.",
  },
  {
    id: 2,
    image: "/images/kemeja.jpg",
    title: "Kemeja Snapback BK",
    price: "Rp150.000",
    description: "Topi snapback eksklusif dengan desain stylish.",
  },
  {
    id: 3,
    image: "/images/rompi.jpg",
    title: "Rompi Belas Kasih",
    price: "Rp250.000",
    description: "Rompi bahan fleece yang cocok untuk cuaca dingin.",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 2, // default desktop
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024, // tablet & bawah
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768, // HP kecil
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Merchandise = () => {
  return (
    <div className="px-4 py-8 max-w-6xl mx-auto">
      <div className=" mb-6 bg-black p-1 rounded-lg">
        <h2 className="text-xl font-semibold text-center text-white">Merchandise</h2>
      </div>

      <Slider {...settings}>
        {merchandiseData.map((item) => (
          <div key={item.id} className="px-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-52 object-cover" />
              <div className="p-4">
                <Link to={`/merchandise/${item.id}`}>
                  <h3 className="text-lg font-semibold  hover:underline cursor-pointer">{item.title}</h3>
                </Link>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <p className="text-orange-600 font-bold">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Merchandise;
