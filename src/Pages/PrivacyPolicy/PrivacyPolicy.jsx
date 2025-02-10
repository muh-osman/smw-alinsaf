import style from "./PrivacyPolicy.module.scss";
import { Link } from "react-router-dom";
// React
import { useEffect } from "react";
// Components
import Footer from "../../Components/Footer";
import Banner from "../../Components/Banner";
import Navbar from "../../Components/Navbar";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  return (
    <>
      {/* Start Hero */}
      <div className={style.hero_container}>
        <Banner />

        <div className={style.nav_container}>
          <Navbar />
        </div>
      </div>
      {/* End Hero */}

      <div dir="rtl" className={style.container}>
        <div className={style.long_text}>
          <div className={style.hero_text_box} dir="ltr">
            <h1 style={{ marginTop: "32px" }}>سياسة الخصوصية</h1>
          </div>

          <p>
            في شركة سمو الإنصاف للمحاماة والاستشارات القانونية. نحرص على حماية
            خصوصيتكم وضمان أمان بياناتكم الشخصية. تشرح هذه السياسة كيفية جمعنا
            لبياناتكم الشخصية واستخدامها وحمايتها.
          </p>
        </div>
      </div>

      <div dir="rtl" className={style.our_message_container}>
        <div className={style.long_text}>
          <div className={style.hero_text_box} dir="ltr">
            <h1 dir="rtl">البيانات التي نجمعها</h1>
            <p dir="rtl">قد نجمع الأنواع التالية من البيانات الشخصية:</p>
          </div>

          <div>
            <ul>
              <li>
                <span>البيانات الأساسية:</span> مثل الاسم الكامل، عنوان البريد
                الإلكتروني، رقم الهاتف، والعنوان.
              </li>
              <li>
                <span>البيانات القانونية:</span> المعلومات المتعلقة بالقضايا أو
                الاستشارات القانونية التي تقدمونها لنا.
              </li>
              <li>
                <span>البيانات التقنية:</span> مثل عنوان IP، نوع المتصفح، ونظام
                التشغيل عند زيارة موقعنا الإلكتروني.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div dir="rtl" className={style.our_message_container}>
        <div className={style.long_text}>
          <div className={style.hero_text_box} dir="ltr">
            <h1 dir="rtl">كيف نستخدم بياناتكم</h1>
            <p dir="rtl">نستخدم البيانات التي نجمعها للأغراض التالية:</p>
          </div>

          <div>
            <ul>
              <li>تقديم الاستشارات القانونية والخدمات المطلوبة.</li>
              <li>التواصل معكم بشأن القضايا أو الاستفسارات.</li>
              <li>تحسين خدماتنا وتجربة المستخدم على موقعنا الإلكتروني.</li>
              <li>الالتزام بالمتطلبات القانونية والتنظيمية.</li>
            </ul>
          </div>
        </div>
      </div>

      <div dir="rtl" className={style.our_message_container}>
        <div className={style.long_text}>
          <div className={style.hero_text_box} dir="ltr">
            <h1 dir="rtl">حماية البيانات</h1>
            <p dir="rtl">نلتزم بحماية بياناتكم الشخصية من خلال:</p>
          </div>

          <div>
            <ul>
              <li>
                استخدام تقنيات تشفير متقدمة لحماية البيانات أثناء النقل
                والتخزين.
              </li>
              <li>
                تقييد الوصول إلى البيانات الشخصية للموظفين المصرح لهم فقط.
              </li>
              <li>
                تطبيق إجراءات أمنية صارمة لمنع الوصول غير المصرح به أو تسريب
                البيانات.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div dir="rtl" className={style.our_message_container}>
        <div className={style.long_text}>
          <div className={style.hero_text_box} dir="ltr">
            <h1 dir="rtl">مشاركة البيانات</h1>
            <p dir="rtl">
              لا نبيع أو نؤجر أو نشارك بياناتكم الشخصية مع أطراف ثالثة إلا في
              الحالات التالية:
            </p>
          </div>

          <div>
            <ul>
              <li>عند الحصول على موافقتكم الصريحة.</li>
              <li>عند الالتزام بطلب قانوني أو حكومي.</li>
              <li>
                عند التعاون مع شركاء موثوقين لتقديم الخدمات المطلوبة (مع ضمان
                التزامهم بمعايير الخصوصية).
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div dir="rtl" className={style.our_message_container}>
        <div className={style.long_text}>
          <div className={style.hero_text_box} dir="ltr">
            <h1 dir="rtl">حقوقكم</h1>
            <p dir="rtl">لديكم الحق في:</p>
          </div>

          <div>
            <ul>
              <li>الوصول إلى بياناتكم الشخصية التي نحتفظ بها.</li>
              <li>طلب تصحيح أو تحديث بياناتكم.</li>
              <li>
                طلب حذف بياناتكم الشخصية، مع مراعاة الالتزامات القانونية التي قد
                تمنعنا من حذفها فورًا.
              </li>
              <li>الاعتراض على استخدام بياناتكم لأغراض معينة.</li>
            </ul>
          </div>
        </div>
      </div>

      <div dir="rtl" className={style.our_message_container}>
        <div className={style.long_text}>
          <div className={style.hero_text_box} dir="ltr">
            <h1 dir="rtl" style={{ marginBottom: "8px" }}>
              التغييرات على سياسة الخصوصية
            </h1>
            <p dir="rtl">
              قد نقوم بتحديث هذه السياسة من وقت لآخر. وسنقوم بإعلامكم بأي
              تغييرات جوهرية عبر موقعنا الإلكتروني أو عبر البريد الإلكتروني.
            </p>
          </div>
        </div>
      </div>

      <div dir="rtl" className={style.our_message_container}>
        <div className={style.long_text}>
          <div className={style.hero_text_box} dir="ltr">
            <h1 dir="rtl" style={{ marginBottom: "8px" }}>
              اتصل بنا
            </h1>
            <p dir="rtl">
              إذا كانت لديكم أي أسئلة أو استفسارات حول سياسة الخصوصية، يرجى
              الاتصال بنا من خلال <Link to="/contact">صفحة الاتصال</Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
