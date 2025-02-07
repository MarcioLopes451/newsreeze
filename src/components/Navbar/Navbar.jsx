import React from "react";
import MobileLogo from "../../assets/MobileLogo.png";
import LoginIcon from "../../assets/2203549_admin_avatar_human_login_user_icon (1).png";
export default function Navbar() {
  return (
    <section className="px-4 container bg-white pt-5">
      <div className="flex justify-between items-center">
        <div className="">
          <img src={MobileLogo} className="w-[60px]" />
        </div>

        <img
          src={LoginIcon}
          className="w-[40px] border rounded-full border-greySky p-[6px]"
          data-testid="login icon"
        />
      </div>
    </section>
  );
}
