import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import MakeUp from "./MakeUp.jsx";
import HairCare from "./HairCare";
import SkinCare from "./SkinCare";
import HairStyle from "./HairStyle";
import HealthWellness from "./HealthWellness";
import News from "./News";
import Products from "./Products";
import AboutUs from "./AboutUs";
import BmiCheck from "./BmiCheck";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/makeup" element={<MakeUp />} />
        <Route path="/haircare" element={<HairCare />} />
        <Route path="/skincare" element={<SkinCare />} />
        <Route path="/hairstyle" element={<HairStyle />} />
        <Route path="/health_wellness" element={<HealthWellness />} />
        <Route path="/news" element={<News />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about_us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
