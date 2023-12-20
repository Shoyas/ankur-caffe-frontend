import BGDesign1 from "../../asset/salad-1.png";
import BGDesign2 from "../../asset/salad-2.png";
import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

const HomeMenuComponent = () => {
  return (
    <section className="">
      <div className="absolute w-full left-0 right-0 justify-start">
        <div className="absolute left-0 -top-[70px] -z-10 text-left">
          <Image src={BGDesign2} alt="ankur-menu" width={300} height={300} />
        </div>
        <div className="absolute -top-[50px] right-0 -z-10 rotate-180">
          <Image src={BGDesign1} width={300} height={300} alt="ankur-menu" />
        </div>
      </div>
      <div className="text-center my-8">
        <SectionHeaders subHeader={"Check out"} mainHeader={"Menu"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
};

export default HomeMenuComponent;
