import style from "./Riyadh.module.scss";
import React, { useEffect } from "react";
// Components
import Banner from "../../Components/Banner";
import Navbar from "../../Components/Navbar";

export default function Riyadh() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  // useEffect(() => {
  //   // Create and append the link tag for the stylesheet
  //   const link = document.createElement("link");
  //   link.href =
  //     "https://calendar.google.com/calendar/scheduling-button-script.css";
  //   link.rel = "stylesheet";
  //   document.head.appendChild(link);

  //   // Create and append the script tag for the scheduling button script
  //   const script = document.createElement("script");
  //   script.src =
  //     "https://calendar.google.com/calendar/scheduling-button-script.js";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   // Create and append the inline script to load the scheduling button
  //   const inlineScript = document.createElement("script");
  //   inlineScript.innerHTML = `
  //     (function () {
  //       var target = document.currentScript;
  //       window.addEventListener("load", function () {
  //         calendar.schedulingButton.load({
  //           url: "https://calendar.google.com/calendar/appointments/AcZssZ2YhW9apI0xzGojItXaY5O6BacmKePWdOc2nVI=?gv=true",
  //           color: "#039BE5",
  //           label: "حجز موعد",
  //           target,
  //         });
  //       });
  //     })();
  //   `;
  //   document.body.appendChild(inlineScript);
  //   // Cleanup function to remove the script and link when the component unmounts
  //   return () => {
  //     document.head.removeChild(link);
  //     document.body.removeChild(script);
  //     document.body.removeChild(inlineScript);
  //   };
  // }, []);

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
        {/* Google Calendar Appointment Scheduling begin */}
        <iframe
          src="https://calendar.google.com/calendar/appointments/AcZssZ2YhW9apI0xzGojItXaY5O6BacmKePWdOc2nVI=?gv=true"
          style={{ border: 0 }}
          width="100%"
          frameBorder={0}
          className={style.zxc}
        />
        {/* end Google Calendar Appointment Scheduling */}
      </div>
    </>
  );
}
