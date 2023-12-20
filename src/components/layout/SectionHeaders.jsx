const SectionHeaders = ({ subHeader, mainHeader }) => {
  return (
    <>
      <div className="text-center mb-5">
        <h3 className="uppercase font-semibold text-fontColor">{subHeader}</h3>
        <h2 className="text-primary font-bold italic text-4xl">{mainHeader}</h2>
      </div>
    </>
  );
};

export default SectionHeaders;
