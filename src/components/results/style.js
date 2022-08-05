import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px 80px;
  row-gap: 20px;
  column-gap: 50px;
  color: ${({ darkTheme }) => (darkTheme ? "#fff" : "#000")};
  background: ${({ darkTheme }) => (darkTheme ? "#3e3e42" : "#fff")};
  a {
    h2 {
      color: ${({ darkTheme }) => (darkTheme ? "#fff" : "blue")};

      text-decoration: underline;
      font-size: 20px;
    }
  }

  img {
    width: 150px;
  }

  @media (max-width: 800px) {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
`;

export const ImagesWrapper = styled.div`
  padding: 20px 80px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 30px;
  a {
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 200px;
    height: 200px;

    p {
      width: 200px;
    }
  }
`;

export const ImageWrapper = styled.div`
  height: 200px;
  display: flex;
  align-items: center;

  img {
    width: fit-content;
    :hover {
      box-shadow: 0 0 7px 7px #3e3e42;
    }
  }
`;

export const VideosWrapper = styled.div`
  padding: 20px 80px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

export const VideoWrapper = styled.div`
  /* width: 70%; */
  display: flex;
  flex-direction: column;
  gap: 10px;
  a {
    h2 {
      font-size: 22px;
      color: ${({ darkTheme }) => (darkTheme ? "#fff" : "blue")};
    }
  }
`;

export const PlayerWrapper = styled.div`
  display: flex;
  gap: 20px;
  /* width: 300px; */

  .videoPlayer {
    width: 250px !important;
  }

  p {
    width: 60%;
  }
`;
