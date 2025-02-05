import style from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
//
import logo from "../Assets/Images/logo.png";
// MUI Icons
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const navBoxRef = useRef();
  const burgerMenuRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (isNavOpen) {
      navBoxRef.current.style.height = "245px";
      burgerMenuRef.current.style.rotate = "90deg";
    } else {
      navBoxRef.current.style.height = "0px";
      burgerMenuRef.current.style.rotate = "0deg";
    }
  }, [isNavOpen]);

  return (
    <div className={style.navbar_container}>
      <div className={style.navbar_box}>
        <div className={style.links_box}>
          {/* Big Screen */}
          <div className={style.big_screen_links}>
            <Link to="/">تواصل معنا</Link>
          </div>
          <div className={style.big_screen_links}>
            <Link to="/">المدونة</Link>
          </div>
          <div className={style.big_screen_links}>
            <Link to="/">خدماتنا</Link>
          </div>
          <div className={style.big_screen_links}>
            <Link to="/">من نحن</Link>
          </div>
          <div className={style.big_screen_links}>
            <Link to="/">الرئيسية</Link>
          </div>
          {/* Small Screen */}
          <button
            ref={burgerMenuRef}
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <MenuIcon sx={{ fontSize: "32px" }} />
          </button>
        </div>
        <div className={style.logo_box}>
          <img src={logo} alt="logo" />
        </div>

        <div className={style.small_screen_box} ref={navBoxRef}>
          <div className={style.small_screen_links}>
            <Link to="/">تواصل معنا</Link>
          </div>
          <div className={style.small_screen_links}>
            <Link to="/">المدونة</Link>
          </div>
          <div className={style.small_screen_links}>
            <Link to="/">خدماتنا</Link>
          </div>
          <div className={style.small_screen_links}>
            <Link to="/">من نحن</Link>
          </div>
          <div className={style.small_screen_links}>
            <Link to="/">الرئيسية</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
