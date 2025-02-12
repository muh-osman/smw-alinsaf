import style from "./Jeddah.module.scss";
import React, { useEffect } from "react";
// Components
import Banner from "../../Components/Banner";
import Navbar from "../../Components/Navbar";

export default function Jeddah() {
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
        {/* Google Calendar Appointment Scheduling begin */}
        <iframe
          src="https://calendar.google.com/calendar/appointments/AcZssZ2pcSO8idqloI7DY5hhI3Mj1idk33K308NLzss=?gv=true"
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
