import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ArticleCards from "../../components/ArticleCards/ArticleCards";
import NoImg from "../../assets/No_Image_Available.jpg";
import LeftIcon from "../../assets/352467_arrow_left_icon (1).png";
import RightIcon from "../../assets/352468_arrow_right_icon (1).png";

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
        <h2 className="font-semibold">
          {name === "tech"
            ? "Technology"
            : name === "crypto"
            ? "Crypto"
            : name === "sports"
            ? "Sports"
            : name === "gb"
            ? "Great Britain"
            : name === "us"
            ? "America"
            : name === "world"
            ? "World"
            : "no channel"}{" "}
          Channel
        </h2>
        <button
          className="h-[24px] text-sm text-purpleRain font-medium rounded-[5px]"
          onClick={handleNavigate}
        >
          <div className="flex items-center flex-row-reverse">
            <p>Go back</p>
            <img src={LeftIcon} className="w-[20px]" />
          </div>
        </button>
      </div>
      <div className="mt-5 flex justify-between items-center flex-row flex-wrap gap-5">
        {articles.map((channel) => (
          <ArticleCards
            key={`${channel.author}-${channel.publishedAt}-${channel.url}`}
            title={
              channel.title.length > 50
                ? `${channel.title.slice(0, 40)}...`
                : channel.title
            }
            img={
              channel.urlToImage === null
                ? NoImg
                : channel.urlToImage === ""
                ? NoImg
                : channel.urlToImage
            }
            author={
              channel.author === null
                ? "no author"
                : channel.author === ""
                ? "no author"
                : channel.author.length > 20
                ? `${channel.author.slice(0, 20)}...`
                : channel.author
            }
            date={channel.publishedAt.slice(12, 16)}
            link={channel.url}
          />
        ))}
      </div>
      <div className="flex justify-center items-center mt-8">
        <button
          className="w-[75px] h-[24px] text-sm text-purpleRain font-semibold"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          <div className="flex items-center">
            <img src={LeftIcon} className="w-[20px]" />
            <p>Prev</p>
          </div>
        </button>
        <p className="text-sm bg-pinkZel rounded-full w-[30px] h-[30px] flex justify-center items-center text-purpleRain font-bold border-purpleRain border-[2px]">
          {" "}
          {currentPage}
        </p>
        <button
          className="w-[75px] h-[24px] text-sm text-purpleRain font-medium"
          onClick={handleNext}
          disabled={currentPage === totalArticles}
        >
          <div className="flex items-center flex-row-reverse">
            <img src={RightIcon} className="w-[20px]" />
            <p>Next</p>
          </div>
        </button>
      </div>
    </div>
  );
}
