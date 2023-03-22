import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Aboutpage from "./pages/Aboutpage/Aboutpage.jsx";
import Blogpage from "./pages/Blogpage/Blogpage.jsx";
import Notfoundpage from "./pages/Notfoundpage/Notfoundpage.jsx";

import "./App.css";
import Layout from "./components/Layout/Layout.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<Aboutpage />} />
          <Route path="blog" element={<Blogpage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
