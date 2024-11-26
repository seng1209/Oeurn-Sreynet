import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";

import HomePage from "./pages/HomePage";
import BillBoard from "./pages/BillBoard";
import Service from "./pages/Service";
import Mobile from "./pages/Mobile";
import SmartWatch from "./pages/SmartWatch";
import YealySale from "./pages/YealySale";
import LatestBlog from "./pages/LatestBlog";
import Testimonials from "./pages/Testimonials";
import Subscribe from "./pages/Subscribe";
import Instagram from "./pages/Instagram";
import Footer from "./pages/Footer";
import FooterBotton from "./pages/FooterBotton";

import ProductList from "./pages/ProductList";
import WomenClothing from "./pages/WomenClothing";
import MenClothing from "./pages/MenClothing";
import Electronic from "./pages/Electronic";

function App() {
  return (
    <div className="App">
      <Navigation />
      <BillBoard />
      <Service />
      <ProductList />
      <WomenClothing />
      <MenClothing />
      <Electronic />
      {/* <Mobile /> */}
      {/* <SmartWatch /> */}
      <YealySale />
      <LatestBlog />
      <Testimonials />
      <Subscribe />
      <Instagram />
      <Footer />
      <FooterBotton />
      {/* <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
