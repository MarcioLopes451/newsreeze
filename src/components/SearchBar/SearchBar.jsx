import React from "react";

export default function SearchBar({ input, setInput, originalNews, setNews }) {
  const handleSearch = () => {
    if (input.trim() !== "") {
      const filteredNews = originalNews.filter((article) =>
        article.title.toLowerCase().includes(input.toLowerCase())
      );
      setNews(filteredNews);
    } else {
      setNews(originalNews);
    }
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="search for anything..."
        className="border border-greySky w-[260px] h-[40px] px-3 font-sans rounded-[10px] bg-white placeholder:text-grey"
      />
    </div>
  );
}
