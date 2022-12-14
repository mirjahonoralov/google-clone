import React from "react";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
import { useResultContext } from "../../contexts/ResultContextProvider";
import { Loading } from "../Loading";
import {
  ImagesWrapper,
  ImageWrapper,
  PlayerWrapper,
  VideosWrapper,
  VideoWrapper,
  Wrapper,
} from "./style";

export const Results = ({ darkTheme }) => {
  const { getResults, results, loading, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/video")
        getResults(`/search/q=${searchTerm} video`);
      else getResults(`${location.pathname}/q=${searchTerm}&num=30`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, location.pathname]);

  if (loading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <Wrapper darkTheme={darkTheme}>
          {results?.results?.map(({ link, title }, index) => (
            <a href={link} target="_blank" rel="noreferrer" key={index}>
              <p>{link.length > 30 ? link.substring(0, 30) : link}</p>
              <h2>{title}</h2>
            </a>
          ))}
        </Wrapper>
      );
    case "/news":
      return (
        <Wrapper darkTheme={darkTheme}>
          {results?.entries?.map(({ link, title }, index) => (
            <a href={link} target="_blank" rel="noreferrer" key={index}>
              <p>{link.length > 30 ? link.substring(0, 30) : link}</p>
              <h2>{title}</h2>
            </a>
          ))}
        </Wrapper>
      );
    case "/video":
      return (
        <VideosWrapper>
          {results?.results?.map((video, index) => (
            <VideoWrapper key={index} darkTheme={darkTheme}>
              <a href={video?.link}>
                <p>{video?.link}</p>
                <h2>{video?.title}</h2>
              </a>

              {video?.additional_links?.[0]?.href && (
                <PlayerWrapper>
                  <ReactPlayer
                    url={video?.additional_links?.[0]?.href}
                    controls
                    className="videoPlayer"
                    key={index}
                  />
                  <div>
                    <p style={{ marginBottom: "10px" }}>{video?.description}</p>
                    <p>{video?.title}</p>
                  </div>
                </PlayerWrapper>
              )}
            </VideoWrapper>
          ))}
        </VideosWrapper>
      );
    case "/image":
      return (
        <ImagesWrapper darkTheme={darkTheme}>
          {results?.image_results?.map(({ link, image }, index) => (
            <a href={link.href} target="_blank" rel="noreferrer" key={index}>
              <ImageWrapper>
                <img src={image.src} alt={image.alt} />
              </ImageWrapper>
              <p>{link?.title}</p>
            </a>
          ))}
        </ImagesWrapper>
      );
    default:
      return "ERROR!";
  }
};
