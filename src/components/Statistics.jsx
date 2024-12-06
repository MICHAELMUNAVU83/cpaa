

import React from "react";
import { motion } from "framer-motion";

import { DATA } from "../data/Data.jsx";

function Statistics() {
  return (
    <section>
      <div className="max-w-6xl px-5 lg:mx-auto py-8 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h2 className="mt-4 md:text-[30px] text-[20px] w-[90%] lg:w-[50%] text-[#525560] libre-baskerville-bold">
            Our Fun Facts
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            staggerChildren: 0.2,
          }}
          viewport={{ once: true }}
        >
          {DATA.statistics.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-[#FDA538]/30 text-center space-y-3 py-6 px-10 flex flex-col justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
            >
              <img
                src={stat.icon}
                alt={`${stat.icon} icon`}
                className="md:h-32 h-24 object-contain mx-auto"
              />
              <p className="md:text-[48px] text-[32px] text-[#252A34] font-extrabold">
                {stat.figure}+
              </p>
              <p className="text-[16px] w-[100%] josefin-sans-regular text-[#555555]">
                {stat.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Statistics;
