import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Home from "./Screens/Home";
import Work from "./Screens/Work";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

export default function App() {
  return (
    <main className="md:px-[190px] mx-9">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}
