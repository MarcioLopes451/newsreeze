import React, { useEffect } from "react";

export default function SearchBar({
  input,
  setInput,
  news,
  originalNews,
  setNews,
}) {
  const handleSearch = () => {
    if (input.trim() !== "") {
      // Filter from originalNews instead of news
      const filteredNews = originalNews.filter((article) =>
        article.title.toLowerCase().includes(input.toLowerCase())
      );
      setNews(filteredNews);
    } else {
      // Reset to originalNews if input is empty
      setNews(originalNews);
    }
    setInput("");
  };

  //   const handleKeyDown = (e) => {
  //     if (e.key === "Enter") {
  //       handleSearch();
  //     }
  //   };

  useEffect(() => {
    console.log("News updated:", news);
  }, [news]);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        //onKeyDown={handleKeyDown}
        placeholder="search for anything..."
        className="border border-greySky w-[260px] h-[40px] px-3 font-sans rounded-3xl"
      />
      <button onClick={handleSearch}>search</button>
    </div>
  );
}
