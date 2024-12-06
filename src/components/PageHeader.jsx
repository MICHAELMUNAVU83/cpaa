import React from "react";

const PageHeader = (props) => {
  return (
    <div
      className="h-[400px] flex justify-center items-center"
      style={{
        backgroundImage: "url('/assets/pageheader.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col gap-2 justify-center items-center">
        <p className="meri-bold  libre-baskerville-bold text-[48px] md:text-[64px] text-white">
          {props.title}
        </p>

        <div className="flex meri-bold  text-white  text-[30px] md:text-[32px] gap-2 items-center">
          <p>Home</p>
          <p>{" > "}</p>
          <p className="text-[#FFD70A]">{props.title}</p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
