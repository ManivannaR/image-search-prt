import React from "react";
import "./BookmarkPage.css";

const BookmarkPage = ({ bookmarkedUrls }) => {
  return (
    <>
      <hi>Bookmarked Images</hi>
      <div className="bookmark-images-holder">
        {bookmarkedUrls.map((src) => {
          return (
            <div key={new Date()}>
              <img
                src={src}
                alt="bookmark-pics"
                className="bookmark-result-images"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BookmarkPage;
