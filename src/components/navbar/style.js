import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const Container = styled.div`
  border-bottom: 2px solid silver;
  color: ${({ darkTheme }) => (darkTheme ? "#fff" : "#000")};
  background: ${({ darkTheme }) => (darkTheme ? "#3e3e42" : "#fff")};
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 90px;
  align-items: center;
  width: 100%;

  color: ${({ darkTheme }) => (darkTheme ? "#fff" : "#000")};
  background: ${({ darkTheme }) => (darkTheme ? "#3e3e42" : "#fff")};

  @media (max-width: 1120px) {
    align-items: flex-start;
  }
  @media (max-width: 800px) {
    padding: 0 20px;
  }
`;

export const Left = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  width: 100%;

  a {
    font-size: 24px;
  }

  input {
    outline: none;
    border-radius: 40px;
    height: 45px;
    padding-left: 25px;
    width: 70%;
    box-shadow: 0 0 10px #dedddd;
    background: ${({ darkTheme }) => (darkTheme ? "#3e3e42" : "#fff")};
  }

  @media (max-width: 1120px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    input {
      width: 100%;
    }
  }

  @media (max-width: 650px) {
    position: relative;
    margin-bottom: 50px;
    input {
      position: absolute;
      top: 50px;
      width: 85vw;
    }
  }
`;

export const Sections = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 20px;
  padding: 0 90px;

  @media (max-width: 800px) {
    padding: 0 20px;
  }
`;

export const Section = styled(NavLink)`
  cursor: pointer;
  font-size: 20px;
  display: flex;
  gap: 5px;
  align-items: center;
  border-bottom: ${({ isActive, darkTheme }) =>
    isActive && !darkTheme
      ? "3px solid #000"
      : isActive && darkTheme && "3px solid #fff"};

  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

export const Theme = styled.div`
  padding: 5px 10px;
  border: ${({ darkTheme }) =>
    darkTheme ? "1px solid yellow" : "1px solid #303030"};
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;
`;
