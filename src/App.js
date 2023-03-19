import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Aboutpage from "./pages/Aboutpage/Aboutpage.jsx";
import Blogpage from "./pages/Blogpage/Blogpage.jsx";
import Notfoundpage from "./pages/Notfoundpage/Notfoundpage.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
