

import React, { PropsWithChildren } from "react";
import star from "../../assets/imgs/starr.png";

export const StarstDivider = ({children}: PropsWithChildren) => {
  return (
    <div className="md:w-4/6 w-full mx-auto flex items-center justify-center px-3">
      <img className="md:w-20 w-12" src={star} alt="" />
      <div className="flex flex-col items-stretch justify-center w-full px-4">
        <span className="w-full h-[1px] bg-primary mb-1"></span>
        <span className="w-full h-1 bg-primary"></span>
      </div>
      <img className="md:w-20 w-12" src={star} alt="" />
    </div>
   
  );
};
