import React from "react";

const FooterComponent = () => {
  return (
    <footer className="border-t p-8 text-center text-fontColor mt-16">
      Ankur Caffeee - All Right Reserved &copy;{new Date().getFullYear()}
    </footer>
  );
};

export default FooterComponent;
