import style from "./SecTwo.module.scss";
// MUI Icons
import ApartmentIcon from "@mui/icons-material/Apartment";
import GavelIcon from "@mui/icons-material/Gavel";
import BalanceIcon from "@mui/icons-material/Balance";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

export default function SecTwo() {
  return (
    <div className={style.container}>
      <h1>خدمات قانونية شاملة تناسب كافة احتياجاتك</h1>
      <h4>قمنا بتحديد الاختصاصات المتخصصة لمعرفة كيفية اتخاذ قرارات سليمة</h4>

      <div className={style.cards_box}>
        <div className={style.card}>
          <div>
            <ApartmentIcon />
          </div>
          <h3>خدمات الشركات</h3>
          <p>تأسيس الشركات وإعداد اللوائح الداخلية وحل النزاعات التجارية</p>
        </div>

        <div className={style.card}>
          <div>
            <GavelIcon />
          </div>
          <h3>صياغة العقود</h3>
          <p>صياغة ومراجعة العقود والاتفاقيات لضمان حماية حقوقك</p>
        </div>

        <div className={style.card}>
          <div>
            <BalanceIcon />
          </div>
          <h3>إدارة القضايا</h3>
          <p>
            تمثيل شامل في مختلف القضايا الجنائية, المدنية, التجارية والأحوال
            الشخصية
          </p>
        </div>

        <div className={style.card}>
          <div>
            <WorkspacePremiumIcon />
          </div>
          <h3>الاستشارات القانونية</h3>
          <p>
            نقدم استشارات قانونية متخصصة للأفراد والشركات لمساعدتهم على اتخاذ
            القرار
          </p>
        </div>
      </div>
    </div>
  );
}
