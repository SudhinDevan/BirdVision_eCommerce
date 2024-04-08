import ContactSection from "./ContactSection";
import HorizontalLine from "./HorizontalLine";
import Links from "./Links";

const Footer = () => {
  return (
    <>
      <div className="bg-black w-full h-full pb-3">
        <ContactSection />
        <div className="px-32">
          <HorizontalLine />
        </div>
        <Links />
        <h3 className="text-gray-300 text-xs text-center mt-8">
          Copyright © 2023 mettamuse. All rights reserved.
        </h3>
      </div>
    </>
  );
};

export default Footer;
