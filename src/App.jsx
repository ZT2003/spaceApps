import "./App.css";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import AboutUs from "./pages/about";
import Dash from "./pages/dashboard";
import References from "./pages/references";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Dash />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="ref" element={<References />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
