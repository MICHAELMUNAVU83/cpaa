import { WorkData } from "@/app/shared/Data";
import WorkTile from "./WorkTile";

export default function OurWork() {
  return (
    <section className="w-full h-auto lg:h-screen">
      <div className="w-full max-w-[90%] space-y-6  mx-auto lg:max-w-[80%] h-full items-center justify-center flex flex-col lg:space-y-8 ">
        <div className="w-full ">
          {WorkData.map((data) => (
            <>
              <h1 className="text-[24px] md:text-[30px] lg:text-[48px]">
                {data.title}
              </h1>
              <p className="text-[16px] md:text-[20px] lg:text-[24px]">
                {data.desc}
              </p>
            </>
          ))}
        </div>
        <div className="flex space-y-12 lg:space-y-0 lg:space-x-8 w-full  flex-col md:flex-row">
          {WorkData[0].list.map((data) => (
            <WorkTile
              headerTag={data.headerTag}
              key={data.title}
              title={data.title}
              desc={data.desc}
              bgImg={data.img}
              action={data.action}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
