import React from "react";
import { Link } from "react-router-dom";
import CryptoImg from "../../assets/crypto-img.webp";
import TechImg from "../../assets/tech-img.webp";
import SportsImg from "../../assets/sports-img.png";
import UkImg from "../../assets/uk-img.webp";
import UsImg from "../../assets/us-img.webp";
import WorldImg from "../../assets/world-img.png";

export default function ExploreChannels() {
  return (
    <div className="mt-5">
      <h2 className="font-semibold">Explore Channels</h2>
      <div className="flex justify-between flex-row items-center flex-wrap gap-5 mt-5 px-4">
        <Link to={`/newsreeze/channels/${"crypto"}`}>
          <div className="w-[120px] h-[125px] bg-white rounded-[10px] flex justify-center items-center">
            <div className="flex items-center flex-col">
              <img src={CryptoImg} className="w-[60px]" />
              <h3 className="font-semibold">Crypto</h3>
            </div>
          </div>
        </Link>
        <Link to={`/newsreeze/channels/${"tech"}`}>
          <div className="w-[120px] h-[125px] bg-white rounded-[10px] flex justify-center items-center">
            <div className="flex flex-col items-center justify-center gap-4">
              <img src={TechImg} className="w-[60px]" />
              <h3 className="font-semibold">Tech</h3>
            </div>
          </div>
        </Link>
        <Link to={`/newsreeze/channels/${"sports"}`}>
          <div className="w-[120px] h-[125px] bg-white rounded-[10px] flex justify-center items-center">
            <div className="flex flex-col items-center justify-center gap-4">
              <img src={SportsImg} className="w-[60px]" />
              <h3 className="font-semibold">Sports</h3>
            </div>
          </div>
        </Link>
        <Link to={`/newsreeze/channels/${"gb"}`}>
          <div className="w-[120px] h-[125px] bg-white rounded-[10px] flex justify-center items-center">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <img src={UkImg} className="w-[60px]" />
              <h3 className="font-semibold">United Kingdom</h3>
            </div>
          </div>
        </Link>
        <Link to={`/newsreeze/channels/${"us"}`}>
          <div className="w-[120px] h-[125px] bg-white rounded-[10px] flex justify-center items-center">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <img src={UsImg} className="w-[60px]" />
              <h3 className="font-semibold">United States</h3>
            </div>
          </div>
        </Link>
        <Link to={`/newsreeze/channels/${"world"}`}>
          <div className="w-[120px] h-[125px] bg-white rounded-[10px] flex justify-center items-center">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <img src={WorldImg} className="w-[100px]" />
              <h3 className="font-semibold">World</h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
