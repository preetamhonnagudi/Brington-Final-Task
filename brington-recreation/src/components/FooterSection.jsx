import React from "react";
import logo from "../assets/download.svg"; // <-- replace with actual logo path if needed

const FooterSection = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-12 px-6 md:px-20">

      {/* BIG HEADING */}
      <h2 className="text-[48px] md:text-[90px] leading-[1.1] font-bold max-w-5xl">
        Be the First to Receive the Latest News
      </h2>

      {/* SIGN UP BUTTON */}
      <div className="mt-12">
        <button className="px-40 py-1 border border-white rounded-full text-xl hover:bg-white hover:text-black transition flex items-center space-x-2">
          <span>Sign Up</span> <span>→</span>
        </button>
      </div>

      {/* 4 COL FOOTER GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mt-20">

        {/* COLUMN 1 -- LOGO */}
        <div className="flex items-start space-x-4">
          <img src={logo} alt="Brington Logo" style={{width : "30px", paddingTop: "6px"}}/>
          <h3 className="text-2xl font-semibold">Brington</h3>
        </div>

        {/* COLUMN 2 -- NAVIGATION */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Navigation</h4>
          <ul className="space-y-3 text-gray-300 text-lg">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* COLUMN 3 -- SOCIAL */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Social</h4>
          <ul className="space-y-3 text-gray-300 text-lg">
            <li className="hover:text-white cursor-pointer">Facebook</li>
            <li className="hover:text-white cursor-pointer">Instagram</li>
            <li className="hover:text-white cursor-pointer">Youtube</li>
          </ul>
        </div>

        {/* COLUMN 4 -- CONTACT */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-gray-300 text-lg">
            <li>info@mysite.com</li>
            <li>Tel. 123-456-7890</li>
            <li>India</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM LINE */}
      <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
        <p>© 2035 by Brington Inc</p>
        <p>Built with love and caffeine by You ☕</p>
      </div>

    </footer>
  );
};

export default FooterSection;
