import { motion } from "framer-motion";
import { useState } from "react";
import EventTile from "./Home/EventTile.jsx";

export default function EventComponent() {
  const EventData = [
    {
      id: `1`,
      headerTag: `Upcoming`,
      title: `Upcoming Event`,
      subTitle: "Pan-African Synergy Conference 2024",
      date: ": November 28-29, 2024",
      sortableDate: "2024-11-28",
      venue: "University of Nairobi",
      desc: `Join us for this landmark gathering of scholars, policymakers, and practitioners discussing "Bridging Continents for Unity, Action, and Prosperity.`,
      btn: `Register Now`,
      imgRef: `/assets/hero/upcoming.jpg`,
    },
    {
      id: `2`,
      headerTag: `Past`,
      title: `Past Event`,
      subTitle: "Pan-African Synergy Conference 2024",
      date: ":May 28-29, 2024",
      sortableDate: "2024-5-28",
      venue: "University of Nairobi",
      desc: `Join us for this landmark gathering of scholars, policymakers, and practitioners discussing "Bridging Continents for Unity, Action, and Prosperity.`,
      btn: `View Agenda`,
      imgRef: `/assets/bigmap.png`,
    },

    {
      id: `3`,
      headerTag: `Past`,
      title: `Past Event`,
      subTitle: "Pan-African Synergy Conference 2024",
      date: ":April 28-29, 2024",
      sortableDate: "2024-4-28",
      venue: "University of Nairobi",
      desc: `Join us for this landmark gathering of scholars, policymakers, and practitioners discussing "Bridging Continents for Unity, Action, and Prosperity.`,
      btn: `View Agenda`,
      imgRef: `/assets/bigmap.png`,
    },
    {
      id: `4`,
      headerTag: `Past`,
      title: `Past Event`,
      subTitle: "Pan-African Synergy Conference 2024",
      date: ": January 28-29, 2024",
      sortableDate: "2024-1-28",
      venue: "University of Nairobi",
      desc: `Join us for this landmark gathering of scholars, policymakers, and practitioners discussing "Bridging Continents for Unity, Action, and Prosperity.`,
      btn: `View Agenda`,
      imgRef: `/assets/bigmap.png`,
    },
  ];
  const sortedEvents = [...EventData].sort(
    (a, b) => new Date(b.sortableDate) - new Date(a.sortableDate)
  );

  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [paginationIndex, setPaginationIndex] = useState(0);

  const pastEvents = sortedEvents.slice(1);
  const paginatedEvents = pastEvents.slice(
    paginationIndex,
    paginationIndex + 2
  );

  const handleNextPagination = () => {
    if (paginationIndex + 2 < pastEvents.length) {
      setPaginationIndex(paginationIndex + 2);
    } else {
      setPaginationIndex(0);
    }
  };

  const handleEventClick = (index) => {
    setFeaturedIndex(index + 1);
    setPaginationIndex(0);
  };

  return (
    <section className="w-full h-auto py-8">
      <div className="max-w-[90%] lg:max-w-[80%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h1 className="text-[20px] md:text-[30px] lg:text-[48px]">Events</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <motion.div
            className="col-span-1 lg:col-span-1 md:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <EventTile
              headerTag={sortedEvents[featuredIndex].headerTag}
              title={sortedEvents[featuredIndex].title}
              subTitle={sortedEvents[featuredIndex].subTitle}
              desc={sortedEvents[featuredIndex].desc}
              date={sortedEvents[featuredIndex].date}
              venue={sortedEvents[featuredIndex].venue}
              btn={sortedEvents[featuredIndex].btn}
              imgRef={sortedEvents[featuredIndex].imgRef}
            />
          </motion.div>

          <div className="col-span-2 lg:col-span-2 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {paginatedEvents.map((data, index) => (
              <motion.div
                key={data.id}
                className="cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => handleEventClick(index + paginationIndex)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
                viewport={{ once: true }}
              >
                <EventTile
                  headerTag={data.headerTag}
                  title={data.title}
                  subTitle={data.subTitle}
                  desc={data.desc}
                  date={data.date}
                  venue={data.venue}
                  btn={data.btn}
                  imgRef={data.imgRef}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {pastEvents.length > 2 && (
          <motion.button
            className="mt-4 mx-auto bg-black text-white px-4 py-2 lg:px-8 lg:py-4 rounded-lg hover:bg-red-600"
            onClick={handleNextPagination}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            Next
          </motion.button>
        )}
      </div>
    </section>
  );
}
