import React, { useEffect, useState } from "react";
import axios from "axios";
// import Pagination from "../Components/Pagination"
import "./SkinCare.css";
import Footer from "../Components/Footer"
import Copyright from "../Components/Copyright"
function SkinCare() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`
      )
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1>Welcome to SkinCare</h1>
      <p>
        A facial is a skin care treatment that involves exfoliating and
        cleansing to eliminate dirt, dead skin, and impurities. It can be
        performed by an esthetician at a spa or a beauty salon or by a
        dermatologist at their clinic. Here are some recommendations  for your skincare
      </p>
      <div>
        <ul>
          {posts.map((post) => (
            <div className="skincare_api_box" key={post.id}>
              <h2>{post.name}</h2>
              <div className="skincare_api_desc">
                <img
                  className="skincare_api_desc_logo"
                  src={post.image_link}
                  alt="skincare"
                  srcset=""
                />
                <p className="skincare_api_desc_about">{post.description}</p>
                <p>
                  {" "}
                  <strong>
                    <i>$ {post.price}</i>
                  </strong>{" "}
                </p>
              </div>
            </div>
          ))}
        </ul>
      </div>
    <Footer/>
    <Copyright/>
    </>
  );
}
export default SkinCare;
