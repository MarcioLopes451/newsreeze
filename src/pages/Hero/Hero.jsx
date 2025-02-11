import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import ArticleCards from "../../components/ArticleCards/ArticleCards";

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
            <ArticleCards
              key={`${article.author}-${article.publishedAt}`}
              title={article.title}
              img={article.urlToImage}
              author={article.author}
              date={article.publishedAt.slice(0, 10)}
            />
          ))}
        </div>
        {news.length > 8 && (
          <button
            onClick={() => setTotal((prev) => !prev)}
            className="mt-5 bg-pinkZel w-[75px] h-[24px] text-sm text-purpleRain font-medium rounded-[5px]"
          >
            {total ? "Show Less" : "Show All"}
          </button>
        )}
      </div>
    </div>
  );
}
