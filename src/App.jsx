import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Home from "./Screens/Home";
import Work from "./Screens/Work";
import {
  Routes,
  Route,
  Router,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Nav from "./components/Nav";
import ErrorPage from "./Screens/ErrorPage";

export default function App() {
  return (
    <main className="mt-[37px] md:mt-[80px] mx-[30px] ss:mx-[20px] sm:mx-[40px] md:mx-[50px] lg:mx-[60px] xl:mx-[75px] 2xl:mx-[120px] 3xl:mx-[310px] 4xl:mx-[620px]">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
}
