import React from "react";
// import { FaInstagram } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { AiFillTikTok } from "react-icons/ai";
// import { FaSquareXTwitter } from "react-icons/fa6";

const Foother = () => {
  return (
    <div className="mt-5">
      <hr />

      <div className="flex justify-center mt-3">
        <img src="/images/bk.png" className="w-[50px] h-16" alt="" />
      </div>

      <div className="text-black text-xs md:text-sm text-center mt-3">Sekretariat Belas Kasih</div>
      <div className="text-black text-xs md:text-sm text-center mt-1">JL. MAHKOTA ZAMBRUD NO.56, BABAKAN MADANG - BOGOR 16810</div>
      <div className="text-black text-xs md:text-sm text-center mt-1">0812-3575-7667</div>
      {/* <div className="flex justify-center gap-3 mt-5 text-lg">
        <FaInstagram />
        <FaFacebook />
        <AiFillTikTok />
        <FaSquareXTwitter />
      </div> */}
      <div className="text-black text-xs md:text-sm text-center mt-3">
        Copyright © 2025 <span className="text-orange-600"> Belas Kasih</span>. All Rights Reserved.
      </div>
    </div>
  );
};

export default Foother;
