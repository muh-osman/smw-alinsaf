// React
import { useEffect } from "react";
// React router
import { Link } from "react-router-dom";
// Sass
import style from "./Services.module.scss";
// Images
import seo from "../../Assets/Images/services/seo.svg";

import servA from "../../Assets/Images/services/servA.svg";
import servB from "../../Assets/Images/services/servB.svg";
import servC from "../../Assets/Images/services/servC.svg";
import servD from "../../Assets/Images/services/servD.svg";
import servE from "../../Assets/Images/services/servE.svg";

import inful from "../../Assets/Images/services/Influ.svg";

import soc from "../../Assets/Images/services/soc.svg";

import mail from "../../Assets/Images/services/mail.svg";

import video from "../../Assets/Images/services/video.mp4";

// Components
import Banner from "../../Components/Banner";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

export default function Services() {
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

      <div className={style.container}>
        <section className={style.C}>
          <h1>خدماتنا القانونية</h1>

          <div className={style.C_box}>
            <div>
              <div>
                <h3>التقاضي وتسوية المنازعات</h3>
              </div>
              <hr />
              <div>
                <img src={servB} alt="marketing" />
              </div>
            </div>

            <div>
              <div>
                <h3>الاستشارات والمساندة القانونية</h3>
              </div>
              <hr />
              <div>
                <img src={servA} alt="marketing" />
              </div>
            </div>

            <div>
              <div>
                <h3>التحكيم</h3>
              </div>
              <hr />
              <div>
                <img src={servC} alt="marketing" />
              </div>
            </div>

            <div>
              <div>
                <h3>الصياغة القانونية والتشريعية</h3>
              </div>
              <hr />
              <div>
                <img src={servD} alt="marketing" />
              </div>
            </div>

            <div>
              <div>
                <h3>المصرفية وأسواق المال</h3>
              </div>
              <hr />
              <div>
                <img src={servE} alt="marketing" />
              </div>
            </div>
          </div>
        </section>

        <section className={style.B}>
          <h1>التقاضي وتسوية النزاعات</h1>

          <div className={style.B_box}>
            <div>
              <h6 dir="rtl">
                من خلال فريق متميز ومتخصص في مجال التقاضي وتسوية المنازعات نقدم
                الخدمات القانونية بكفاءة عالية ومقدرة على التعامل مع المسائل
                القانونية المعقدة وتقديم حلول فعالة تلبي حاجة ومتطلبات كل عميل،
                ويشمل نطاق الخدمات القانونية التي نقدمها في هذا المجال:
              </h6>

              <ul
                dir="rtl"
                style={{
                  paddingRight: "32px",
                  color: "#777",
                  marginTop: "16px",
                }}
              >
                <li>
                  الترافع وتقديم اللوائح والمذكرات أمام جميع المحاكم بمختلف
                  درجاتها.
                </li>
                <li>الخدمات الإنهائية لدى المحاكم المختصة.</li>
                <li>الحراسة القضائية والتصفية القضائية.</li>
                <li>الاعتراضات أمام محاكم الاستئناف والتماس إعادة النظر.</li>
                <li>تنفيذ الأحكام المحلية والأجنبية.</li>
              </ul>
            </div>
            <div>
              <video src={video} controls style={{ width: "100%" }}></video>
            </div>
          </div>
        </section>

        <section className={style.D}>
          <h1>الدراسات والاستشارات</h1>

          <div className={style.D_box}>
            <div>
              <h6 dir="rtl">
                إن ما يقوم عليه واقع علاقاتنا الإنسانية اليومي من تبادل المنافع
                والخدمات وكذلك تقاطع المصالح بين الأفراد والمؤسسات كافة يؤكد
                حتمية تنظيمها وحاجتها إلى من يحكمها ويرتبها، وبالخبرة التي تميزت
                بها كوادرنا والتي سبق وأن ساهمت في الإعداد والصياغة التشريعية
                فإننا نسعد في شركة سمو الإنصاف بتوظيف كافة خبراتنا وإمكاناتنا
                لخدمة المهتمين من خلال:
              </h6>
              <ul
                dir="rtl"
                style={{
                  paddingRight: "32px",
                  color: "#777",
                  marginTop: "16px",
                }}
              >
                <li>
                  إعداد ومراجعة وصياغة كافة العقود والاتفاقيات ومذكرات التفاهم
                  في كافة التخصصات.
                </li>
                <li>
                  إعداد ومراجعة وصياغة اتفاقيات عدم المنافسة واتفاقيات سرية
                  المعلومات.
                </li>
                <li>إعداد وصياغة عقود الاندماج أو الاستحواذ للشركات.</li>
                <li>
                  إعداد وصياغة ومراجعة الأنظمة الأساسية للشركات ولوائح الحوكمة
                  والمراجعة الداخلية.
                </li>
                <li>
                  تقديم المشورة القانونية للمستثمرين الأجانب من حيث الأنظمة
                  المتبعة في المملكة.
                </li>
                <li>
                  تأسيس الشركات الأجنبية أو المختلطة وفروعها، وإصدار التراخيص
                  والسجلات التجارية للمستثمر الأجنبي.
                </li>
              </ul>
            </div>
            <div>
              <img src={seo} alt="seo" />
            </div>
          </div>
        </section>

        <section className={style.B}>
          <h1>الشركات والمؤسسات</h1>

          <div className={style.B_box}>
            <div dir="rtl">
              <h6>
                يرتكز العمل في قطاع الشركات وأسواق المال بالشركة على فهم وتغطية
                احتياجات عملائنا من خلال:
              </h6>
              <ul
                dir="rtl"
                style={{
                  paddingRight: "32px",
                  color: "#777",
                  marginTop: "16px",
                }}
              >
                <li>تأسيس الشركات والمؤسسات وتسجيل العلامات التجارية.</li>
                <li>إدارة الصفقات الخاصة وحوكمة الشركات. والمؤسسات.</li>
                <li>إعداد الدراسات النافية للجهالة.</li>
                <li>تأسيس وحماية حقوق براءات الاختراع.</li>
                <li>إدارة عمليات الدمج والاستحواذ</li>
                <li>تسجيل الوكالات والعلامات والأسماء التجارية.</li>
                <li>
                  أعمال المساندة والتمثيل لرجال الأعمال والمنشآت في عمليات
                  التفاوض وانتهاء بإتمام أعمال الصفقات.
                </li>
                <li>
                  التمثيل القانوني في الجمعيات العمومية العادية والغير العادية
                  وإبداء الرأي القانوني
                </li>
                <li>
                  تقديم الاستشارات القانونية للشركات المساهمة المدرجة بالسوق
                  المالية.
                </li>
              </ul>
            </div>
            <div>
              <img src={inful} alt="seo" />
            </div>
          </div>
        </section>

        <section className={style.E}>
          <h1>الملكية الفكرية</h1>

          <div className={style.E_box}>
            <div dir="rtl">
              <h6>
                يتولى تقديم خدمات الملكية الفكرية في الشركة فريق من المتخصصين
                وذوي الخبرة في هذا المجال من خال سلسلة مترابطة من الخدمات تشمل
                التسجيل والحماية والتسويق والدفاع وانفاذ أي من حقوق الملكية
                الفكرية عبر شبكة من العلاقات التي تجمعنا بعدد من مكاتب المحاماة
                الدولية المتخصصة في أعمال الملكية الفكرية لعدد من العملاء أخذاً
                في الاعتبار الجانب المالي والتجاري، وتشمل خدماتنا:
              </h6>

              <ul
                dir="rtl"
                style={{
                  paddingRight: "32px",
                  color: "#777",
                  marginTop: "16px",
                }}
              >
                <li>حقوق الطبع والنشر.</li>
                <li>التصاميم الهندسية.</li>
                <li>براءات الاختراع.</li>
                <li>التراخيص والتسويق.</li>
                <li>الأسرار التجارية.</li>
                <li>مراجعة وجرد حقوق الملكية الفكرية.</li>
                <li>
                  اسم الدومين ومواقع الشبكة العنكبوتية والأمور المتعلقة بحقوق
                  الملكية الفكرية أونلاين.
                </li>
              </ul>
            </div>
            <div>
              <img src={soc} alt="seo" />
            </div>
          </div>
        </section>

        <section className={style.B}>
          <h1>العقارات والمقاولات</h1>

          <div className={style.B_box}>
            <div dir="rtl">
              <h6>
                لدينا في الشركة خبرة في التعامل مع كافة النزاعات العقارية وسبق
                لنا مباشرة العديد من الدعاوى العقارية والصفقات والسمسرة
                العقارية، ونقدم الخدمات التالية:
              </h6>

              <ul
                dir="rtl"
                style={{
                  paddingRight: "32px",
                  color: "#777",
                  marginTop: "16px",
                }}
              >
                <li>
                  إعداد وصياغة عقود البيع أو الشراء أو التأجير للكيانات
                  العقارية.
                </li>
                <li>
                  تقديم الرأي والنصح في المسائل والإشكاليات العقارية وبما يحفظ
                  حقوق ومصالح العميل.
                </li>
                <li>
                  تمثيل العميل في المنازعات المتعلقة بملكية العقارات أو
                  المساهمات العقارية، أو دعاوي التعويض عن نزع الملكية للمنفعة
                  العامة.
                </li>
              </ul>
            </div>
            <div>
              <img src={mail} alt="seo" />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
