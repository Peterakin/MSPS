import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Notfound from "./Pages/Notfound/Notfound";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default App;
