import React from "react";

const Wrapper = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className=" mt-[10vh] flex justify-center items-center px-16">
      {children}
    </div>
  );
};

export default Wrapper;
