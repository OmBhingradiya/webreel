import React, { useEffect, useState } from "react";
import axios from "axios";
import Test from "./test";

const App = () => {
  const [first, setfirst] = useState("dw");
  // const data = axios.get(`https://api.pexels.com/videos/popular?per_page=1`, {
  //   header: {
  //     Authorization: "Ls6M4146hi3Q2QK6tJItZcluKsKNs0R4K7NJTnbnmwSK9W2nziZrlFrE",
  //   },
  // });
  // console.log("data", data);

  // useEffect(() => {
  //   fetch("https://api.pexels.com/videos/popular?per_page=1", {
  //     method: "get",
  //     headers: new Headers({
  //       Authorization:
  //         "Ls6M4146hi3Q2QK6tJItZcluKsKNs0R4K7NJTnbnmwSK9W2nziZrlFrE",
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => setfirst(res));
  // }, [first]);

  const [videos, setVideos] = useState([]);
  // console.log("videos", videos);

  useEffect(() => {
    const fetchPopularVideos = async () => {
      try {
        const response = await axios.get(
          `https://api.pexels.com/videos/popular?per_page=100`,
          {
            headers: {
              Authorization:
                "Ls6M4146hi3Q2QK6tJItZcluKsKNs0R4K7NJTnbnmwSK9W2nziZrlFrE",
            },
          }
        );
        setVideos(response.data.videos);
      } catch (error) {
        console.error("Error fetching popular videos:", error);
      }
    };

    fetchPopularVideos();
  }, []);

  return (
    <>
      {/* {videos.video_files?.map((data, index) => {
        return (
          <div key={index}>
            <video width="320" height="240" controls autoPlay>
              <source src={data.link} type="video/mp4" />
            </video>
          </div>
        );
      })} */}
      <Test />
    </>
  );
};
export default App;
