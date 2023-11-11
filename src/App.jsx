import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Home from "./Screens/Home";
import Work from "./Screens/Work";
import { Link, Outlet } from "react-router-dom";

import Nav from "./components/Nav";

export default function App() {
  return (
    <main className="md:mx-[192px] mx-9">
      <Nav />
      <Link to="/Scratch-Final-Portfolio/">Home</Link>
      <Link to="/Scratch-Final-Portfolio/about">About</Link>

      <Outlet />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    </main>
  );
}
