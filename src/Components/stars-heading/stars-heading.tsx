

import React, { PropsWithChildren } from "react";
import star from "../../assets/imgs/starr.png";

export const StarstHeading = ({children}: PropsWithChildren) => {
  return (
    <div className="md:w-4/6 w-full mx-auto flex items-center justify-center px-2 sm:px-0">
      <img className="w-8 rotate-180" src={star} alt="" />
      <h2 className="md:text-5xl sm:text-3xl text-2xl text-primary uppercase md:px-6 px-3 font-cowBoys">{children}</h2>
      <img className="w-8" src={star} alt="" />
    </div>
   
  );
};
