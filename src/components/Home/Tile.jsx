import { Link } from "react-router-dom";

export default function TileComponent({
  headerTile,
  title,
  desc = ["", ""],
  list = [],
  imgRef,
  btn,
}) {
  return (
    <>
      <div className="flex flex-col-reverse items-center justify-center md:flex-col-reverse  lg:flex-row space-y-8 lg:space-x-4">
        <div className="flex flex-col w-full space-y-4">
          <div className="flex flex-row space-x-4 w-auto items-center md:justify-start lg:items-center lg:justify-start">
            <span className="border-b-4 border-red-600 w-8 h-2 flex "></span>
            <span className="text-red-600 text-[16px] md:text-[18px] lg:text-[20px] font-bold ">
              {headerTile}
            </span>
          </div>
          <div className="flex flex-col  lg:items-start lg:justify-start space-y-4">
            <h1 className="text-[24px] md:text-[34px] lg:text-[48px]">
              {title}
            </h1>
            <p className="text-[16px] md:text-[20px] lg:text-[24px]">
              {desc[0]}
            </p>
            <ul className=" bg-gray-100 p-2 rounded-3xl shadow-md">
              {list.map((list, idx) => (
                <li
                  key={idx}
                  className="text-[16px] md:text-[20px] lg:text-[24px] font-medium  px-2"
                >
                  {list}
                </li>
              ))}
            </ul>
            <p className="text-[16px] md:text-[20px] lg:text-[24px]">
              {desc[1]}
            </p>
            <Link href={"/about"}>
              <button className="px-4 py-2 md:w-full lg:px-8 lg:py-4 mt-10 bg-red-600 text-white  text-base lg:text-lg">
                {btn}
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full flex items-center justify-center ">
          <img
            src={imgRef}
            width={500}
            height={500}
            className="object-cover  bg-center lg:w-full md:w-full lg:h-full"
            alt={title}
          />
        </div>
      </div>
    </>
  );
}

export const TileComponent2 = ({
  headerTile,
  title,
  desc = ["", ""],
  list = [],
  imgRef,
  btn,
}) => {
  return (
    <>
      <div className="flex  flex-col lg:flex-row  lg:space-x-4">
        <div className="w-full flex items-center justify-center">
          <img
            src={imgRef}
            width={500}
            height={500}
            className="object-cover  bg-center md:w-full lg:w-full lg:h-full"
            alt={title}
          />
        </div>
        <div className="flex flex-col w-full space-y-4 mt-4">
          <div className="flex flex-row space-x-4 w-auto items-center">
            <span className="border-b-4 border-red-600 w-8 h-2 flex "></span>
            <span className="text-red-600 text-[16px] md:text-[18px] lg:text-[20px] font-bold">
              {headerTile}
            </span>
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className="text-[24px] md:text-[34px] lg:text-[48px]">
              {title}
            </h1>
            <p className="text-[16px] md:text-[20px] lg:text-[24px]">
              {desc[0]}
            </p>
            <p className="text-[16px] md:text-[20px] lg:text-[24px]">
              {desc[1]}
            </p>
            <ul className="bg-gray-100 p-2 md:p-4 shadow-md rounded-3xl w-full">
              {list.map((list, idx) => (
                <li
                  key={idx}
                  className="text-[16px] md:text-[20px] lg:text-[24px] font-medium "
                >
                  {list}
                </li>
              ))}
            </ul>
          </div>
          <Link href={"/programs"}>
            <button className="px-4 py-2 md:w-full lg:px-8 lg:py-4 mt-10 bg-red-600 text-white text-base lg:text-lg">
              {btn}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
