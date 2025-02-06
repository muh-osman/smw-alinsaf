import style from "./SecSix.module.scss";
// React Bootstrp Carousel
import Carousel from "react-bootstrap/Carousel";
// Images
import logoA from "../Assets/Images/logoA.webp";
import logoB from "../Assets/Images/logoB.webp";
import logoC from "../Assets/Images/logoC.webp";
import logoD from "../Assets/Images/logoD.webp";
import logoE from "../Assets/Images/logoE.webp";
import logoF from "../Assets/Images/logoF.webp";
import logoG from "../Assets/Images/logoG.webp";
import logoH from "../Assets/Images/logoH.webp";

export default function SecSix() {
  return (
    <>
      <div className={style.container}>
        <h1>شهادتنا</h1>

        <Carousel
          className={style.carousel}
          data-bs-theme="dark"
          indicators={false}
        >
          <Carousel.Item className={style.carousel_box}>
            <h3>
              شركة سمو الإنصاف حاصلة على شهادة لاسم الشهادة من شركة " التيم
              الشركة المانحة. هذا الاعتماد يعكس التزامنا بأعلى معايير الجودة
              والاحترافية في تقديم الخدمات القانونية
            </h3>
            <p>المدير التنفيذي</p>
          </Carousel.Item>

          <Carousel.Item className={style.carousel_box}>
            <h3>
              شركة سمو الإنصاف حاصلة على شهادة لاسم الشهادة من شركة " التيم
              الشركة المانحة. هذا الاعتماد يعكس التزامنا بأعلى معايير الجودة
              والاحترافية في تقديم الخدمات القانونية
            </h3>
            <p>المدير التنفيذي</p>
          </Carousel.Item>

          <Carousel.Item className={style.carousel_box}>
            <h3>
              شركة سمو الإنصاف حاصلة على شهادة لاسم الشهادة من شركة " التيم
              الشركة المانحة. هذا الاعتماد يعكس التزامنا بأعلى معايير الجودة
              والاحترافية في تقديم الخدمات القانونية
            </h3>
            <p>المدير التنفيذي</p>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className={style.logos_container}>
        <div className={style.logo_card}>
          <img src={logoA} alt="logo" />
        </div>

        <div className={style.logo_card}>
          <img src={logoB} alt="logo" />
        </div>

        <div className={style.logo_card}>
          <img src={logoC} alt="logo" />
        </div>

        <div className={style.logo_card}>
          <img src={logoD} alt="logo" />
        </div>
      </div>

      <div className={style.logos_container}>
        <div className={style.logo_card}>
          <img src={logoE} alt="logo" />
        </div>

        <div className={style.logo_card}>
          <img src={logoF} alt="logo" />
        </div>

        <div className={style.logo_card}>
          <img src={logoG} alt="logo" />
        </div>

        <div className={style.logo_card}>
          <img src={logoH} alt="logo" />
        </div>
      </div>
    </>
  );
}
