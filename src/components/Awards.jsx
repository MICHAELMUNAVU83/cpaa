export default function Awards() {
  return (
    <>
      <section className="w-full flex flex-col items-center ">
        <div>
          <h1 className="text-3xl font-bold text-center">
            Awards & Recognition
          </h1>
        </div>
        <div className="w-full max-w-[80%] mx-auto h-auto  items-center justify-evenly flex-wrap flex flex-row md:flex-row lg:flex-row space-y-8 my-20">
          <div className="space-y-2 flex flex-col justify-center items-center">
            <img
              src={"/assets/award-logos/Award badge (1).png"}
              width={50}
              height={50}
              alt="awards"
              className="md:w-[100px] lg:w-[100px]"
            />
            <h3 className="font-bold text-sm md:text-xl lg:text-xl">2021</h3>
            <h4 className="font-bold text-sm md:text-md lg:text-xl">
              {" "}
              Best NGO Award
            </h4>
            <p className="text-sm md:text-md lg:text-lg">NAIROBI,KENYA</p>
          </div>
          <div className="space-y-2 flex flex-col justify-center items-center">
            <img
              src={"/assets/award-logos/Award badge (2).png"}
              width={50}
              height={50}
              alt="awards"
              className="md:w-[100px] lg:w-[100px]"
            />
            <h3 className="font-bold text-sm md:text-xl lg:text-xl">2018</h3>
            <h4 className="font-bold  text-sm md:text-md lg:text-xl ">
              Global Award
            </h4>
            <p className="text-sm md:text-md lg:text-lg"> NAIROBI, KENYA</p>
          </div>
          <div className="space-y-2 flex flex-col justify-center items-center">
            <img
              src={"/assets/award-logos/Award badge (1).png"}
              width={50}
              height={50}
              alt="awards"
              className="md:w-[100px] lg:w-[100px]"
            />
            <h3 className="font-bold text-sm md:text-xl lg:text-xl">2014</h3>
            <h4 className="font-bold  text-sm md:text-md lg:text-xl">
              CSN Award
            </h4>
            <p className="text-sm md:text-md lg:text-lg">NAIROBI, KENYA</p>
          </div>
          <div className="space-y-2 flex flex-col justify-center items-center">
            <img
              src={"/assets/award-logos/Award badge.png"}
              width={50}
              height={50}
              alt="awards"
              className="md:w-[100px] lg:w-[100px]"
            />
            <h3 className="font-bold text-sm md:text-xl lg:text-xl">2010</h3>
            <h4 className="font-bold  text-sm md:text-md lg:text-xl">
              NGO of The Year Award
            </h4>
            <p className="text-sm md:text-md lg:text-lg">Nairobi, Kenya</p>
          </div>
        </div>
      </section>
    </>
  );
}
