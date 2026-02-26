import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

export default App;
