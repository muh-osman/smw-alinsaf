import style from "./Footer.module.scss";
import { Link } from "react-router-dom";
//
import logo from "../Assets/Images/logo.png";

export default function Footer() {
  return (
    <footer dir="rtl" className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-6 col-md-12 col-12">
            <div className="footer-logo-img">
              <img src={logo} alt="logo" />
            </div>

            <p className="footer-intro">
              الصحراء الكبرى، 12583، عرقة، الرياض 12583، السعودية
              <br />
              🕗 من السبت إلى الخميس من الساعة 08:00 صباحا - وحتى الساعة 8:00
              مساء
            </p>

            <div className="socials">
              <a href="https://www.instagram.com/" aria-label="instagram">
                <svg
                  aria-hidden="true"
                  className="e-font-icon-svg e-fab-instagram"
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
              <a href="https://x.com/" aria-label="x">
                <svg
                  aria-hidden="true"
                  className="e-font-icon-svg e-fab-x-twitter"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>
              </a>
              <a href="https://www.facebook.com/" aria-label="snapchat">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="col-xl-9 col-lg-6 col-md-12 col-12">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-6">
                <div className="help-list">
                  <h4>فروعنا</h4>
                  <ul>
                    <li>
                      <a href="https://maps.app.goo.gl/Bp41TXcygjcr3fpg8">
                        الرياض{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-box-arrow-up-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                          />
                          <path
                            fillRule="evenodd"
                            d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                          />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a href="https://maps.app.goo.gl/CRBrNCUtovBte4cZ7">
                        جدة{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-box-arrow-up-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                          />
                          <path
                            fillRule="evenodd"
                            d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 col-6">
                <div className="help-list">
                  <h4>خدماتنا</h4>
                  <ul>
                    <li>
                      <Link to="services">الاستشارات القانونية</Link>
                    </li>

                    <li>
                      <Link to="services">إدارة القضايا</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 col-6">
                <div className="help-list">
                  <h4>روابط مهمة</h4>
                  <ul>
                    <li>
                      <Link to="/privacy-policy">سياسة الخصوصية</Link>
                    </li>

                    <li>
                      <a href="https://smwalinsaf.com/blog/">المدونة</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 col-6 contact-us">
                <div className="footer-contact">
                  <h4>تواصل معنا</h4>
                  <ul>
                    <li className="footer-contact-li">
                      <span className="me-0">فرع الرياض</span>
                      <p>
                        <a dir="ltr" href="tel:0509997635">
                          0509997635
                        </a>
                        {/* <a dir="ltr" href="tel:0112105999">
                          0112105999
                        </a> */}
                      </p>
                    </li>

                    <li className="footer-contact-li">
                      <span className="me-0">فرع جدة</span>
                      <p>
                        <a dir="ltr" href="tel:0506486173">
                          0506486173
                        </a>
                        {/* <a dir="ltr" href="tel:0126677776">
                          0126677776
                        </a> */}
                      </p>
                    </li>

                    {/* <li className="footer-contact-li">
                      <span className="me-0">رقم موحد</span>
                      <p>
                        <a dir="ltr" href="tel:920015336">
                          920015336
                        </a>
                      </p>
                    </li> */}

                    <li className="footer-contact-li">
                      <span className="me-0">بريد الكتروني</span>
                      <p>
                        <a dir="rtl" href="mailto:help@smwalinsaf.com">
                          help@smwalinsaf.com
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rights-section mt-0">
          <div className="rights-info">
            <p className="m-0 mt-4 text-center">
              حقوق النشر © 2025 جميع الحقوق محفوظة - شركة سمو الإنصاف للمحاماة
              والاستشارات القانونية
            </p>
          </div>
        </div>
      </div>

      {/* <!--Start WhatsApp icon section--> */}
      <a
        id="whatsapp-btn"
        aria-label="WhatsApp Customer Service"
        className="sticky-icon"
        target="_blank"
        href="https://wa.me/966506486173"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#fff"
          className="bi bi-whatsapp"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
        </svg>
      </a>
      {/* <!--End WhatsApp icon section--> */}
    </footer>
  );
}
