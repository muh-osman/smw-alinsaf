import style from "./Banner.module.scss";
import { Link } from "react-router-dom";
// MUI Icons
import PersonIcon from "@mui/icons-material/Person";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import EmailIcon from "@mui/icons-material/Email";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";

export default function Banner() {
  return (
    <div className={style.top_banner_container}>
      <div className={style.box}>
        <div className={style.left_box}>
          <div className={style.login_btn}>
            <Link to="/">
              <span>تسجيل الدخول</span>
              <span>
                <PersonIcon />
              </span>
            </Link>
          </div>
          <div className={style.social_icons}>
            <div>
              <a href="https://www.instagram.com/">
                <InstagramIcon sx={{ fontSize: "18px" }} />
              </a>
            </div>
            <div>
              <a href="https://x.com/">
                <XIcon sx={{ fontSize: "18px" }} />
              </a>
            </div>
            <div>
              <a href="https://www.facebook.com/">
                <FacebookIcon sx={{ fontSize: "18px" }} />
              </a>
            </div>
          </div>
        </div>
        <div className={style.right_box}>
          <div>
            <a href="mailto:smwalinsaf@gmail.com">
              <span className={style.hide} style={{ color: "#fff" }}>
                smwalinsaf@gmail.com
              </span>
              <span>
                <EmailIcon sx={{ fontSize: "18px" }} />
              </span>
            </a>
          </div>
          <div>
            <a href="tel:0506486173">
              <span className={style.hide} style={{ color: "#fff" }}>
                0506486173
              </span>
              <span>
                <PhoneEnabledIcon sx={{ fontSize: "18px" }} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
