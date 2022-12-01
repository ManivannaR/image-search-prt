import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import BookmarkPage from "./components/BookmarkPage";

function App() {
  const [bookmarkedUrls, setBookMarkedUrls] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                bookmarkedUrls={bookmarkedUrls}
                setBookMarkedUrls={setBookMarkedUrls}
              />
            }
          />
          <Route
            path="/bookmarks"
            element={
              <BookmarkPage
                bookmarkedUrls={bookmarkedUrls}
                setBookMarkedUrls={setBookMarkedUrls}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
