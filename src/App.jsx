import React, { useEffect, useState } from "react";
import Nevbar from "./components/Nevbar";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Sevas from "./components/Sevas";

const App = () => {
  const [Images, setImages] = useState([]);
  const [search, setSearch] = useState("nature");
  const [loader, setLoader] = useState(true);
  const [saved, setSaved] = useState([]);

  const API_KEY = "3Ybw8UqZRmrV3rNTOXjdzcahwOv9gUVh6KAytD0NnZe1OsFrSZaXHK2r";

  useEffect(() => {
    const fetchImage = async () => {
      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=${search}&per_page=80`,
        {
          headers: { Authorization: API_KEY },
        }
      );
      // console.log("response.from API = ",res.data.photos)
      setImages(res.data.photos);
      setLoader(false);
      console.log(Images); //bara lagse
    };

    const data = JSON.parse(localStorage.getItem("images"));
    if (data) {
      setSaved(data);
    }

    fetchImage();
  }, [search]);

  useEffect(() => {
    if (saved.length != 0) {
      const json = JSON.stringify(saved);
      localStorage.setItem("images", json);
    }
  }, [saved]);

  console.log("image is saved", saved);

  return (
    <>
      <Router>
        <Nevbar setSearch={setSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                Images={Images}
                loader={loader}
                saved={saved}
                setSaved={setSaved}
              />
            }
          />
          <Route
            path="/Sevas"
            element={<Sevas saved={saved} loader={loader} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
