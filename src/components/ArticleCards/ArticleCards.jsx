import React from "react";
import { Link } from "react-router-dom";

export default function ArticleCards({ img, title, author, date, link }) {
  return (
    <Link to={link}>
      <div className="container w-[150px] h-[200px]">
        <img
          src={img}
          className="h-[110px] rounded-[10px] w-[150px]"
          alt={author}
        />
        <div className="mt-2 text-xs flex justify-center items-center flex-col gap-3">
          <h2 className="text-center font-medium">{title}</h2>
          <div className="flex justify-between items-center flex-col gap-2">
            <p className="bg-pinkZel w-[90px] h-[30px] text-[10px] text-purpleRain font-semibold italic rounded-[5px] text-center flex items-center justify-center">
              {author}
            </p>
            <p>{date} am</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
