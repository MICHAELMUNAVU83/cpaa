export default function ProgramTile({ imgRef, title, desc }) {
  return (
    <div className="p-4 flex flex-col lg:flex-row lg:p-8 lg:space-x-8 h-full">
      <div className="w-full">
        {imgRef && (
          <img
            src={imgRef}
            alt={title[0]}
            className="w-full h-auto object-cover rounded-lg"
          />
        )}
      </div>

      <div className="flex flex-col w-full space-y-4">
        <h2 className="text-[20px] md:text-[30px] lg:text-[48px] font-bold text-gray-800">
          {title[0]}
        </h2>
        <div className="w-full h-96 overflow-y-scroll ">
          {" "}
          {desc.map((item, idx) => (
            <div
              key={idx}
              className="p-4 border rounded-md shadow-sm flex flex-col space-y-2 bg-gray-50 items-center justify-center"
            >
              {item.img && (
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-md"
                />
              )}

              <h3 className="text-lg font-semibold text-gray-700">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
