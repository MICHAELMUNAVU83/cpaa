import React from "react";
import { motion } from "framer-motion";

const Posts = () => {
  const posts = [
    {
      month: "Apr",
      day: "14",
      title:
        "Boosting Together for Tomorrow: Building a Better Futureharity Campaign",
      image: "/assets/event1.png",
      description:
        "We’ll get you directly seated and inside for you to enjoy the show.",
    },
    {
      month: "Apr",
      day: "14",
      title: "Catalysts for Change: A Summit on Social Innovation",
      image: "/assets/event2.png",
      description:
        "We’ll get you directly seated and inside for you to enjoy the show.",
    },
    {
      month: "Apr",
      day: "14",
      title: "Pathways to Progress: An Event for Social Impact Leaders",
      image: "/assets/event3.png",
      description:
        "We’ll get you directly seated and inside for you to enjoy the show.",
    },
  ];

  return (
    <div className="md:w-[80%] w-[90%] m-auto mb-10">
      <div>
        <motion.h2
          className="mt-4 md:text-[30px] text-[20px] w-[90%] lg:w-[100%] text-[#525560] font-bold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          Milestones
        </motion.h2>
      </div>

      <motion.div
        className="mt-16 grid md:grid-cols-2 lg:col-span-3 grid-cols-1 gap-6 md:gap-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        {posts.map((post, index) => (
          <motion.div
            key={index}
            className="rounded-md shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
          >
            <div className="w-full">
              <img src={post.image} alt="post1" className="w-full" />
            </div>
            <div className="flex gap-10 p-5">
              <div className="flex roboto-bold flex-col">
                <p className="text-[#A90100] font-bold text-sm uppercase">
                  {post.month}
                </p>
                <p className="text-[#000] font-bold text-3xl mt-2">
                  {post.day}
                </p>
              </div>
              <div>
                <h3 className="libre-baskerville-bold text-sm tracking-wide text-[#000]">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm roboto-regular text-[#6A6A6A]">
                  {post.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Posts;
