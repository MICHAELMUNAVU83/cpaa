import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Awards from "@/components/Awards";

const teamMembers = [
  {
    image: "/assets/Team/LeornardJohnDavis.png",
    name: "Leonard John Davis",
    title: "Executive Director",
    links: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    image: "/assets/Team/FrancisWeber.png",
    name: "Francis Weber",
    title: "Director Education and research",
    links: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    image: "/assets/Team/KylaObrien.png",
    name: "Kyla Obrien",
    title: "Director Economic Affairs",
    links: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    image: "/assets/Team/AdrianDixon.png",
    name: "Adrian Dixon",
    title: "Director Membership and Recruitment Department",
    links: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    image: "/assets/Team/FreddyBusby.png",
    name: "Freddy Busby",
    title: "Director Programs and Initiatives",
    links: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    image: "/assets/Team/DaleBanks.png",
    name: "Dale Banks",
    title: "Director Comminications,Content and Media",
    links: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    image: "/assets/Team/MiriamMiddleton.png",
    name: "Miriam Middleton",
    title: "Director Finance and Administration Department",
    links: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    image: "/assets/Team/EllenWalton.png",
    name: "Ellen Walton",
    title: "Director International Liason nad Diaspora Affairs",
    links: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
];

export default function AboutCards() {
  return (
    <>
      <section className="py-8">
        <Awards />
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Meet our team</h1>
          <p className="text-gray-600">
            Meet the passionate leaders and minds driving our mission forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-[90%] mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-none  rounded-lg p-2">
              <div className="relative w-full h-[350px]">
                <img
                  src={member.image}
                  alt={member.title}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4 text-center">
                <h1 className="text-xl font-bold">{member.name}</h1>
                <h2 className="text-mini font-normal tetx-gray-300">
                  {member.title}
                </h2>
                <div className="flex justify-center mt-2 space-x-4">
                  <a
                    href={member.links.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href={member.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href={member.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
