import Image from "next/image";
import SectionHeaders from "./SectionHeaders";
import BGDesign1 from "../../asset/salad-1.png";
import BGDesign2 from "../../asset/salad-3.png";

const AboutComponent = () => {
  return (
    <section className="text-center my-16">
      <div className="absolute w-full left-0 right-0 justify-start">
        <div>
          <Image
            className="absolute left-0 -top-[70px] -z-10 text-left rotate-180"
            src={BGDesign1}
            width={300}
            height={300}
            alt="ankur-menu"
          />
        </div>
        <div className="absolute bottom-[50px] right-0 -z-10 ">
          <Image src={BGDesign2} alt="ankur-menu" width={300} height={300} />
        </div>
      </div>
      <SectionHeaders subHeader={"Our Story"} mainHeader={"About us"} />
      <div className="max-w-3xl mx-auto mt-4 text-fontColor flex-col gap-4">
        <p>
          Experience a delightful culinary adventure at our well-known
          restaurant. Our menu offers a wide variety of dishes, including
          pizzas, burgers, aromatic coffees, grills, naan, noodles, halim, and
          authentic tandoori delicacies.
        </p>
        <p className="mt-4">
          We take pride in using only the finest ingredients and employing
          skilled techniques to create a gastronomic experience that caters to
          different palates. Treat yourself to a symphony of flavors, from our
          delectable pizzas to our mouthwatering burgers, as we bring together
          the best of taste and tradition for an unforgettable dining
          experience.
        </p>
      </div>
    </section>
  );
};

export default AboutComponent;
