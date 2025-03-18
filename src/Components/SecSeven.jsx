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
          <a href="https://smwalinsaf.com/blog/?p=1310">
            <div>
              <img src={imageA} alt="card" />
            </div>
            <div className={style.text_box}>
              <h3>25 فبراير 2025</h3>
              <p>
                نصائح قانونية في المسائل المالية | شركة سمو الإنصاف للمحاماة
                والاستشارات القانونية
              </p>
            </div>
          </a>
        </div>

        <div className={style.card}>
          <a href="https://smwalinsaf.com/blog/?p=1314">
            <div>
              <img src={imageB} alt="card" />
            </div>
            <div className={style.text_box}>
              <h3>25 فبراير 2025</h3>
              <p>
                نصائح قانونية حول التركات | شركة سمو الإنصاف للمحاماة
                والاستشارات القانونية
              </p>
            </div>
          </a>
        </div>

        <div className={style.card}>
          <a href="https://smwalinsaf.com/blog/?p=1316">
            <div>
              <img src={imageC} alt="card" />
            </div>
            <div className={style.text_box}>
              <h3>25 فبراير 2025</h3>
              <p>
                نصائح قانونية في القضايا التجارية | شركة سمو الإنصاف للمحاماة
                والاستشارات القانونية
              </p>
            </div>
          </a>
        </div>

        <div className={style.card}>
          <a href="https://smwalinsaf.com/blog/?p=1318">
            <div>
              <img src={imageD} alt="card" />
            </div>
            <div className={style.text_box}>
              <h3>25 فبراير 2025</h3>
              <p>
                نصائح قانونية في القضايا العقارية | شركة سمو الإنصاف للمحاماة
                والاستشارات القانونية
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
