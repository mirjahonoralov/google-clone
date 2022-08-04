import { createContext, useContext, useState } from "react";
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

const ResultContext = createContext();

export const ResultContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("javascript");
  const [results, setResults] = useState(null);

  const getResults = async (type) => {
    setLoading(true);

    const res = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "EU",
        "X-RapidAPI-Key": "65fb2e02a1mshccb6f80cb6c147bp12b8b2jsn09dc4c2b1645",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      },
    });
    const data = await res.json();
    setResults(data);

    setLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, loading, setSearchTerm, searchTerm }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
