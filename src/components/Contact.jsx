import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact">
      <div className="md:w-[80%] w-[90%] m-auto justify-center items-center flex flex-col gap-2">
        <p className="md:text-[39px] text-[30px] libre-baskerville-bold text-[#1D2130]">
          We'd love to hear from you
        </p>
        <p className="text-[#717171] text-[18px] roboto-regular">
          Any question or remarks? Just write us a message!
        </p>
      </div>

      <div className="md:w-[80%] mt-5 w-[90%] md:flex-row flex-col  shadow-sm shadow-gray-500 rounded-md md:h-[670px] flex justify-center p-2 m-auto mb-10 ">
        <div className="md:w-[40%] w-[100%] h-[100%] bg-[#219D80] rounded-md  flex-col p-8 flex justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-white">Contact Information</p>
            <p className="text-white">Say something to start a live chat! </p>
          </div>

          <div className="flex flex-col mt-4 gap-4  md:gap-10 text-[#fff]">
            <div className="flex text-sm  gap-1 items-center">
              <IoMdMail size={23} />
              <p className="">info@panafricancenter.africa</p>
            </div>
            <div className="flex gap-1 text-sm items-center">
              <FaLocationDot size={23} />
              <p className="">3146 Koontz Lane, Kilimani</p>
            </div>
            <div className="flex gap-1 items-center">
              <FaPhoneAlt size={23} />
              <p className="">(+254)74136300</p>
            </div>
          </div>

          <div className="w-[100%] flex mt-12 justify-between items-center">
            <div className="flex gap-4 items-center">
              <div className="w-[50px] h-[50px] bg-[#CD3738] hover:bg-white transition-all ease-in-out duration-500 cursor-pointer rounded-full flex justify-center items-center">
                <FaTwitter className="text-white" size={30} />
              </div>
              <div className="w-[50px] h-[50px] bg-[#CD3738] hover:bg-white transition-all ease-in-out duration-500 cursor-pointer rounded-full flex justify-center items-center">
                <BsInstagram className="text-[#219D80]" size={30} />
              </div>
              <div className="w-[50px] h-[50px] bg-[#CD3738] hover:bg-white transition-all ease-in-out duration-500 cursor-pointer rounded-full flex justify-center items-center">
                <FaLinkedin className="text-white" size={30} />
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[60%] w-[100%] h-[100%] flex justify-center items-start bg-white p-8">
          <form
            action="https://formspree.io/f/xvgplpky"
            method="post"
            className="w-[100%] flex flex-col gap-3"
          >
            <div className="flex  items-start md:flex-row flex-col gap-4 justify-between  w-[100%]">
              <div className="flex flex-col gap-1 w-[100%] md:w-[48%]">
                <p className="text-black  text-[19px] libre-baskerville-regular">
                  First Name
                </p>
                <input
                  className="w-[100%] p-2 border-b-[2px] border-[#8D8D8D] text-[#8D8D8D] bg-transparent focus:outline-none"
                  placeholder="Enter your first name"
                  name="Name"
                  required
                />
              </div>

              <div className="flex flex-col gap-1 w-[100%] md:w-[48%]">
                <p className="text-black  text-[19px] libre-baskerville-regular">
                  Last Name
                </p>
                <input
                  className="w-[100%] p-2 border-b-[2px] border-[#8D8D8D] text-[#8D8D8D] bg-transparent focus:outline-none"
                  placeholder="Enter your last name"
                  name="Name"
                  required
                />
              </div>
            </div>
            <div className="flex  items-start justify-between md:flex-row flex-col gap-4   w-[100%]">
              <div className="flex flex-col gap-1 w-[100%] md:w-[48%]">
                <p className="text-black  text-[19px] libre-baskerville-regular">
                  Email
                </p>
                <input
                  className="w-[100%] p-2 border-b-[2px] border-[#8D8D8D] text-[#8D8D8D] bg-transparent focus:outline-none"
                  placeholder="Enter your email"
                  name="Email"
                  required
                />
              </div>

              <div className="flex flex-col gap-1 w-[100%] md:w-[48%]">
                <p className="text-black  text-[19px] libre-baskerville-regular">
                  Phone Number
                </p>
                <input
                  className="w-[100%] p-2 border-b-[2px] border-[#8D8D8D] text-[#8D8D8D] bg-transparent focus:outline-none"
                  placeholder="Enter your phone number"
                  name="Phone Number"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col mt-4 gap-1 w-[100%]">
              <p className="text-black  text-[19px] libre-baskerville-regular">
                Subject
              </p>
              <input
                className="w-[100%] p-2 border-b-[2px] border-[#8D8D8D] text-[#8D8D8D] bg-transparent focus:outline-none"
                placeholder="Enter your subject"
                name="Subject"
                required
              />
            </div>

            <div className="flex flex-col mt-4 gap-1 w-[100%]">
              <p className="text-black  text-[19px] libre-baskerville-regular">
                Message
              </p>
              <textarea
                className="w-[100%] p-2 border-b-[2px] border-[#8D8D8D] h-[150px] text-[#8D8D8D] bg-transparent focus:outline-none"
                placeholder="Enter your message"
                name="Message"
                required
              />
            </div>

            <div className="w-[100%] justify-end flex">
              <button
                type="submit"
                className="text-center text-white libre-baskerville-regular border px-5 py-3 rounded-[5px] bg-[#CD3738]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
