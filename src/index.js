import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import ListPage from "./components/Pages/ListPage";
import CreatePage from "./components/Pages/CreatePage";
import UpdatePage from "./components/Pages/UpdatePage";
import DetailPage from "./components/Pages/DetailPage";
import "bootstrap/dist/css/bootstrap.min.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ListPage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/update" element={<UpdatePage />} />
      <Route path="/detail" element={<DetailPage />} />
    </Routes>
  </BrowserRouter>
);

