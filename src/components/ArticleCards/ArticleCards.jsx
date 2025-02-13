import React from "react";
import { Link } from "react-router-dom";

export default function ArticleCards({ img, title, author, date, link }) {
  return (
    <Link to={link}>
      <div className="container w-[150px] h-[200px]">
        <img src={img} className="h-[100px] rounded-[10px]" alt={author} />
        <div className="mt-2 text-xs">
          <h2 className="text-center">{title}</h2>
          <div className="flex justify-between items-center">
            <p className="bg-pinkZel w-[75px] h-[24px] text-[10px] text-purpleRain font-medium rounded-[5px] text-center flex items-center justify-center">
              {author}
            </p>
            <p>{date} am</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
