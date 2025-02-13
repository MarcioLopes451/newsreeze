import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ArticleCards from "../../components/ArticleCards/ArticleCards";
import NoImg from "../../assets/No_Image_Available.jpg";

export default function Channels() {
  const [channels, setChannels] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 8;
  const { name } = useParams();
  const navigation = useNavigate();
  const api_url = `https://newsapi.org/v2/everything?q=${name}&apiKey=3e41fa0ff049417392568d35d92d96d6`;

  // fetching data
  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const response = await fetch(api_url);
        const jsonData = await response.json();
        setChannels(jsonData.articles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchChannels();
  }, []);

  // button to send user back a page
  const handleNavigate = () => {
    return navigation(-1);
  };

  const lastIndex = currentPage * articlesPerPage; // 1 x 8 = 8
  const firstIndex = lastIndex - articlesPerPage; // 8 - 8 = 0
  const articles = channels.slice(firstIndex, lastIndex);
  const totalArticles = Math.ceil(channels.length / articlesPerPage);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < totalArticles) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  return (
    <div className="pt-5 px-4">
      <div className="flex justify-between items-center">
        <h2>{name} channel</h2>
        <button
          className="mt-5 bg-pinkZel w-[75px] h-[24px] text-sm text-purpleRain font-medium rounded-[5px]"
          onClick={handleNavigate}
        >
          Go Back
        </button>
      </div>
      <div className="mt-5 flex justify-between items-center flex-row flex-wrap gap-5">
        {articles.map((channel) => (
          <ArticleCards
            key={`${channel.author}-${channel.publishedAt}-${channel.url}`}
            title={channel.title.split("-")[0]}
            img={
              channel.urlToImage === null
                ? NoImg
                : channel.urlToImage === ""
                ? NoImg
                : channel.urlToImage
            }
            author={channel.author === null ? "no author" : channel.author}
            date={channel.publishedAt.slice(12, 16)}
            link={channel.url}
          />
        ))}
      </div>
      <div className="flex justify-center items-center gap-5">
        <button
          className="bg-pinkZel w-[75px] h-[24px] text-sm text-purpleRain font-medium rounded-[5px]"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <p>Page {currentPage}</p>
        <button
          className="bg-pinkZel w-[75px] h-[24px] text-sm text-purpleRain font-medium rounded-[5px]"
          onClick={handleNext}
          disabled={currentPage === totalArticles}
        >
          Next
        </button>
      </div>
    </div>
  );
}
