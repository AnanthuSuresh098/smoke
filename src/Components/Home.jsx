import "./Home.css";
import { Link } from "react-router-dom";

export const Home = () => {

const handleFocus = (e) => {
  e.target.style.borderBottom = "1px solid #464B4E";
};

const handleBlur = (e) => {
  e.target.style.borderBottom = "none";
};

  return (
    <div id="main_wrapper">
      <div id="Homepage-main-header">
        <div className="Homepage-main-header-sections">
          <img src="dealers.png" alt="logo192.png" />
        </div>
        <div id="Homepage-main-header-sections-smoke">
          <img src="smoke.png" alt="logo192.png" />
        </div>
        <div className="Homepage-main-header-sections">
          <img src="brands.png" alt="logo192.png" />
        </div>
      </div>

      <div id="homepage-image-wrapper">
        <div className="homepage-images">
          <img src="image-1.png" alt="logo192.png" />
        </div>
        <div className="homepage-images">
          <img src="image-2.png" alt="logo192.png" />
        </div>
        <div className="homepage-images">
          <img src="image-3.png" alt="logo192.png" />
        </div>
      </div>

      <div id="homepage_menu_wrapper">
        <Link
          to="/"
          className="menu_sections_links"
          onFocus={(e) => handleFocus(e)}
          onBlur={(e) => handleBlur(e)}
        >
          <div className="homepage_menu_sections">
            <img src="all.png" alt="logo192.png" />
            <div>All</div>
          </div>
        </Link>
        <Link
          to="/menu_1"
          className="menu_sections_links"
          onFocus={(e) => handleFocus(e)}
          onBlur={(e) => handleBlur(e)}
        >
          <div className="homepage_menu_sections">
            <img src="menu.png" alt="logo192.png" />
            <div>Menu 1</div>
          </div>
        </Link>
        <Link
          to="/menu_2"
          className="menu_sections_links"
          onFocus={(e) => handleFocus(e)}
          onBlur={(e) => handleBlur(e)}
        >
          <div className="homepage_menu_sections">
            <img src="menu.png" alt="logo192.png" />
            <div>Menu 2</div>
          </div>
        </Link>
        <Link
          to="/menu_3"
          className="menu_sections_links"
          onFocus={(e) => handleFocus(e)}
          onBlur={(e) => handleBlur(e)}
        >
          <div className="homepage_menu_sections">
            <img src="menu.png" alt="logo192.png" />
            <div>Menu 3</div>
          </div>
        </Link>
        <Link
          to="/menu_4"
          className="menu_sections_links"
          onFocus={(e) => handleFocus(e)}
          onBlur={(e) => handleBlur(e)}
        >
          <div className="homepage_menu_sections">
            <img src="menu.png" alt="logo192.png" />
            <div>Menu 4</div>
          </div>
        </Link>
        <div
          className="homepage_menu_sections"
          id="homepage_menu_sections_arrow"
        >
          <img src="uparrow.png" alt="logo192.png" />
        </div>
      </div>
    </div>
  );}