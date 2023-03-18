
import React, { PropsWithChildren } from "react";
export const Container = ({children}: PropsWithChildren) => {
  return (
    <div className="lg:container xl:px-24 md:px-0 mx-auto">
      <div className="h-full min-h-screen bg-homeBg mx-auto bg-no-repeat bg-cover d-flex justify-center py-16 main-bg">
        {children}
      </div>
    </div>
  );
};
