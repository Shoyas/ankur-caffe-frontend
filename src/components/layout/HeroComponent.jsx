import Image from "next/image";
import heroImage from "../../asset/hero-image-2.png";
import IconRight from "../icons/IconRight";
import IconInfo from "../icons/IconInfo";

const HeroComponent = () => {
  return (
    <section className="grid grid-cols-2 mt-5">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          <span className="text-primary">Ankur Caffee</span>&nbsp;is here to{" "}
          <br /> create a better&nbsp;
          <br />
          <span className="text-primary uppercase">moment</span>
        </h1>
        <p className="my-6 text-fontColor text-sm">
          Are you want to be our{" "}
          <span className="text-primary font-bold uppercase">lucky winner</span>
          ? Try our items and let us know what's your feedback.
        </p>
        <div className="flex gap-4">
          <button className="bg-primary px-4 py-2 rounded-md uppercase  text-white flex gap-2">
            Order Now <IconRight />
          </button>
          <button className="bg-primary px-4 py-2 rounded-md text-white flex gap-2">
            Learn More <IconInfo />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={heroImage}
          alt="ankur-Caffee"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </section>
  );
};

export default HeroComponent;
