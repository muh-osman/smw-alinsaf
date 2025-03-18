import style from "./Navbar.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
//
import logo from "../Assets/Images/logo.png";
// MUI Icons
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const location = useLocation();
  const navBoxRef = useRef();
  const burgerMenuRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (isNavOpen) {
      navBoxRef.current.style.height = "293px";
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
            <Link to="/contact">تواصل معنا</Link>
          </div>
          <div className={style.big_screen_links}>
            <Link to="/about">من نحن</Link>
          </div>
          <div className={style.big_screen_links}>
            <a href="https://smwalinsaf.com/blog/">المدونة</a>
          </div>
          {location.pathname === "/" ? (
            <div className={style.big_screen_links}>
              <a href="#faq">الأسئلة الشائعة</a>
            </div>
          ) : (
            <div className={style.big_screen_links}>
              <Link to={"/#faq"}>الأسئلة الشائعة</Link>
            </div>
          )}
          <div className={style.big_screen_links}>
            <Link to="/services">خدماتنا</Link>
          </div>
          <div className={style.big_screen_links}>
            <Link to="/">الرئيسية</Link>
          </div>

          {/* Small Screen */}
          <button onClick={() => setIsNavOpen((prev) => !prev)}>
            <MenuIcon ref={burgerMenuRef} sx={{ fontSize: "32px" }} />
          </button>
        </div>
        <div className={style.logo_box}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className={style.small_screen_box} ref={navBoxRef}>
          <div className={style.small_screen_links}>
            <Link to="/contact" style={{ border: "none" }}>
              تواصل معنا
            </Link>
          </div>
          <div className={style.small_screen_links}>
            <Link to="/about">من نحن</Link>
          </div>
          <div className={style.small_screen_links}>
            <a href="https://smwalinsaf.com/blog/">المدونة</a>
          </div>
          {location.pathname === "/" ? (
            <div className={style.small_screen_links}>
              <a href="#faq">الأسئلة الشائعة</a>
            </div>
          ) : (
            <div className={style.small_screen_links}>
              <Link to={"/#faq"}>الأسئلة الشائعة</Link>
            </div>
          )}
          <div className={style.small_screen_links}>
            <Link to="/services">خدماتنا</Link>
          </div>
          <div className={style.small_screen_links}>
            <Link to="/">الرئيسية</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
