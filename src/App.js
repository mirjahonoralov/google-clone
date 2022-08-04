import React, { useState } from "react";

import { Navbar } from "./components/navbar";
import { Footer } from "./components/Footer";
import { Routers } from "./components/Routers";
import { Container, Wrapper } from "./App.style";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <Container darkTheme={darkTheme}>
      <Wrapper>
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routers darkTheme={darkTheme} />
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default App;
