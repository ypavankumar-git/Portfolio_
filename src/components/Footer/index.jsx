import React from "react";

const Footer = () => {
  const currentDate = "Sep 6, 2023"
  return (
    <div className="bg-white py-16 dark:bg-primary">
      <div className="text-center">
        <p className="text-primary font-normal text-base mb-2 dark:text-white">
          Last updated on  {currentDate}  by Pavan Y
        </p>
      </div>
    </div>
  );
};

export default Footer;
