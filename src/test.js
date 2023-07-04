import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import style from "./test.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { BiBookmarks } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";

const Test = () => {
  const [video, setVideo] = useState([]);
  console.log("video", video);
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://api.pexels.com/videos/popular`,
      params: { per_page: 50 },
      headers: {
        Authorization:
          "Ls6M4146hi3Q2QK6tJItZcluKsKNs0R4K7NJTnbnmwSK9W2nziZrlFrE",
      },
    }).then((res) => {
      setVideo((prev) => [...prev, res.data]);
    });
  }, [page]);
  // useEffect(() => {
  //   window.addEventListener("scroll", handleinfiniteScroll);
  // });
  // const handleinfiniteScroll = async () => {
  //   // console.log("height", document.documentElement.scrollHeight);
  //   // console.log("window.innerHeigh", window.innerHeight);
  //   // console.log(
  //   //   "document.documentElement.scrollTop",
  //   //   document.documentElement.scrollTop
  //   // );
  //   try {
  //     if (
  //       window.innerHeight + document.documentElement.scrollHeight >=
  //       document.documentElement.scrollTop
  //     ) {
  //       setPage((prev) => prev + 1);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      <div className={style.outer_section}>
        <div className={style.app_videos}>
          {video?.map((data, index) => {
            return (
              <div className={style.scroll_container}>
                {data.videos.map((item, index) => {
                  return (
                    <div key={index} className={style.video_wrapper}>
                      {/* <video
                      controls
                      autoPlay
                      width="320"
                      style={{ minHeight: "100vh" }}
                      className={style.video}
                    >
                      <source
                        src={item.video_files[0].link}
                        className={style.video_player}
                      />
                    </video> */}
                      <img
                        src={`https://picsum.photos/480/720
`}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className={style.right_of_reel_section}>
          <div className={style.like_btn}>
            <AiOutlineHeart />
          </div>
          <div className={style.comment_btn}>
            <FaRegComment />
          </div>
          <div className={style.share_btn}>
            <PiPaperPlaneTiltBold />
          </div>
          <div className={style.bookmark_btn}>
            <BiBookmarks />
          </div>
          <div className={style.userProfile_icon}>
            <FaRegUserCircle />
          </div>
        </div>
      </div>

      {/* <footer className={style.footer}>
        <div className={style.mainFooter}>
          <div className={style.userProfile_icon}>
            <FaUserCircle />
          </div>
        </div>
      </footer> */}
    </>
  );
};

export default Test;
