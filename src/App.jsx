

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";

// Temporary empty pages just to check routing

import Home from "./pages/Home/Home"

import About from "./pages/About/About"

import Contact from "./pages/Contact/Contact"

import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        {/* MainLayout wraps Navbar + Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>


        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </Router>
  );
}

export default App;
