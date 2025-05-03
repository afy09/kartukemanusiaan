import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="mt-5 mb-2">
        <img src="/images/ketumpm08.jpg" alt="" className="rounded-lg" />
        <h1 className="text-black text-center font-bold text-[18px] md:text-[25px] mt-4">
          IMMANUEL EBENEZER (NOEL) <br /> KETUA UMUM PRABOWO MANIA 08
        </h1>
      </div>
      <hr />
      <div className="flex gap-2 items-center mt-4 justify-center bg-black px-4 py-2 text-white rounded-lg ">
        {/* <div className="px-2  border bg-[#A31D1D] text-white rounded-full">2</div> */}
        <h1 className="text-center font-medium text-lg md:text-xl ">Menu</h1>
      </div>

      <div className="flex gap-2 w-full text-center mt-5 mb-8 text-xs md:text-base ">
        <Link to="/tentang" className="w-full">
          <div className="border border-[#A31D1D] px-7 py-2 w-full rounded-lg text-[#A31D1D] hover:bg-[#A31D1D] hover:text-white">Tentang</div>
        </Link>

        <Link to="/visimisi" className="w-full ">
          <div className="border border-[#A31D1D] px-7 py-2 w-full rounded-lg text-[#A31D1D] hover:bg-[#A31D1D] hover:text-white  ">Visi Misi</div>
        </Link>

        <Link to="/program" className="w-full">
          <div className="border border-[#A31D1D] px-7 py-2 w-full rounded-lg text-[#A31D1D] hover:bg-[#A31D1D] hover:text-white">Program</div>
        </Link>
      </div>
    </>
  );
};

export default Menu;
