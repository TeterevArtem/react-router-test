import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Aboutpage from "./pages/Aboutpage/Aboutpage.jsx";
import Postspage from "./pages/Postspage/Postspage.jsx";
import Notfoundpage from "./pages/Notfoundpage/Notfoundpage.jsx";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage.jsx";

import "./App.css";
import Layout from "./components/Layout/Layout.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<Aboutpage />} />
          <Route path="posts" element={<Postspage />} />
          <Route path="post/:id" element={<SinglePostPage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
