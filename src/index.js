import ReactDOM from "react-dom";
import App from "./App";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ResultContextProvider } from "./contexts/ResultContextProvider";
// import { Route, Routes } from "react-router-dom";

ReactDOM.render(
  <ResultContextProvider>
    <Router>
      <App />,
    </Router>
  </ResultContextProvider>,
  document.getElementById("root")
);
