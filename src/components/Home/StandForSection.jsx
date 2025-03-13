import { motion } from "framer-motion";
import TileComponent from "./Tile";

export default function StandForSection() {
  const IntroData = [
    {
      id: 1,
      headerTag: `CPAA Envision`,
      title: `What We Stand For`,
      imgRef: `/assets/Screenshot 2025-03-13 at 12.39.46.png`,
      desc: [
        `At CPAA, we envision:`,
        `We work tirelessly to connect communities, amplify African voices, and build solutions to the continent’s challenges through partnerships and people-centered approaches.`,
      ],
      list: [
        ` A united Africa where collaboration drives progress.`,
        `A peaceful Africa that thrives through solidarity and shared values.`,
        `A prosperous Africa led by empowered citizens and sustainable development.`,
      ],
      button: `Learn more`,
    },
  ];

  return (
    <section className="w-full h-auto lg:h-screen flex item-center">
      <div className="w-full max-w-[90%] lg:max-w-[80%] mx-auto flex justify-center items-center flex-wrap gap-8">
        {IntroData.map((data, index) => (
          <motion.div
            key={data.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: "easeInOut",
            }} // Staggered animations
            viewport={{ once: true }}
          >
            <TileComponent
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
