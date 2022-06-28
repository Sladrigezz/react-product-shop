import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./pages/Cart/Cart";
import { Main } from "./pages/Main/Main";
import { Header } from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
