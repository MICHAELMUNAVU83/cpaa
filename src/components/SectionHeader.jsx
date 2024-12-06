import { FaCheck } from "react-icons/fa";

const SectionHeader = ({
  head,
  title,
  description,
  list = [],
  subtitles = [],
  subDescriptions = [],
  Button,
}) => {
  return (
    <div className="flex flex-col items-start space-y-4 p-4 sm:px-auto ">
      <div className="flex flex-row items-center">
        <span className="border-b border-black w-4 h-2 mr-2"></span>
        <p className="text-md md:text-lg font-bold">{head}</p>
      </div>
      <div>
        <h1 className="text-2xl font-bold lg:text-4xl">{title}</h1>
        <p className="text-lg">{description}</p>
      </div>
      <div>
        <ul className="flex flex-col space-y-2">
          {list.map((item, index) => (
            <li key={index} className="flex items-center space-x-2 ml-4">
              <FaCheck />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row  md:gap-x-4 md:gap-y-4">
        {subtitles.map((subtitle, index) => (
          <div key={index} className="flex flex-col md:flex-col md:space-x-4">
            <h3 className="font-bold">{subtitle}</h3>
            <p>{subDescriptions[index]}</p>
          </div>
        ))}
      </div>
      {Button && (
        <button className="bg-red-500 text-white w-[150px] h-[auto] p-4 items-center  rounded-md  my-8">
          {Button}
        </button>
      )}
    </div>
  );
};

export default SectionHeader;
