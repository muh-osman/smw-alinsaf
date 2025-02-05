import style from "./SecThree.module.scss";
// Images
import person from "../Assets/Images/person.jpg";

export default function SecThree() {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div dir="rtl" className={style.text_box}>
          <h1>قيادة ملهمة توجه نحو العدالة</h1>
          <h4>الاستاذ/ اسم المديرا</h4>
          <p>
            مؤسس ومدير شركة سمو الإنصاف للمحاماة والاستشارات القانونية، يتمتع
            بخبرة تزيد عن عدد السنوات عاما في مجال المحاماة والقانون، حيث نجح في
            تقديم حلول قانونية مبتكرة للعديد من القضايا المعقدة على المستوى
            المحلي والدولي
          </p>
          <p>
            حاصل على درجة اسم الدرجة العلمية في التخصص الدراسة من الاسم الجامعة.
          </p>
          <p>
            يتميز برؤية إستراتيجية تهدف إلى تقديم خدمات قانونية تتسم بالنزاهة
            والكفاءة للتحقيق رضا العملاء. تحت قيادته أصبحت شركة سمو الإنصاف رمزا
            للثقة والاحترافية في المجال القانوني
          </p>
          <p style={{ color: "#616161" }}>
            الرئيس التنفيذي ومؤسس شركة سمو الانصاف
          </p>
        </div>

        <div className={style.img_box}>
          <img src={person} alt="person" />
        </div>
      </div>
    </div>
  );
}
