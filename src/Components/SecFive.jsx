import style from "./SecFive.module.scss";
// Images
import imageA from "../Assets/Images/1.jpg";
import imageB from "../Assets/Images/2.jpg";
import imageC from "../Assets/Images/3.jpg";
import imageD from "../Assets/Images/4.jpg";

export default function SecFive() {
  return (
    <div className={style.container}>
      <h1>فريق يضع خبراته في خدمتكم</h1>
      <p className={style.subTitle}>
        يتكون فريقنا من نخبة من المحامين والمستشارين القانونيين الحاصلين على
        درجات علمية متقدمة وخبرة واسعة في المجال القانوني، ونعمل بشكل تعاوني
        لتوفير أفضل الحلول القانونية لكل قضية
      </p>

      <div dir="rtl" className={style.box}>
        <div className={style.card}>
          <div>
            <img src={imageA} alt="card" />
          </div>
          <div className={style.text_box}>
            <h3>عبدالله بن سعيد السلاطين</h3>
            <p>محامي</p>
          </div>
        </div>

        <div className={style.card}>
          <div>
            <img src={imageB} alt="card" />
          </div>
          <div className={style.text_box}>
            <h3>عبدالله بن علي حكمي</h3>
            <p>محامي</p>
          </div>
        </div>

        <div className={style.card}>
          <div>
            <img src={imageC} alt="card" />
          </div>
          <div className={style.text_box}>
            <h3>ليث بن مقبول الخثعمي</h3>
            <p>محامي</p>
          </div>
        </div>

        <div className={style.card}>
          <div>
            <img src={imageD} alt="card" />
          </div>
          <div className={style.text_box}>
            <h3>نصير بن محمد الهاشمي</h3>
            <p>مستشار شرعي وقانوني</p>
          </div>
        </div>
      </div>
    </div>
  );
}
