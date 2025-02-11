import React from "react";

export default function ArticleCards({ img, title, author, date }) {
  return (
    <div className="container w-[150px] h-[200px]">
      <img src={img} className="h-[100px]" alt={author} />
      <div className="mt-2 text-xs">
        <h2 className="text-center">{title}</h2>
        <div className="flex justify-between items-center">
          <p>{author}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}
