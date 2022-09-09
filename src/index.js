import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopMovies from "./TopMovies";
import TopSeries from "./TopSeries";

import reportWebVitals from "./reportWebVitals";
import Main from "./Main";
import FullPage from "./FullPage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="TopMovies" element={<TopMovies />} />

      <Route path="TopSeries" element={<TopSeries />} />
      <Route path="/FullPage" element={<FullPage />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
