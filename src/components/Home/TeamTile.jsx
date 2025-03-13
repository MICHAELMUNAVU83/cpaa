export default function TeamTile({ imgRef, name, Role }) {
  return (
    <div className="flex flex-col p-4 w-[100%] bg-orange-200">
      <div className="flex items-center justify-center bg-gray-300 rounded-3xl">
        <img
          src={imgRef}
          alt={name}
          className="rounded-3xl object-cover object-top h-80 w-full"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-[20px] md:text-[24px] lg:text-[30px]">{name}</h1>
        <p className="text-[16px] md:text-[20px] lg:text-[24px]">{Role}</p>
      </div>
    </div>
  );
}
