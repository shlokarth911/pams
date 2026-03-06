import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Story from "./pages/Story";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/story" element={<Story />} />
    </Routes>
  );
}

export default App;
