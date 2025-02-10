import style from "./Book.module.scss";
// React
import { useEffect } from "react";
// Components
import Footer from "../../Components/Footer";
import Banner from "../../Components/Banner";
import Navbar from "../../Components/Navbar";

export default function Book() {
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
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0cTZCghiQF9CDohUPppYaJD1uu7u6vtiGjAlYNhx8XzOJDc7QUP0TSQIHaPE1roI9ILnqnVrQ6?gv=true"
          style={{ border: 0 }}
          width="100%"
          frameBorder={0}
          className={style.zxc}
        />
        {/* end Google Calendar Appointment Scheduling */}
      </div>

      <Footer />
    </>
  );
}
