import { Link, NavLink } from "react-router-dom";
import "./NavStyle.css";
function Navbar() {
  const activeStyle = {
    color: "red",
  };
  const defaultSyle = {
    color: "black",
  };
  return (
    <div className="box">
      <div id="home_logo" >
        <Link to="/">
        <img
          src="https://cdn2.stylecraze.com/wp-content/themes/buddyboss-child/images/sc-logo.png"
          alt="StyleCraze"
          srcset=""
        />
        </Link>
      </div>
      <div className="links">
        <Link className="link" to="/makeup">MAKEUP</Link>
        <Link className="link" to="/haircare">HAIR CARE</Link>
        <Link className="link" to="/skincare">SKIN CARE</Link>
        <Link className="link" to="/hairstyle">HAIRSTYLES</Link>
        <Link className="link" to="/health_wellness">HEALTH & WELLNESS</Link>
        <Link className="link" to="/news">NEWS</Link>
        <Link className="link" to="/products">PRODUCTS</Link>
        <Link className="link" to="/about_us">ABOUT US</Link>
      </div>
    </div>
  );
}
export default Navbar;
