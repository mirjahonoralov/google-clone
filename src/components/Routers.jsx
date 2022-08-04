import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Results } from "./results";

export const Routers = ({ darkTheme }) => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/search" />} />
        <Route
          exact
          path="/search"
          element={<Results darkTheme={darkTheme} />}
        />
        <Route
          exact
          path="/image"
          element={<Results darkTheme={darkTheme} />}
        />
        <Route exact path="/news" element={<Results darkTheme={darkTheme} />} />
        <Route
          exact
          path="/video"
          element={<Results darkTheme={darkTheme} />}
        />
      </Routes>
    </div>
  );
};
