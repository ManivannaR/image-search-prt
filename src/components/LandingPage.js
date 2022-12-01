import React, { useState } from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = ({ bookmarkedUrls, setBookMarkedUrls }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const loadBookmarkPage = () => {
    navigate("/bookmarks");
  };

  const fetchImages = async () => {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?client_id=eS3kKt623s4jI-Ez7WCnz7CA4wGa4ffo8Qh92XkDbsE&query=${input}&per_page=30`
    );
    const data = await res.json();
    const photos = data.results;
    setImages(photos);
  };

  return (
    <div className="main-container">
      <h3 id="main-heading">React Photo Search</h3>
      <button id="bookmark-btn" onClick={loadBookmarkPage}>
        Bookmarks
      </button>
      <input
        type="text"
        placeholder="Search free high resolution images"
        id="input-field"
        onChange={handleChange}
      />
      <button id="search-btn" onClick={fetchImages}>
        Search
      </button>
      <div className="images-holder">
        {images.map((obj) => {
          return (
            <div key={obj.id} className="single-image-container">
              <img
                src={obj.urls.small}
                alt="api-images"
                className="result-images"
                title="Click to add to bookmarks"
                onClick={(e) => {
                  setBookMarkedUrls(bookmarkedUrls.concat([e.target.src]));
                  console.log(bookmarkedUrls);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LandingPage;

// let array =[]

// array.concat
