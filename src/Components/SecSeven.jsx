import style from "./SecSeven.module.scss";
// Images
import imageA from "../Assets/Images/postA.jpg";
import imageB from "../Assets/Images/postB.jpg";
import imageC from "../Assets/Images/postC.jpg";
import imageD from "../Assets/Images/postD.jpg";
import { Link } from "react-router-dom";

export default function SecSeven() {
  return (
    <div className={style.container}>
      <h1>أحدث المقالات</h1>

      <div dir="rtl" className={style.box}>
        <div className={style.card}>
          <a href="https://jannah.tielabs.com/rtl/">
            <div>
              <img src={imageA} alt="card" />
            </div>
            <div className={style.text_box}>
              <h3>12 مايو 2025</h3>
              <p>
                نقدم خدمات قانونية متخصصة في النزاعات المالية العقود، والامتثال
                للأنظمة
              </p>
            </div>
          </a>
        </div>

        <div className={style.card}>
          <a href="https://jannah.tielabs.com/rtl/">
            <div>
              <img src={imageB} alt="card" />
            </div>
            <div className={style.text_box}>
              <h3>12 مايو 2025</h3>
              <p>
                نقدم خدمات قانونية متخصصة في النزاعات المالية العقود، والامتثال
                للأنظمة
              </p>
            </div>
          </a>
        </div>

        <div className={style.card}>
          <a href="https://jannah.tielabs.com/rtl/">
            <div>
              <img src={imageC} alt="card" />
            </div>
            <div className={style.text_box}>
              <h3>12 مايو 2025</h3>
              <p>
                نقدم خدمات قانونية متخصصة في النزاعات المالية العقود، والامتثال
                للأنظمة
              </p>
            </div>
          </a>
        </div>

        <div className={style.card}>
          <a href="https://jannah.tielabs.com/rtl/">
            <div>
              <img src={imageD} alt="card" />
            </div>
            <div className={style.text_box}>
              <h3>12 مايو 2025</h3>
              <p>
                نقدم خدمات قانونية متخصصة في النزاعات المالية العقود، والامتثال
                للأنظمة
              </p>
            </div>
          </a>
        </div>

      </div>
    </div>
  );
}
