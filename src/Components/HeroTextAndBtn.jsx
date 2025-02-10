import style from "./HeroTextAndBtn.module.scss";
import { Link } from "react-router-dom";

export default function HeroTextAndBtn() {
  return (
    <div className={style.container}>
      <div>
        <h1>شريكك القانوني الموثوق</h1>
        <h5>نحقق العدالة بالخبرة ونحقق الإنصاف بالجدارة</h5>
      </div>
      <div className={style.btn_container}>
        <Link to="/contact">اتصل بنا</Link>
        <Link to="/book">احجز الآن</Link>
      </div>
    </div>
  );
}
