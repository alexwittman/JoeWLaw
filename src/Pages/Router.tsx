import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Bankruptcy from "./Bankruptcy";
import Blog from "./Blog";
import Contact from "./Contact";
import Covid from "./Covid";
import FAQ from "./FAQ";
import Home from "./Home";
import Reviews from "./Reviews";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bankruptcy" element={<Bankruptcy />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/covid" element={<Covid />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
