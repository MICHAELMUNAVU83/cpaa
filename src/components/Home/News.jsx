import { motion } from "framer-motion";
import { useState } from "react";

export default function NewsComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const NewsData = [
    {
      imgRef: [
        "/Pan African Synergy Conference Banner.jpg",
        "/Pan African Synergy Conference Banner.jpg",
        "/Pan African Synergy Conference Banner.jpg",
      ],
      title: [`News and Publications  `, `Recent Highlights  `],
      desc: `Stay informed with the latest updates from CPAA. Read about our programs, success stories, and expert insights on advancing Pan-African ideals.`,
      list: [
        `The upcoming Pan-African Synergy Conference: A transformative dialogue on unity and development`,
        `Launch of the Centre for Pan-African Studies at the University of Nairobi`,
        `Success stories from our Consciousness Building workshops across Africa.  `,
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % NewsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + NewsData.length) % NewsData.length
    );
  };

  return (
    <section className="w-full lg:h-auto">
      <div className="w-full max-w-[90%] lg:max-w-[80%] mx-auto relative shadow-lg">
        <motion.div
          className="relative w-full h-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={NewsData[currentIndex].imgRef[0]}
            alt="News Image"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="absolute top-1/2 left-4 right-4 flex justify-between px-4">
          <button
            onClick={prevSlide}
            className="bg-black text-white p-2 rounded-full opacity-50 hover:opacity-100"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="bg-black text-white p-2 rounded-full opacity-50 hover:opacity-100"
          >
            &#8594;
          </button>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {NewsData.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>

      <div className="mt-8 mx-auto w-full max-w-[90%] md:max-w-[80%]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold text-center">
            {NewsData[currentIndex].title[0]}
          </h2>
          <p className="mt-4 text-lg text-center text-gray-700">
            {NewsData[currentIndex].desc}
          </p>
          <ul className="mt-6 space-y-2 text-center">
            {NewsData[currentIndex].list.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                className="text-sm md:text-lg text-gray-600 font-semibold"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
