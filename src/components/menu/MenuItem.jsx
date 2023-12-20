import Image from "next/image";
import menuItem1 from "../../asset/menu/burgar-1.png";

const MenuItem = () => {
  return (
    <div className="hover:bg-[#FFD7AD] transition-all p-4 rounded-md text-center">
      <Image
        className="mx-auto "
        src={menuItem1}
        alt={"Burger"}
        width={200}
        height={200}
      />
      <h4 className="my-2 font-semibold text-xl">Cheese Burger</h4>
      <p className="text-fontColor text-sm">
        Featuring a flame-grilled patty, melted cheese, fresh veggies, and
        secret sauce for an exquisite taste experience. Elevate your burger
        cravings with each succulent bite!
      </p>
      <button className="bg-primary text-white rounded-md px-6 py-2 mt-2">
        Add to cart 120tk
      </button>
    </div>
  );
};

export default MenuItem;
