import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="mt-5 mb-2">
        <img src="/images/yudi.jpg" alt="" className="rounded-lg" />
        <h1 className="text-black text-center font-bold text-[18px] md:text-[25px] mt-4">
          YUDI CAHYA PRAWIRA <br /> KETUA UMUM BELAS KASIH
        </h1>
      </div>
      <hr />
      <div className="flex gap-2 items-center mt-4 justify-center bg-black px-4 py-2 text-white rounded-lg ">
        {/* <div className="px-2  border bg-orange-600 text-white rounded-full">2</div> */}
        <h1 className="text-center font-medium text-lg md:text-xl ">Menu</h1>
      </div>

      <div className="flex gap-2 w-full text-center mt-5 mb-8 text-xs md:text-base ">
        <Link to="/tentang" className="w-full">
          <div className="border border-orange-600 px-7 py-2 w-full rounded-lg text-orange-600 hover:bg-orange-600 hover:text-white">Tentang</div>
        </Link>

        <Link to="/visimisi" className="w-full ">
          <div className="border border-orange-600 px-7 py-2 w-full rounded-lg text-orange-600 hover:bg-orange-600 hover:text-white  ">Visi Misi</div>
        </Link>

        <Link to="/program" className="w-full">
          <div className="border border-orange-600 px-7 py-2 w-full rounded-lg text-orange-600 hover:bg-orange-600 hover:text-white">Program</div>
        </Link>
      </div>
    </>
  );
};

export default Menu;
