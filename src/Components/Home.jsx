import "./Home.css";

export const Home = () => {
  return (
    <div>
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

      <div id="homepage_menus_wrapper">
        <div className="homepage_menu_sections">
          <img src="all.png" alt="logo192.png" />
          <div>All</div>
        </div>
        <div className="homepage_menu_sections">
          <img src="menu.png" alt="logo192.png" />
          <div>Menu 1</div>
        </div>
        <div className="homepage_menu_sections">
          <img src="menu.png" alt="logo192.png" />
          <div>Menu 2</div>
        </div>
        <div className="homepage_menu_sections">
          <img src="menu.png" alt="logo192.png" />
          <div>Menu 3</div>
        </div>
        <div className="homepage_menu_sections">
          <img src="menu.png" alt="logo192.png" />
          <div>Menu 4</div>
        </div>
        <div
          className="homepage_menu_sections"
          id="homepage_menu_sections_arrow"
        >
          <img src="uparrow.png" alt="logo192.png" />
        </div>
      </div>
    </div>
  );
};
