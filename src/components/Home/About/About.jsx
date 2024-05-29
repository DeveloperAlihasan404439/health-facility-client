// use the remix icon package import
import "remixicon/fonts/remixicon.css";

import Services from "../../../assets/About/Services.png";
import Nursing from "../../../assets/About/Nursing.png";
import CheckUp from "../../../assets/About/CheckUp.png";

import Image from "next/image";
import AboutRight from "./AboutRight";
function About() {
  return (
    <div className="w-11/12 mx-auto py-5 md:py-10 lg:flex bg-[#fff]">
      <div className="w-full lg:w-[50%] text-[#000e] md:mt-10">
        <h2 className="text-[#04b3fa] text-xl font-semibold tracking-widest">
          <i className="ri-star-fill"></i> About Us
        </h2>
        <h2 className="text-5xl font-bold text-inherit ">
          Professional Care Can Trust &{" "}
          <span className="text-[#04b3fa]">We Provide</span>
        </h2>
        <div className="my-5 flex gap-5 p-5 border rounded-[10px] hover:shadow-lg border-[#d6d1d1]">
          <Image
            width={700}
            height={700}
            src={Nursing}
            alt="Expert Nursing Staff"
            className="w-40 h-30"
          />
          <div>
            <h2 className="text-xl md:text-2xl mt-3 font-medium tracking-[2px] pb-2 ">
              Expert Nursing Staff
            </h2>
            <p>
              Our Expert Nursing Staff is dedicated to providing exceptional,
              patient-centered care with a focus on compassion, professionalism,
              and clinical excellence.
            </p>
          </div>
        </div>
        <div className="flex gap-5 p-5 border rounded-[10px] hover:shadow-lg border-[#d6d1d1]">
          <Image
            width={700}
            height={700}
            src={CheckUp}
            alt="Free Medical CheckUp"
            className="w-40 h-30"
          />
          <div>
            <h2 className="text-xl md:text-2xl mt-3 font-medium tracking-[2px] pb-2 ">
              Free Medical CheckUp
            </h2>
            <p>
              Join us for a comprehensive Free Medical Check-Up event designed
              to promote health and wellness in our community.
            </p>
          </div>
        </div>
        <div className="my-5 flex gap-5 p-5 border rounded-[10px] hover:shadow-lg border-[#d6d1d1]">
          <Image
            width={700}
            height={700}
            src={Services}
            alt="Medical Social Services"
            className="w-40 h-30"
          />
          <div>
            <h2 className="text-xl md:text-2xl mt-3 font-medium tracking-[2px] pb-2 ">
              Medical Social Services
            </h2>
            <p>
              Our Comprehensive Medical Social Services program is dedicated to
              supporting patients and their families by addressing the social.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[50%] flex justify-center items-center ">
        <AboutRight/>
      </div>
    </div>
  );
}

export default About;
