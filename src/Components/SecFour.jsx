import style from "./SecFour.module.scss";
// Images
import imageA from "../Assets/Images/imageA.jpg";
import imageB from "../Assets/Images/imageB.jpg";
import imageC from "../Assets/Images/imageC.jpg";
import imageD from "../Assets/Images/imageD.jpg";
import imageE from "../Assets/Images/imageE.jpg";
import imageF from "../Assets/Images/imageF.jpg";

export default function SecFour() {
  return (
    <div className={style.container}>
      <h1>المماراسات القانونية</h1>

      <div dir="rtl" className={style.box}>
        <div className={style.card}>
          <div>
            <img src={imageA} alt="card" />
          </div>
          <div className={style.text_box}>
            <h3>قانون الأسرة</h3>
            <p>
              خدماتنا تشمل الزواج، الطلاق الحضانة، الميراث، وحل النزاعات الأسرية
            </p>
          </div>
        </div>

        <div className={style.card}>
          <div>
            <img src={imageB} alt="card" />
          </div>
          <div className={style.text_box}>
            <h3>إصابات الحوادث</h3>
            <p>
              نقدم دعما قانونيا متخصصا في مطالبات التعويضات، نزاعات التأمين
              وحماية الحقوق في جميع الأنواع
            </p>
          </div>
        </div>

        <div className={style.card}>
          <div>
            <img src={imageC} alt="card" />
          </div>
          <div className={style.text_box}>
            <h3>حوادث الحريق</h3>
            <p>
              نقدم الدعم القانوني للتعويضات وحل نزاعات التأمين الناتجة عن حوادث
              الحريق.
            </p>
          </div>
        </div>

        <div className={style.card}>
          <div>
            <img src={imageD} alt="card" />
          </div>
          <div className={style.text_box}>
            <h3>الدعاوى المدنية</h3>
            <p>نتولى قضايا التعويضات والنزاعات المدنية بكفاءة واحترافية.</p>
          </div>
        </div>

        <div className={style.card}>
          <div>
            <img src={imageE} alt="card" />
          </div>
          <div className={style.text_box}>
            <h3>التعويضات والنزاعات المدنية</h3>
            <p>
              نوفر الدفاع القانوني المتخصص في قضايا المخدرات مع ضمان حماية
              حقوقك.
            </p>
          </div>
        </div>

        <div className={style.card}>
          <div>
            <img src={imageF} alt="card" />
          </div>
          <div className={style.text_box}>
            <h3>القانون المالي</h3>
            <p>
              نقدم خدمات قانونية متخصصة في النزاعات المالية، العقود، والامتثال
              للأنظمة.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
