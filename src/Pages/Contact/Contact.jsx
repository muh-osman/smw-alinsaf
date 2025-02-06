// Sass
import style from "./Contact.module.scss";
// Image
import thankyou from "../../Assets/Images/thankyou.png";
//
import useWindowDimensions from "../../Utils/useWindowDimensions";
// React
import { useEffect, useState } from "react";
// Components
import Footer from "../../Components/Footer";
import Banner from "../../Components/Banner";
import Navbar from "../../Components/Navbar";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  const { width } = useWindowDimensions();

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbz1DQpJKDJQCzcFCidNIT1G4f7YeXblkhSMFNyud05DdPkb_tX7Tb2JMIMDLCgmeseGEA/exec";

  const form = document.forms["submit-to-google-sheet"];

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
      });
      console.log("Success!", res);
      setSubmitted(true);
    } catch (error) {
      console.error("Error!", error.message);
      setLoading(false);
    }
  }

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
        <div className={style.contact_box}>
          <div className={style.form_box}>
            <h1>تواصل معنا</h1>

            <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
              {/* الاسم */}
              <div className="mb-3">
                <label htmlFor="exampleInputEmail2" className="form-label">
                  الاسم:
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="exampleInputEmail2"
                  aria-describedby="emailHelp"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              {/*  البريد الالكتروني */}
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  البريد الالكتروني:
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* رقم الهاتف */}
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  رقم الهاتف (اختياري):
                </label>
                <input
                  type="number"
                  name="phone"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              {/* الرسالة */}
              <div className="form-group mb-3">
                <label
                  className="form-label"
                  htmlFor="exampleFormControlTextarea1"
                >
                  الرسالة:
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 special"
                disabled={loading}
              >
                {loading ? (
                  <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                ) : (
                  "إرسال"
                )}
              </button>

              <div
                className={style.form_overlay}
                style={submitted ? { height: "100%" } : null}
              >
                <div>
                  <img src={thankyou} alt="thank you" />
                </div>
                <h3>شكرا</h3>
                <h3>تم ارسال طلبك بنجاح</h3>
              </div>
            </form>
          </div>

          <div className={style.map_box}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14500.047443316249!2d46.593795!3d24.692119!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1e6c59360d4d%3A0x721c4aec213641e!2z2KfZhNi12K3Ysdin2KEg2KfZhNmD2KjYsdmJ2Iwg2LnYsdmC2KnYjCDYp9mE2LHZitin2LYg2KfZhNiz2LnZiNiv2YrYqQ!5e0!3m2!1sar!2sus!4v1738877909999!5m2!1sar!2sus"
              width={width > 575 ? width / 2 : 350}
              height={width > 575 ? width / 2.6 : 350}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
