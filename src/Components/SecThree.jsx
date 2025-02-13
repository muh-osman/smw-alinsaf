import style from "./SecThree.module.scss";
// Images
import person from "../Assets/Images/person.jpg";

export default function SecThree() {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div dir="rtl" className={style.text_box}>
          <h1>المحامي ناصر القحطاني</h1>
          {/* <h4>الاستاذ/ اسم المديرا</h4> */}
          <p>
            المحامي ناصر القحطاني هو مؤسس ورئيس تنفيذي لشركة سمو الإنصاف
            للمحاماة والاستشارات القانونية.
          </p>
          <p>
            يتميز المحامي ناصر القحطاني برؤية استراتيجية تهدف إلى تقديم خدمات
            قانونية تتسم بالنزاهة والكفاءة لتحقيق رضا العملاء.
          </p>
          <p>
            يتمتع بخبرة واسعة تمتد لأكثر من 7 سنوات في مجال المحاماة والقانون،
            وقد نجح في تقديم حلول قانونية مبتكرة للعديد من القضايا المعقدة على
            المستويين المحلي والدولي.
          </p>
          <p style={{ color: "#616161" }}>
            الرئيس التنفيذي ومؤسس شركة سمو الانصاف للمحاماة والاستشارات
            القانونية
          </p>
        </div>

        <div className={style.img_box}>
          <img src={person} alt="person" />
        </div>
      </div>
    </div>
  );
}
