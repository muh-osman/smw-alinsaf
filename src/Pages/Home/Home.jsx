import style from "./Home.module.scss";
// Components
import Banner from "../../Components/Banner";
import Navbar from "../../Components/Navbar";
import HeroTextAndBtn from "../../Components/HeroTextAndBtn";
import SecTwo from "../../Components/SecTwo";
import SecThree from "../../Components/SecThree";
import SecFour from "../../Components/SecFour";
import SecFive from "../../Components/SecFive";
import SecSix from "../../Components/SecSix";
import SecSeven from "../../Components/SecSeven";
import SecEight from "../../Components/SecEight";
import Footer from "../../Components/Footer";
import SecNine from "../../Components/SecNine";

export default function Home() {
  return (
    <>
      {/* Start Hero */}
      <div className={style.hero_container}>
        <Banner />
        <Navbar />
        <HeroTextAndBtn />
      </div>
      {/* End Hero */}

      <SecTwo />
      <SecThree />
      <SecFour />
      <SecFive />
      <SecSix />
      <SecSeven />
      <SecEight />
      <SecNine />
      <Footer />
    </>
  );
}
