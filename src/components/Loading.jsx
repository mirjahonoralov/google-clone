import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  .balls {
    width: 3.5em;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
  }

  .balls div {
    width: 0.8em;
    height: 0.8em;
    border-radius: 50%;
    background-color: #3cefff;
    transform: translateY(-100%);
    animation: wave 0.8s ease-in-out alternate infinite;
  }

  .balls div:nth-of-type(1) {
    animation-delay: -0.4s;
  }

  .balls div:nth-of-type(2) {
    animation-delay: -0.2s;
  }

  @keyframes wave {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(100%);
    }
  }
`;

export const Loading = () => {
  return (
    <Wrapper>
      <div class="balls">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Wrapper>
  );
};
