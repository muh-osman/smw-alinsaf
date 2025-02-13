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
            <h3 dir="rtl">
              اتقدم بجزيل الشكر لسمو الإنصاف للمحاماة والاستشارات القانونية
              أشكر. المحامي أ/ ناصر الكريعاني و الاخت نورة القويز على طيب
              التعامل ووضوح بالاستشارات ودقه بالعمل وحسن ولباقة التعامل
            </h3>
            <p>Deema Saad</p>
          </Carousel.Item>

          <Carousel.Item className={style.carousel_box}>
            <h3 dir="rtl">
              المكان الصحيح لكل صاحب قضية اشكرهم على تفانيهم بالعمل . تعاملت مع
              المحامي استاذ ناصر القحطاني واشكره على رقي تعامله واسلوبه وجهني
              للصواب وتابع معاي والحمدلله كسبنا القضية وذلك بالطبع يعكس اخلاصه
              بالعمل واعطاء جميع موكليه حقهم.
            </h3>
            <p>Mareyah Al Musawi</p>
          </Carousel.Item>

          <Carousel.Item className={style.carousel_box}>
            <h3>
              اتقدم بجزيل الشكر لكل فريق عمل مكتب سمو الإنصاف للمحاماة
              والاستشارات القانونية وعلى راسهم المحامية نورة القويز على سرعة
              الاستجابة وتقديم الخدمة المطلوبة بكل احترافية واتقان وانصح
              بالتعامل معهم لما يلمسة العميل من شفافية ووضوح بالاستشارات الله
              يوفقكم
            </h3>
            <p>Sultan Almutawa</p>
          </Carousel.Item>

          <Carousel.Item className={style.carousel_box}>
            <h3>
              تواصلت معاهم للتوكيل في قضية عندي ووجهوني باستشارة واضحة جداً
              وردوا بسرعة وعطوني فكرة واضحة عن الإجراءات وكل شي سواء عن طريقهم
              أو عن طريق المحكمة، وكانوا واضحين بالتفاصيل والأسعار .. ماقصروا
              للامانه
            </h3>
            <p>مريم</p>
          </Carousel.Item>

          <Carousel.Item className={style.carousel_box}>
            <h3 dir="rtl">
              الله يبيض وجه الاستاذ ناصر ماقصر كسبت اصعب قضيه بفضل الله ثم
              فضله.. الله يوفقه❤️❤️
            </h3>
            <p>Hessa Alshammari</p>
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
