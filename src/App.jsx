import React from "react";
import { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { SiTumblr } from "react-icons/si";

function App() {
  const [quote, setQuote] = useState({
    text: "You can never cross the ocean until you have the courage to lost  sight of the shore.",
    author: "-Christopher Columbus",
  });

  const [bgColor, setBgColor] = useState("bg-blue-500");
  const [textColor, setTextColor] = useState("text-blue-500");

  const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      text: "In the end, it's not the years in your life that count. It's the life in your years.",
      author: "Abraham Lincoln",
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      text: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela",
    },
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
      author: "Walt Whitman",
    },
  ];

  const tailwindColors = [
    "bg-red-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-orange-500",
    "bg-teal-500",
    "bg-cyan-500",
  ];

  const tailwindTextColors = [
    "text-red-500",
    "text-yellow-500",
    "text-green-500",
    "text-blue-500",
    "text-indigo-500",
    "text-purple-500",
    "text-pink-500",
    "text-orange-500",
    "text-teal-500",
    "text-cyan-500",
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = () => {
    return quotes[randomIndex];
  };

  const randomColor = () => {
    return tailwindColors[randomIndex];
  };

  const randomTextColor = () => {
    return tailwindTextColors[randomIndex];
  };

  const handleClick = () => {
    const newQuote = randomQuote();
    setQuote(newQuote);
    const newColor = randomColor();
    setBgColor(newColor);
    const newTextColor = randomTextColor();
    setTextColor(newTextColor);
  };

  const handleTwitterClick = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text="${quote.text}" -${quote.author}`;
    window.open(twitterUrl, '_blank');
  };
  
  const handleTumblrClick = () => {
    const tumblrUrl = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption="${quote.text}" -${quote.author}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;
    window.open(tumblrUrl, '_blank');
  };
  

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${bgColor}`}
    >
      <div
        className="max-w-[40vw] min-h-[40vh] bg-gray-100 flex flex-col items-center justify-center rounded-md sm:min-h-[60%] sm:min-w-[80%]"
        id="quote-box"
      >
        <div
          id="text"
          className={`${textColor} text-center text-3xl max-w-[70%] mt-6 mb sm:min-w-[80%]`}
        >
           <h1 className="text-xl md:text-2xl lg:text-3xl">"{quote.text}</h1>
        </div>
        <div className={`${textColor} my-3 ml-[50%] text-base sm:text-sm md:text-base lg:text-lg`} id="author">
          -{quote.author}
        </div>

        <div className="button flex flex-row mb-6 gap-3">
          <button
            className={`${bgColor} p-2 px-3 my-3 rounded-sm text-white sm:text-sm`}
            id="x"
            onClick={handleTwitterClick}
          >
            <BsTwitterX />
          </button>
          <button
            className={`${bgColor} p-2 px-3 my-3 rounded-sm text-white sm:text-sm`}
            id="tumblr"
            onClick={handleTumblrClick}
          >
            <SiTumblr />
          </button>

          <button
            className={`${bgColor} p-2 px-4 my-3 rounded-sm text-white sm:text-sm`}
            id="new-quote"
            onClick={() => handleClick()}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
