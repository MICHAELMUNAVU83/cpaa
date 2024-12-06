import { Link } from "react-router-dom";

export default function WorkTile({ headerTag, title, bgImg, desc, action }) {
  return (
    <div
      className="relative rounded-3xl shadow-sm hover:shadow-lg object-cover bg-no-repeat bg-center  p-8"
      style={{ backgroundImage: `url('${bgImg}')` }}
    >
      <div className="inset-0 bg-black/50 absolute rounded-3xl"></div>
      <div className="relative">
        <div className="flex flex-row items-center w-auto text-white space-x-4">
          <span className="border-b-4 border-white w-8 h-2 text-center items-center flex"></span>
          <p className="text-[12px] md:text-[16px] lg:text-[20px] text-yellow-600 text-bold">
            {headerTag}
          </p>
        </div>
        <div className="flex flex-col items-center text-white space-y-8">
          <h1 className="text-[20px] md:text-[24px] lg:text-[32px]">{title}</h1>
          <span className="border-b-2 w-full h-2"></span>
          <p className="text-[14px] md:text-[20px] lg:text-[24px]">{desc}</p>
          <span className="border-b-2 w-full h-2"></span>
          <Link href={"/programs"}>
            <button className="px-4 py-2 md:px-8 md:py-4 border-b-2 border-red-600 hover:border-2 hover:border-red-700 hover:rounded-3xl ease-in transition-all ">
              {action}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
