export default function EventTile({
  headerTag,
  title,
  subTitle,
  desc,
  date,
  venue,
  btn,
  imgRef,
}) {
  return (
    <div className="bg-cyan-300 rounded-3xl p-4">
      <div className="relative w-full h-auto ">
        <div className="inset-0 bg-black/20 absolute rounded-2xl z-10"></div>
        <span className="relative z-20 p-12 text-white text-lg font-bold">
          {headerTag}
        </span>
        <div className="relative flex items-center justify-center">
          <img
            src={imgRef}
            width={500}
            height={500}
            alt={title}
            className="w-full  rounded-2xl lg:h-auto lg:bg-fixed lg:object-cover lg:bg-center"
          />
        </div>
      </div>
      <div>
        <div className="">
          <h1 className="text-[16px] md:text-[20px] lg:text-[24px]">{title}</h1>
          <h2 className="text-[20px] md:text-[24px] lg:text-[32px]">
            {subTitle}
          </h2>
        </div>
        <div className="px-4 py-2">
          <p className="text-[16px] md:text-[20px] lg:text-[24px]">{desc}</p>
        </div>
        <div className="flex flex-col bg-red-600  p-4 rounded-3xl space-y-4">
          <span className="text-lg text-bold text-white">Date{date}</span>
          <span className="text-lg text-bold text-white">Venue:{venue}</span>
          <button className="px-4 py-2 lg:px-8 lg:py-4 bg-white text-red-600 rounded-xl">
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
}
