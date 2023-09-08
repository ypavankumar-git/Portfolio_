import React, { useRef, useState } from "react";
import images from "../../constants/image";

export const Form = () => {
    const message = "Kindly mail in !!!";
    const mailId = "vipinkopavan@gmail.com";

  return (
    <div className="flex mt-20 flex-col items-center justify-between  text-black gap-16">
      <h2 id="mailId" className="text-xl md:text-3xl font-medium text-gray-900">{mailId}</h2>
      <div
        className="flex flex-col justify-center items-center gap-4 py-8 px-8 bg-gray-50 rounded-xl filter shadow-md dark:bg-primary-400"
      >
        <img
          className="object-contain dark:filter dark:invert"
          src={images.gmail}
          alt={"GMAIL"}
          loading="lazy"
          width={110}
          height={110}
        />
      </div>
    </div>
  );
};
