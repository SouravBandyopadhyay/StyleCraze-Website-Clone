import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Copyright from "../Components/Copyright";
import "./News.css"
function News() {
  const axios = require("axios");
  const [news, setNews] = useState([]);
  const options = {
    method: "GET",
    url: "https://live-fitness-and-health-news.p.rapidapi.com/news",
    headers: {
      "X-RapidAPI-Key": "5f6fbc43c7msh7b2892562f48991p1a0887jsn43b5969c2659",
      "X-RapidAPI-Host": "live-fitness-and-health-news.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setNews(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1>Welcome to Section News</h1>
      {/* API rendering */}
        {news.map((el) => (
          <div className="news_api_box">
            <h2 key={el.id}>{el.title}</h2>
            <p> Source: <strong>{el.source}</strong></p>
            <a href={el.url}>Read More...</a>
          </div>
        ))}
      {/* API rendering Ends*/}
      <Footer />
      <Copyright />
    </>
  );
}
export default News;
