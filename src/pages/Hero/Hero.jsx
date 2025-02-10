import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";

const api_url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=3e41fa0ff049417392568d35d92d96d6";
export default function Hero() {
  const [input, setInput] = useState("");
  const [news, setNews] = useState([]);
  const [originalNews, setOriginalNews] = useState([]);

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
  return (
    <div className="pt-5 px-4">
      <SearchBar
        input={input}
        setInput={setInput}
        news={news}
        setNews={setNews}
        originalNews={originalNews}
      />
      <div>
        <h2>Today's Headlines</h2>
        <div className="flex justify-center items-center flex-col gap-4">
          {news.map((article) => (
            <div key={`${article.author}-${article.publishedAt}`}>
              <h2>{article.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
