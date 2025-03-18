import style from "./SecFour.module.scss";
// Images
import imageA from "../Assets/Images/imageA.png";
import imageB from "../Assets/Images/imageB.jpg";
import imageC from "../Assets/Images/imageC.jpg";
import imageD from "../Assets/Images/imageD.jpg";
import imageE from "../Assets/Images/imageE.jpg";
import imageF from "../Assets/Images/imageF.jpg";
import imageG from "../Assets/Images/imageG.jpg";
import imageH from "../Assets/Images/imageH.jpg";
import imageI from "../Assets/Images/imageI.jpg";

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
            <h3>القانون المالي</h3>
            <p>
              نقدم خدمات قانونية متخصصة في مجال القانون المالي، بما في ذلك
              الاستشارات المتعلقة بالتمويل والاستثمارات والأسواق المالية
            </p>
          </div>
        </div>

        <div className={style.card}>
          <div>
            <img src={imageB} alt="card" />
          </div>
          <div className={style.text_box}>
            <h3>قانون التركات</h3>
            <p>
              نقدم خدمات قانونية متكاملة في مجال قضايا التركات، بما في ذلك إعداد
              الوصايا وتقسيم التركات وإدارة شؤونها
            </p>
          </div>
        </div>

        <div className={style.card}>
          <div>
            <img src={imageC} alt="card" />
          </div>
          <div className={style.text_box}>
            <h3>القانون التجاري</h3>
            <p>
              نقدم خدمات قانونية شاملة في مجال القانون التجاري، بما في ذلك تأسيس
              الشركات والعقود التجارية وحل النزاعات التجارية
            </p>
          </div>
        </div>

        <div className={style.card}>
          <div>
            <img src={imageD} alt="card" />
          </div>
          <div className={style.text_box}>
            <h3>القانون العقاري</h3>
            <p>
              نقدم خدمات قانونية متخصصة في مجال القانون العقاري، بما في ذلك شراء
              وبيع العقارات وإدارة العقارات وتسجيلها
            </p>
          </div>
        </div>

        <div className={style.card}>
          <div>
            <img src={imageE} alt="card" />
          </div>
          <div className={style.text_box}>
            <h3>قانون الشركات</h3>
            <p>
              نقدم خدمات قانونية متكاملة في مجال قانون الشركات، بما في ذلك تأسيس
              الشركات وإعادة هيكلتها واندماجها والاستحواذ عليها
            </p>
          </div>
        </div>

        <div className={style.card}>
          <div>
            <img src={imageF} alt="card" />
          </div>
          <div className={style.text_box}>
            <h3>القانون الجنائي</h3>
            <p>
              نقدم خدمات قانونية متخصصة في مجال القانون الجنائي، بما في ذلك
              الدفاع عن المتهمين في القضايا الجنائية وتقديم الشكاوى الجزائية
            </p>
          </div>
        </div>

        <div className={style.card}>
          <div>
            <img src={imageG} alt="card" />
          </div>
          <div className={style.text_box}>
            <h3>قانون العمل</h3>
            <p>
              نقدم خدمات قانونية متكاملة في مجال قانون العمل، بما في ذلك عقود
              العمل وحقوق العمال وإنهاء الخدمات
            </p>
          </div>
        </div>

        <div className={style.card}>
          <div>
            <img src={imageH} alt="card" />
          </div>
          <div className={style.text_box}>
            <h3>التحكيم</h3>
            <p>
              نقدم خدمات قانونية متخصصة في مجال التحكيم، بما في ذلك تمثيل
              العملاء في إجراءات التحكيم وإعداد اتفاقيات التحكيم
            </p>
          </div>
        </div>

        <div className={style.card}>
          <div>
            <img src={imageI} alt="card" />
          </div>
          <div className={style.text_box}>
            <h3>قانون الصحة</h3>
            <p>
              نقدم خدمات قانونية متخصصة في مجال قانون الصحة، بما في ذلك
              الاستشارات المتعلقة بالتراخيص الصحية والمسؤولية الطبية
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
