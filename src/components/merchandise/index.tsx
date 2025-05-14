import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const merchandiseData = [
  {
    id: 1,
    image: "/images/kaosorenbk.jpg",
    title: "Kaos Orange Belas Kasih",
    price: "Rp120.000",
    description: "Kaos berwarna orange berbahan cotton combed 24s yang adem dan nyaman dipakai sehari-hari. Dilengkapi sablon plastisol doff berkualitas tinggi yang tahan lama dan tampak elegan.",
    variant: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    image: "/images/kaoshitambk.jpg",
    title: "Kaos Hitam Belas Kasih",
    price: "Rp120.000",
    description: "Kaos berwarna hitam berbahan cotton combed 24s yang adem dan nyaman dipakai sehari-hari. Dilengkapi sablon plastisol doff berkualitas tinggi yang tahan lama dan tampak elegan.",
    variant: ["S", "M", "L", "XL"],
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

const truncateText = (text: any, limit: any) => {
  return text.length > limit ? text.slice(0, limit) + "..." : text;
};

const Merchandise = ({ item }: any) => {
  const [showFull, setShowFull] = useState(false);
  const toggleShow = () => setShowFull(!showFull);
  return (
    <div className="px-4 py-8 max-w-6xl mx-auto">
      <div className=" mb-6 bg-black p-1 rounded-lg">
        <h2 className="text-xl font-semibold text-center text-white">Merchandise</h2>
      </div>

      <Slider {...settings}>
        {merchandiseData.map((item) => (
          <div key={item.id} className="px-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full object-cover" />
              <div className="p-4">
                <Link to={`/merchandise/${item.id}`}>
                  <h3 className="text-lg font-semibold  hover:underline cursor-pointer">{item.title}</h3>
                </Link>
                <p className="text-sm text-gray-600 mb-2">
                  {showFull ? item.description : truncateText(item.description, 50)}
                  {item.description.length > 50 && (
                    <button onClick={toggleShow} className="ml-2 text-orange-600 font-semibold text-xs hover:underline">
                      {showFull ? "Tutup" : "Selengkapnya"}
                    </button>
                  )}
                </p>

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
