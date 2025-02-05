import style from "./Footer.module.scss";
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
              الحي، 65344941 منازل المتقين، جيبارا 6534، جدة 23214، المملكة
              العربية السعودية
            </p>

            <div className="socials">
              <a
                href="https://www.instagram.com/cashif_sa"
                aria-label="instagram"
              >
                <svg
                  aria-hidden="true"
                  className="e-font-icon-svg e-fab-instagram"
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
              <a href="https://x.com/cashif_sa" aria-label="x">
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
                      <a href="https://maps.app.goo.gl/">
                        الدمام{" "}
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
                      <a href="https://maps.app.goo.gl/">
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
                      <a href="#prices">فحص ما قبل الشراء</a>
                    </li>

                    <li>
                      <a href="#">خدمة مخدوم</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 col-6">
                <div className="help-list">
                  <h4>روابط مهمة</h4>
                  <ul>
                    <li>
                      <a href="#">
                        الأحكام والخصوصية
                      </a>
                    </li>

                    <li>
                      <a href="#">المدونة</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 col-6 contact-us">
                <div className="footer-contact">
                  <h4>تواصل معنا</h4>
                  <ul>
                    <li className="footer-contact-li">
                      <span>خدمة العملاء</span>
                      <p>
                        <a dir="ltr" href="tel:+966920015336">+966920015336</a>
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
              جميع الحقوق محفوظة لدى شركة سمو الانصاف حقوق النشر 2025 ©
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
