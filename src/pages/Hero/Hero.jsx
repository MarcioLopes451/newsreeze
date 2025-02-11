import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";

const api_url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=3e41fa0ff049417392568d35d92d96d6";

export default function Hero() {
  const [input, setInput] = useState("");
  const [news, setNews] = useState([]);
  const [originalNews, setOriginalNews] = useState([]);
  const [total, setTotal] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(api_url);
        const jsonData = await response.json();
        setNews(jsonData.articles);
        setOriginalNews(jsonData.articles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, []);

  const displayedArticles = total ? news : news.slice(0, 8);

  return (
    <div className="pt-5 px-4">
      <SearchBar
        input={input}
        setInput={setInput}
        news={news}
        setNews={setNews}
        originalNews={originalNews}
      />
      <div className="mt-5">
        <h2>Today's Headlines</h2>
        <div className="mt-5 flex justify-between items-center flex-row flex-wrap gap-5">
          {displayedArticles.map((article) => (
            <div
              key={`${article.author}-${article.publishedAt}`}
              className="container w-[150px] h-[200px]"
            >
              <img
                src={article.urlToImage}
                className="h-[100px]"
                alt={article.title}
              />
              <div className="mt-2 text-xs">
                <h2 className="">{article.title}</h2>
                <div className="flex justify-between items-center">
                  <p>{article.author}</p>
                  <p>{article.publishedAt.slice(0, 10)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {news.length > 8 && (
          <button onClick={() => setTotal((prev) => !prev)}>
            {total ? "Show Less" : "Show All"}
          </button>
        )}
      </div>
    </div>
  );
}
