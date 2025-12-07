import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Story1 from "./pages/Story1";
import Story2 from "./pages/Story2";
import Story3 from "./pages/Story3";
import Story4 from "./pages/Story4";
import Story5 from "./pages/Story5";
import Story6 from "./pages/Story6";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story1" element={<Story1 />} />
          <Route path="/story2" element={<Story2 />} />
          <Route path="/story3" element={<Story3 />} />
          <Route path="/story4" element={<Story4 />} />
          <Route path="/story5" element={<Story5 />} />
          <Route path="/story6" element={<Story6 />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
