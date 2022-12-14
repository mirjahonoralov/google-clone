import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ResultContextProvider } from "./contexts/ResultContextProvider";
import "./global.css";

ReactDOM.render(
  <ResultContextProvider>
    <Router>
      <App />,
    </Router>
  </ResultContextProvider>,
  document.getElementById("root")
);
