import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginIcon from "../../assets/2203549_admin_avatar_human_login_user_icon (1).png";
import HomeIcon from "../../assets/392500_estate_home_house_real_icon.png";
import SettingIcon from "../../assets/392496_gear_setting_settings_tools_icon.png";
import MessageIcon from "../../assets/392506_email_envelope_letter_mail_icon.png";
import LogoutIcon from "../../assets/4115235_exit_logout_sign out_icon.png";
import LocationIcon from "../../assets/392502_gps_location_map_marker_icon.png";

const geolocationApi = "http://ip-api.com/json/";

export default function SideNav({ onclose }) {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const initalData = await fetch(geolocationApi);
        const parseData = await initalData.json();
        setLocation(parseData);
      } catch (error) {
        console.error("error finding location" + error);
      }
    };
    fetchLocation();
  }, []);

  console.log(location);
  return (
    <div className="bg-white w-[300px] h-full pt-10" onClick={onclose}>
      <div className="mt-[60px] px-[30px] flex justify-center flex-col gap-5">
        {" "}
        <img
          src={LoginIcon}
          className="w-[60px] border rounded-full border-greySky p-[6px]"
          data-testid="login icon"
        />
        <p className="font-bold">Alberto Pain</p>
        <div className="flex items-center gap-2">
          <img
            src={LocationIcon}
            className="w-[30px] p-[6px]"
            data-testid="login icon"
          />
          {location && (
            <p className="text-sm italic">
              {location.city}, {location.timezone.split("/")[1]}
            </p>
          )}
        </div>
        <div className="border-black border-1" />
        <div className="flex items-center gap-5">
          <img
            src={HomeIcon}
            className="w-[50px] p-[6px]"
            data-testid="login icon"
          />
          <p className="font-semibold">Home</p>
        </div>
        <div className="flex items-center gap-5">
          <img
            src={MessageIcon}
            className="w-[50px] p-[6px]"
            data-testid="login icon"
          />
          <p className="font-semibold">Messages</p>
        </div>
        <div className="flex items-center gap-5">
          <img
            src={SettingIcon}
            className="w-[50px] p-[6px]"
            data-testid="login icon"
          />
          <p className="font-semibold">Settings</p>
        </div>
        <div className="flex items-center gap-5">
          <img
            src={LogoutIcon}
            className="w-[50px] p-[6px]"
            data-testid="login icon"
          />
          <p className="font-semibold">Logout</p>
        </div>
      </div>
    </div>
  );
}
