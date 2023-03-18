import React, { PropsWithChildren } from "react";

export const ArrowButton = ({children}: PropsWithChildren) => {
  return (
    <a href="#" className="font-serif text-white sm:text-xl text-lg md:w-40 w-32 
      md:h-16 h-12  flex items-center sm:pl-4 pl-2  justify-start 
      relative bg-contain bg-no-repeat bg-arrowBtnBg">
      {children}
    </a>
  );
};
