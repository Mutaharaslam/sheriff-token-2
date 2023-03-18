

import React, { PropsWithChildren } from "react";
import bullet from "../../assets/imgs/bullet-left-min.png";

export const BulletHeading = ({children}: PropsWithChildren) => {
  return (
    <div className="md:w-4/6 w-full mx-auto flex items-center justify-center">
      <img className="w-8 rotate-180" src={bullet} alt="" />
      <h2 className="md:text-5xl sm:text-3xl text-2xl text-primary uppercase font-serif px-6">{children}</h2>
      <img src={bullet} alt="" />
    </div>
   
  );
};
