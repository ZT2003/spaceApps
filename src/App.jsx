import "./App.css";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import AboutUs from "./pages/about";
import Dash from "./pages/dashboard";
import References from "./pages/references";
import Error from "./pages/error";
import { useState } from "react";

function App() {
  const [english, setEnglish] = useState(true);

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Dash english={english} setEnglish={setEnglish} />} />
          <Route path="about" element={<AboutUs english={english} setEnglish={setEnglish} />} />
          <Route path="ref" element={<References english={english} setEnglish={setEnglish} />} />
          <Route path="*" element={<Error english={english} setEnglish={setEnglish} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
