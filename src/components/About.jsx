import React from "react";

import AboutCards from "@/components/AboutCards";

import { BsCheckCircleFill } from "react-icons/bs";

function AboutPage() {
  return (
    <section className="w-full h-auto">
      <div className="w-full max-w-[80%] mx-auto ">
        <div className="flex flex-col my-20 py-10">
          <div className="mb-8 flex flex-col ">
            <div className="flex flex-row items-center">
              <span className="border-b-2 border-black w-12 mr-4"></span>
              <p className="text-sm  font-bold">KNOW ABOUT US</p>
            </div>
            <h1 className="text-3xl font-bold text-start">
              We are a non-governmental organization
            </h1>
          </div>

          <div className="items-start flex my-10">
            <p className="text-pretty">
              The Center for Pan African Affairs (CPAA) is a potent and dynamic
              network dedicated to advancing Africa's unity and prosperity
              through the enduring principles of Pan Africanism. As a leading
              hub for innovation, strategic development, and impactful action,
              CPAA is committed to fostering the Pan African vision by
              prioritizing citizen-centered approaches. CPAA is deeply rooted in
              the African Union’s Agenda 2063, the continent’s strategic
              framework for socio-economic transformation. The organization
              aligns its activities with the goals of Agenda 2063, particularly
              in areas such as peace and security, economic growth, and cultural
              renaissance. CPAA collaborates with a wide range of partners,
              including governments, academic institutions, civil society
              organizations, and international agencies, to amplify its impact
              and reach. These partnerships are crucial in ensuring the
              successful implementation of CPAA’s mission and vision. We are at
              the forefront of efforts to unify and uplift Africa and its
              diaspora. Through strategic innovation, collaboration, and a
              steadfast commitment to Pan Africanism, CPAA is driving the
              continent towards a future of collective strength, shared
              progress, and lasting peace.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-[270%] left-[10%] md:top-[155%] md:left-[15%] lg:top-[170%] lg:left-[350px]">
        <img
          className="md:w-[600px] lg:w-[700px]"
          src={"/assets/about.png"}
          width={300}
          height={300}
          alt="about-img"
        />
      </div>
      <div className="bg-red-100 w-full h-auto py-40">
        <div className="w-full flex flex-col md:flex-row lg:flex-row max-w-[80%] mx-auto justify-evenly items-center ">
          <div className=" w-full md:w-1/2 lg:w-1/2 flex flex-col items-center justify-center">
            <div className="p-8">
              <h3 className="text-xl lg:text-2xl font-bold text-start lg:text-center ">
                OUR MISSION
              </h3>
              <p className="md:px-10 lg:px-20">
                To realize a peaceful, united, and integrated Africa, alongside
                its global diaspora, by promoting collective strength and shared
                progress.
              </p>
            </div>
            <div className="p-8 flex flex-col ">
              <h3 className="text-xl lg:text-2xl  font-bold text-start">
                Core Principles
              </h3>
              <ul className="space-y-2">
                <li className="flex mr-4 flex-row items-center">
                  <BsCheckCircleFill className="rounded-full fill-green-700 mr-4" />{" "}
                  Unity and Integration
                </li>
                <li className="flex mr-4 flex-row items-center">
                  {" "}
                  <BsCheckCircleFill className="rounded-full fill-green-700 mr-4" />
                  Citizen Centered Development{" "}
                </li>
                <li className="flex mr-4 flex-row items-center">
                  {" "}
                  <BsCheckCircleFill className="rounded-full fill-green-700 mr-4" />{" "}
                  UnityUtility improvement{" "}
                </li>
                <li className="flex mr-4 flex-row items-center">
                  {" "}
                  <BsCheckCircleFill className="rounded-full fill-green-700 mr-4" />
                  Collaboration
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/2 justify-center flex flex-col items-center">
            <div className="p-8">
              <h3 className="text-lg font-bold text-center lg:text-2xl ">
                OUR VISION
              </h3>
              <p>
                A united and prosperous Africa, where the principles of Pan
                Africanism guide the continent’s development, fostering peace,
                integration, and shared prosperity among all people and the
                global African diaspora.
              </p>
            </div>

            <div className="p-8">
              <h3 className="text-lg font-bold text-start lg:text-2xl ">
                Our values
              </h3>
              <ul className="space-y-2">
                <li className="flex mr-4 flex-row items-center">
                  {" "}
                  <BsCheckCircleFill className="rounded-full fill-green-700 mr-4" />{" "}
                  Unity
                </li>
                <li className="flex mr-4 flex-row items-center">
                  {" "}
                  <BsCheckCircleFill className="rounded-full fill-green-700 mr-4" />
                  Empowerment
                </li>
                <li className="flex mr-4 flex-row items-center">
                  {" "}
                  <BsCheckCircleFill className="rounded-full fill-green-700 mr-4" />
                  Sustainability{" "}
                </li>
                <li className="flex mr-4 flex-row items-center">
                  {" "}
                  <BsCheckCircleFill className="rounded-full fill-green-700 mr-4" />{" "}
                  UnityCultural Heritage
                </li>
                <li className="flex mr-4 flex-row items-center">
                  {" "}
                  <BsCheckCircleFill className="rounded-full fill-green-700 mr-4" />{" "}
                  Unityinnovation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <AboutCards />
    </section>
  );
}

export default AboutPage;
