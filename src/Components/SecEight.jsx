import style from "./SecEight.module.scss";
import { Link } from "react-router-dom";

export default function SecEight() {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div>
          <Link to="contact">اتصل بنا</Link>
        </div>
        <div className={style.text_box} dir="rtl">
          <h1>لا تتردد في الاتصال بنا في أي وقت</h1>
          <p>نحن هنا دائما لدعمك</p>
        </div>
      </div>
    </div>
  );
}
