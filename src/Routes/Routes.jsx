import { Routes, Route } from "react-router-dom";
import { Home } from "../Components/Home";
import { Products } from "../Components/Products";
import { Menu_1 } from "../Components/Menu-1";
import { Menu_2 } from "../Components/Menu-2";
import { Menu_3 } from "../Components/Menu-3";
import { Menu_4 } from "../Components/Menu-4";

export const Mainroutes = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Products />} />
        <Route path="/menu_1" element={<Menu_1 />} />
        <Route path="/menu_2" element={<Menu_2 />} />
        <Route path="/menu_3" element={<Menu_3 />} />
        <Route path="/menu_4" element={<Menu_4 />} />  */}
      </Routes>
    </>
  );
};
