import React from "react";

interface GetInvolvedTileProps {
  bgColor?: string;
  bgImage?: string;
  iconSrc: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonStyle?: string;
  textColor?: string;
  headingColor?: string;
}

const GetInvolvedTile = ({
  bgColor,
  bgImage,
  iconSrc,
  title,
  description,
  buttonText = "Learn More",
  buttonStyle,
  textColor,
  headingColor,
}: GetInvolvedTileProps) => {
  const tileClasses = `relative rounded-[30px] h-[550px]   p-6 flex flex-col items-center m-auto w-[100%] m-4 ${bgColor}`;

  const buttonClasses = `mt-4 py-2 px-4 rounded-[30px] ${buttonStyle}`;

  return (
    <div
      className={`${tileClasses}${tileClasses}`}
      style={
        bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      {bgImage && (
        <div className="absolute inset-0  rounded-[30px] member-background "></div>
      )}

      <div className="relative z-10">
        <div className="flex items-center justify-center mb-4">
          <h2
            className={`text-lg text-center flex justify-center items-center  md:text-[30px] leading-[30px] libre-baskerville-bold text-white font-bold ${headingColor}`}
          >
            {title}
          </h2>
        </div>
        <p
          className={`mb-4 leading-[32px] h-[320px] josefin-sans-regular ${textColor}`}
        >
          {description}
        </p>
        <button className={buttonClasses}>{buttonText}</button>
      </div>
    </div>
  );
};

export default GetInvolvedTile;
