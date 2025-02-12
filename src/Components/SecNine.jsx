import style from "./SecNine.module.scss";
import { useEffect, useRef, useState } from "react";
// Mui
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  marginBottom: "8px",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgb(235 235 235)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
    color: "#b99b5f",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  // borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function SecNine() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // Scroll to faq section
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      const section = document.getElementById(
        window.location.hash.substring(1)
      );
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div id="faq" dir="rtl" className={style.container}>
      {/* Start accordion*/}
      <div className={style.accordion}>
        <h1>أسئلة عامة</h1>
        <div>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography sx={{ fontSize: "18px" }}>
                &nbsp;ما هي الخدمات القانونية التي تقدمها شركة سمو الإنصاف؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color={"#8b8795"}>
                نقدم مجموعة واسعة من الخدمات القانونية في مختلف المجالات، بما في
                ذلك القانون المالي، وقانون التركات، والقانون التجاري، والقانون
                العقاري، وقانون الشركات، والقانون الجنائي، والقانون الإداري،
                وقانون العمل، وقانون التنفيذ، والتحكيم، وقانون الصحة.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography sx={{ fontSize: "18px" }}>
                &nbsp;ما هي الخبرات التي يتمتع بها فريق العمل في شركة سمو
                الإنصاف؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color={"#8b8795"}>
                يضم فريق العمل في شركة سمو الإنصاف محامين ومستشارين قانونيين
                مؤهلين وذوي خبرة واسعة في مختلف فروع القانون. يتمتع فريقنا
                بمعرفة عميقة بالقوانين واللوائح، وقادر على تقديم حلول قانونية
                مبتكرة وفعالة لعملائنا.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography sx={{ fontSize: "18px" }}>
                &nbsp;كيف يمكنني التواصل مع شركة سمو الإنصاف؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color={"#8b8795"}>
                يمكنك التواصل معنا عبر الهاتف أو البريد الإلكتروني أو زيارة
                مكتبنا. يمكنك العثور على معلومات الاتصال الخاصة بنا على صفحة
                "اتصل بنا" في موقعنا الإلكتروني.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <h3 className={style.sub_title}>أسئلة حول الخدمات</h3>

          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <Typography sx={{ fontSize: "18px" }}>
                &nbsp;ما هي إجراءات توكيل محامٍ في شركة سمو الإنصاف؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color={"#8b8795"}>
                يمكنك التواصل معنا لتحديد موعد استشارة لمناقشة قضيتك. سنقوم
                بتوضيح الإجراءات اللازمة لتوكيل محامٍ لدينا وتقديم كافة
                المعلومات المتعلقة بالرسوم والتكاليف.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              aria-controls="panel5d-content"
              id="panel5d-header"
            >
              <Typography sx={{ fontSize: "18px" }}>
                &nbsp;هل تقدمون خدمات الاستشارات القانونية؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color={"#8b8795"}>
                نعم، نقدم خدمات الاستشارات القانونية في مختلف المجالات. يمكنك
                حجز موعد للاستشارة مع أحد محامينا لمناقشة قضيتك والحصول على
                المشورة القانونية اللازمة.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              aria-controls="panel6d-content"
              id="panel6d-header"
            >
              <Typography sx={{ fontSize: "18px" }}>
                &nbsp;ما هي المدة التي تستغرقها القضية؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color={"#8b8795"}>
                تختلف المدة التي تستغرقها القضية حسب طبيعتها وتعقيدها. سنقوم
                بتقديم تقدير للوقت المتوقع لإنهاء القضية خلال الاستشارة الأولية.
                أسئلة حول التكاليف
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
          >
            <AccordionSummary
              aria-controls="panel7d-content"
              id="panel7d-header"
            >
              <Typography sx={{ fontSize: "18px" }}>
                &nbsp;ما هي تكلفة خدمات المحاماة في شركة سمو الإنصاف؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color={"#8b8795"}>
                تختلف تكلفة خدمات المحاماة حسب طبيعة القضية والخدمات المطلوبة.
                سنقوم بتقديم تقدير مفصل للتكاليف خلال الاستشارة الأولية.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
          >
            <AccordionSummary
              aria-controls="panel8d-content"
              id="panel8d-header"
            >
              <Typography sx={{ fontSize: "18px" }}>
                &nbsp;هل تقدمون خيارات دفع مرنة؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color={"#8b8795"}>
                نعم، نقدم خيارات دفع مرنة لتناسب احتياجات عملائنا. يمكنك مناقشة
                خيارات الدفع المتاحة مع محامينا خلال الاستشارة الأولية.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <h3 className={style.sub_title}>أسئلة حول الخبرة والتخصص</h3>

          <Accordion
            expanded={expanded === "panel11"}
            onChange={handleChange("panel11")}
          >
            <AccordionSummary
              aria-controls="panel11d-content"
              id="panel11d-header"
            >
              <Typography sx={{ fontSize: "18px" }}>
                &nbsp;ما الذي يميز شركة سمو الإنصاف عن غيرها من شركات المحاماة؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color={"#8b8795"}>
                تتميز شركة سمو الإنصاف بفريق عمل متكامل من المحامين والمستشارين
                القانونيين ذوي الخبرة والتخصص في مختلف فروع القانون. كما نعتمد
                على أحدث التقنيات والأساليب لتقديم خدمات قانونية مبتكرة وفعالة.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel12"}
            onChange={handleChange("panel12")}
          >
            <AccordionSummary
              aria-controls="panel12d-content"
              id="panel12d-header"
            >
              <Typography sx={{ fontSize: "18px" }}>
                &nbsp;هل لديكم خبرة في التعامل مع قضايا مماثلة لقضيتي؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color={"#8b8795"}>
                نعم، يتمتع فريقنا بخبرة واسعة في التعامل مع مختلف أنواع القضايا،
                بما في ذلك القضايا المشابهة لقضيتك. يمكنك التواصل معنا لمناقشة
                قضيتك وسنقوم بتقديم تقييم مفصل لخبرتنا في هذا المجال.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel13"}
            onChange={handleChange("panel13")}
          >
            <AccordionSummary
              aria-controls="panel13d-content"
              id="panel13d-header"
            >
              <Typography sx={{ fontSize: "18px" }}>
                &nbsp;هل تقدمون خدمات قانونية للأفراد والشركات على حد سواء؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color={"#8b8795"}>
                نعم، نقدم خدمات قانونية متكاملة لكل من الأفراد والشركات على حد
                سواء. لدينا فريق متخصص في التعامل مع قضايا الأفراد وآخر متخصص في
                قضايا الشركات.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <h3 className={style.sub_title}>أسئلة حول عملية العمل</h3>

          <Accordion
            expanded={expanded === "panel14"}
            onChange={handleChange("panel14")}
          >
            <AccordionSummary
              aria-controls="panel14d-content"
              id="panel14d-header"
            >
              <Typography sx={{ fontSize: "18px" }}>
                &nbsp;كيف تتم عملية التعامل مع القضية في شركة سمو الإنصاف؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color={"#8b8795"}>
                تبدأ عملية التعامل مع القضية بتحديد موعد استشارة لمناقشة قضيتك
                وتحديد الخدمات المطلوبة. بعد ذلك، نقوم بتشكيل فريق عمل متخصص
                للتعامل مع قضيتك ومتابعة جميع الإجراءات القانونية اللازمة.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel15"}
            onChange={handleChange("panel15")}
          >
            <AccordionSummary
              aria-controls="panel15d-content"
              id="panel15d-header"
            >
              <Typography sx={{ fontSize: "18px" }}>
                &nbsp;هل يمكنني متابعة سير القضية؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color={"#8b8795"}>
                نعم، يمكنك متابعة سير القضية من خلال التواصل مع المحامي المسؤول
                عن قضيتك. كما يمكنك الاطلاع على المستجدات من خلال نظامنا
                الإلكتروني الخاص بالعملاء.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel16"}
            onChange={handleChange("panel16")}
          >
            <AccordionSummary
              aria-controls="panel16d-content"
              id="panel16d-header"
            >
              <Typography sx={{ fontSize: "18px" }}>
                &nbsp;ما هي المدة المتوقعة لإنهاء القضية؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color={"#8b8795"}>
                تختلف المدة المتوقعة لإنهاء القضية حسب طبيعتها وتعقيدها. سنقوم
                بتقديم تقدير للوقت المتوقع خلال الاستشارة الأولية.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <h3 className={style.sub_title}>أسئلة حول التواصل والدعم</h3>

          <Accordion
            expanded={expanded === "panel17"}
            onChange={handleChange("panel17")}
          >
            <AccordionSummary
              aria-controls="panel17d-content"
              id="panel17d-header"
            >
              <Typography sx={{ fontSize: "18px" }}>
                &nbsp;كيف يمكنني التواصل مع المحامي المسؤول عن قضيتي؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color={"#8b8795"}>
                يمكنك التواصل مع المحامي المسؤول عن قضيتك عبر الهاتف أو البريد
                الإلكتروني في أي وقت. كما يمكنك تحديد موعد لمقابلة شخصية لمناقشة
                أي مستجدات.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel18"}
            onChange={handleChange("panel18")}
          >
            <AccordionSummary
              aria-controls="panel18d-content"
              id="panel18d-header"
            >
              <Typography sx={{ fontSize: "18px" }}>
                &nbsp;هل تقدمون دعمًا للعملاء خارج ساعات العمل الرسمية؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color={"#8b8795"}>
                نعم، نقدم دعمًا طارئًا للعملاء في الحالات الضرورية خارج ساعات
                العمل الرسمية. يمكنك التواصل معنا عبر رقم الطوارئ الخاص بنا.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <h3 className={style.sub_title}>أسئلة أخرى</h3>

          <Accordion
            expanded={expanded === "panel9"}
            onChange={handleChange("panel9")}
          >
            <AccordionSummary
              aria-controls="panel9d-content"
              id="panel9d-header"
            >
              <Typography sx={{ fontSize: "18px" }}>
                &nbsp;ما هي سياسة الخصوصية الخاصة بكم؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color={"#8b8795"}>
                نحن نلتزم بحماية خصوصية عملائنا. جميع المعلومات التي تقدمها لنا
                ستكون سرية ولن يتم مشاركتها مع أي طرف آخر دون موافقتك.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel10"}
            onChange={handleChange("panel10")}
          >
            <AccordionSummary
              aria-controls="panel10d-content"
              id="panel10d-header"
            >
              <Typography sx={{ fontSize: "18px" }}>
                &nbsp;كيف يمكنني تقديم ملاحظات أو شكاوى؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color={"#8b8795"}>
                نحن نرحب بملاحظاتك وشكاواك. يمكنك التواصل معنا عبر الهاتف أو
                البريد الإلكتروني لتقديم ملاحظاتك أو شكواك.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      {/* End accordion*/}
    </div>
  );
}
