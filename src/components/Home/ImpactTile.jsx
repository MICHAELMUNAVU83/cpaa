import { Link } from "react-router-dom";
export default function ImpactTile({
  title = ["", ""],
  desc = "",
  list = [],
  list2 = [],
  btn = "",
}) {
  return (
    <div>
      <div className="flex flex-col mb-8 ">
        <h1 className="text-[20px] md:text-[30px] lg:text-[48px] ">
          {title[0]}
        </h1>
        <p className="text-[16px] md:text-[20px] lg:text-[24px] mt-4">{desc}</p>
      </div>

      <div className="mb-8">
        {list.map((item, index) => (
          <p key={index} className="text-[16px] md:text-[20px] lg:text-[24px]">
            {item}
          </p>
        ))}
      </div>

      <div>
        <h2 className="text-[20px] md:text-[24px] lg:text-[32px] mb-4">
          {title[1]}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {list2.map((item) => (
            <div
              key={item.id}
              className="bg-white flex flex-col items-center text-center p-4 border rounded-lg shadow-sm hover:shadow-md shadow-red-100"
            >
              <div className="w-full h-48 mb-4 ">
                <img
                  src={item.img}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="object-contain bg-center  h-full w-full"
                />
              </div>
              <h3 className="text-[20px] md:text-[24px] lg:text-[28px] mb-2 text-red-600">
                {item.title}
              </h3>
              <p className="text-[14px] md:text-[18px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href={"/programs"}>
          <button className="bg-black text-white px-6 py-2 lg:px-8 lg:py-4 rounded-lg hover:bg-red-600">
            {btn}
          </button>
        </Link>
      </div>
    </div>
  );
}
