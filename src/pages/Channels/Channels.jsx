import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ArticleCards from "../../components/ArticleCards/ArticleCards";
import NoImg from "../../assets/No_Image_Available.jpg";

export default function Channels() {
  const [channels, setChannels] = useState([]);
  const { name } = useParams();
  const navigation = useNavigate();

  const api_url = `https://newsapi.org/v2/everything?q=${name}&apiKey=3e41fa0ff049417392568d35d92d96d6`;

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

  const handleNavigate = () => {
    return navigation(-1);
  };
  return (
    <div>
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
        {channels.map((channel) => (
          <ArticleCards
            key={`${channel.author}-${channel.publishedAt}`}
            title={channel.title}
            img={channel.urlToImage === null ? NoImg : channel.urlToImage}
            author={channel.author === null ? "no author" : channel.author}
            date={channel.publishedAt.slice(12, 16)}
          />
        ))}
      </div>
    </div>
  );
}
