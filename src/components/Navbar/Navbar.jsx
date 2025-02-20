import React, { useState } from "react";
import MobileLogo from "../../assets/MobileLogo.png";
import LoginIcon from "../../assets/2203549_admin_avatar_human_login_user_icon (1).png";
import SideNav from "./SideNav";

export default function Navbar() {
  const [state, setState] = useState(false);

  const handleNav = () => {
    setState((prev) => !prev);
  };
  return (
    <section className="px-4 container bg-white pt-5 relative">
      <div className="flex justify-between items-center">
        <div className="">
          <img src={MobileLogo} className="w-[60px]" />
        </div>

        <img
          src={LoginIcon}
          className="w-[40px] border rounded-full border-greySky p-[6px]"
          data-testid="login icon"
          onClick={handleNav}
          style={state === false ? { display: "block" } : { display: "none" }}
        />
      </div>
      <div
        className={`fixed -top-14 left-0 h-[108%] transform transition-transform duration-300 ease-in-out ${
          state ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SideNav onclose={handleNav} />
      </div>
    </section>
  );
}
