import { Link } from "react-router-dom";
import style from "./HeroTextAndBtn.module.scss";

export default function HeroTextAndBtn() {
  return (
    <div className={style.container}>
      <div>
        <h1>شريكك القانوني الموثوق</h1>
        <h5>نحقق العدالة بالخبرة ونحقق الإنصاف بالجدارة</h5>
      </div>
      <div className={style.btn_container}>
        <Link to="/">احجز الان</Link>
        <Link to="/">الميز عنا</Link>
      </div>
    </div>
  );
}
