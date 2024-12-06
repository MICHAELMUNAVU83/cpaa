export default function HeroTile({ about, tiles }) {
  return (
    <div className="w-full py-8">
      <div className=" mb-12">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full">
            <h1 className="text-[24px] md:text-[36px] lg:text-[48px] font-bold mb-4">
              {about.title}
            </h1>
            {about.desc.map((paragraph, index) => (
              <p
                key={index}
                className="text-[16px] md:text-[20px] lg:text-[24px] leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="w-full">
            <img src={about.img} alt={about.title} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {tiles
          .filter((tile) => tile.id === 1 || tile.id === 2)
          .map((tile) => (
            <div
              key={tile.id}
              className="p-6 border rounded-lg shadow-md hover:shadow-lg"
            >
              <div className="flex items-center justify-center ">
                <img
                  src={tile.imgRef}
                  alt={tile.tileTitle}
                  className="w-20 h-20"
                />
              </div>
              <h2 className="text-center text-[20px] md:text-[24px] lg:text-[28px] font-semibold mb-4">
                {tile.tileTitle}
              </h2>
              {tile.tileDesc.map((desc, index) => (
                <p
                  key={index}
                  className="text-[16px] md:text-[20px]  leading-relaxed text-center"
                >
                  {desc}
                </p>
              ))}
            </div>
          ))}
      </div>

      <div>
        <h2 className="text-center text-[24px] md:text-[30px] lg:text-[36px] font-bold mb-8">
          {tiles.find((tile) => tile.id === 3)?.tileTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiles
            .find((tile) => tile.id === 3)
            ?.tileDesc.map((value) => (
              <div
                key={value.id}
                className="p-6 border rounded-lg shadow-md hover:shadow-lg flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 mb-4">
                  <img
                    src={value.img}
                    alt={value.title}
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
                <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-bold">
                  {value.title}
                </h3>
                <p className="text-[14px] md:text-[16px] leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
