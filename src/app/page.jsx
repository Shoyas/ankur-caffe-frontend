import AboutComponent from "../components/layout/AboutComponent";
import HeroComponent from "../components/layout/HeroComponent";
import HomeMenuComponent from "../components/layout/HomeMenuComponent";
import SectionHeaders from "../components/layout/SectionHeaders";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <HeroComponent />
      <HomeMenuComponent />
      <AboutComponent />
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <Link className="text-4xl text-fontColor" href="tel:+8801521423331">
            +880 1521 423331
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
