import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import ArticleCards from "../../components/ArticleCards/ArticleCards";
import NoImg from "../../assets/No_Image_Available.jpg";
import ExploreChannels from "../../components/ExploreChannels/ExploreChannels";
import RightIcon from "../../assets/352468_arrow_right_icon (1).png";

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
      <ExploreChannels />
      <div className="mt-5 pb-10">
        <h2 className="font-semibold">Today's Headlines</h2>
        <div className="mt-5 flex justify-between items-center flex-row flex-wrap gap-10">
          {displayedArticles.map((article) => (
            <ArticleCards
              key={`${article.author}-${article.publishedAt}`}
              title={
                article.title.length > 50
                  ? `${article.title.slice(0, 40)}...`
                  : article.title
              }
              img={article.urlToImage === null ? NoImg : article.urlToImage}
              author={
                article.author === null
                  ? "no author"
                  : article.author === ""
                  ? "no author"
                  : article.author.length > 20
                  ? `${article.author.slice(0, 20)}...`
                  : article.author
              }
              date={article.publishedAt.slice(12, 16)}
              link={article.url}
            />
          ))}
        </div>
        <div className="flex justify-start mt-5">
          {news.length > 8 && (
            <button
              onClick={() => setTotal((prev) => !prev)}
              className="mt-5 h-[24px] text-sm text-purpleRain font-medium rounded-[5px]"
            >
              <div className="flex items-center gap-1">
                <p>{total ? "See less" : "See all"}</p>{" "}
                <img src={RightIcon} className="w-[20px]" />
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
