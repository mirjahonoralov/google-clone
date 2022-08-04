import styled from "styled-components";

export const Container = styled.div`
  padding-top: 30px;
  color: ${({ darkTheme }) => (darkTheme ? "#fff" : "#000")};
  background: ${({ darkTheme }) => (darkTheme ? "#3e3e42" : "#fff")};
`;
export const Wrapper = styled.div``;
