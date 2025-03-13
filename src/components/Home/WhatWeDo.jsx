import { motion } from "framer-motion";

import { TileComponent2 } from "./Tile";

export default function WhatWeDo() {
  const VisionData = [
    {
      id: 1,
      headerTag: `Mission & Vision`,
      title: `What We Do`,
      imgRef: `/assets/Screenshot 2025-03-13 at 12.41.26.png`,
      desc: [
        `Empower | Advocate | Transform`,
        `CPAA champions the Pan-African vision through:`,
      ],
      list: [
        ` Education and Consciousness Building - Workshops, cultural activities, and forums that instill Pan-African values and leadership.  `,
        `Policy Advocacy - Collaborating with institutions to align policies with Pan-African ideals.`,
        `Strategic Interventions -  Providing technical support and fostering partnerships for impactful programs. `,
      ],
      button: `Learn more`,
    },
  ];

  return (
    <section className="w-full my-10 h-auto lg:h-screen flex item-center">
      <div className="w-full max-w-[90%] lg:max-w-[80%] mx-auto flex justify-center items-center flex-wrap gap-8">
        {VisionData.map((data, index) => (
          <motion.div
            key={data.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
          >
            <TileComponent2
              headerTile={data.headerTag}
              title={data.title}
              desc={data.desc}
              list={data.list}
              imgRef={data.imgRef}
              btn={data.button}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
