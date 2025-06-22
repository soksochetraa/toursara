import { useNavigate } from "react-router-dom";
import soksochetra from "../public/images/aboutus/soksochetra.jpg";
import rapnha from "../public/images/aboutus/rapanha.jpg";
import seansoulong from "../public/images/aboutus/seansoulong.jpg";
import logobgwhite from "../public/images/logo/logo_bgw.svg";
import {
  Ship,
  MountainSnow,
  Bus,
  CalendarRange,
  Castle,
  BedDouble,
} from "lucide-react";
import React, { useState } from "react";

const faqData = [
  {
    question: "Suspendisse risus purus",
    answer:
      "Ornare arcu praesent in tempor ut facilisi quis id. Pharetra faucibus orci fermentum aenean interdum dolor ac cursus sit tortor enimmus.",
  },
  {
    question: "Sit amet consectetur",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel sem at velit viverra tincidunt.",
  },
  {
    question: "Can I customise my tour package?",
    answer:
      "Yes! You can fully customize your tour package, including destinations, activities, and duration to fit your preferences.",
  },
  {
    question: "Viverra non commodo vel ac aliqueteuism",
    answer:
      "Etiam pulvinar, elit nec facilisis tincidunt, nunc eros suscipit elit, in dapibus felis justo a velit.",
  },
];

function About() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-10 py-[50px]">
      <section className="w-[1200px] bg-[#58A6A0] h-80 flex justify-center items-center gap-2.5 object-cover rounded-[20px]">
        <h1 className="font-bold text-[60px] text-white">About Us</h1>
      </section>
      <div className="w-[1200px] flex items-start gap-[248px]">
        <h1 className="w-[394px] font-bold text-[40px] text-black">
          Dare to Explore with Travel Agency
        </h1>
        <p className="w-[523px] font-normal text-[16px] text-black opacity-[0.60]">
          Sed lectus tincidunt et et luctus imperdiet vitae sed mi. Pretium nibh
          pharetra ipsum faucibus convallis. Felis non tincidunt nunc ridiculus
          nunc faucibus.
        </p>
      </div>
      <div className="w-[1200px] flex gap-12">
        <span className="flex flex-col gap-4 grow">
          <Ship size={64} />
          <h2 className="font-bold text-[24px] text-start text-black">
            Island Exploring
          </h2>
          <p className="font-normal text-[16px] text-black opacity-[0.60]">
            A iaculis auctor viverra integer elementum nisl quam. Lorem volutpat
            quisque.
          </p>
        </span>
        <span className="flex flex-col gap-4 grow">
          <MountainSnow size={64} />
          <h2 className="font-bold text-[24px] text-start text-black">
            Mountian
          </h2>
          <p className="font-normal text-[16px] text-black opacity-[0.60]">
            A iaculis auctor viverra integer elementum nisl quam. Lorem volutpat
            quisque.
          </p>
        </span>
        <span className="flex flex-col gap-4 grow">
          <Bus size={64} />
          <h2 className="font-bold text-[24px] text-start text-black">Bus</h2>
          <p className="font-normal text-[16px] text-black opacity-[0.60]">
            A iaculis auctor viverra integer elementum nisl quam. Lorem volutpat
            quisque.
          </p>
        </span>
      </div>
      <div className="w-[1200px] flex gap-12">
        <span className="flex flex-col gap-4 grow">
          <CalendarRange size={64} />
          <h2 className="font-bold text-[24px] text-start text-black">
            Event And Festival
          </h2>
          <p className="font-normal text-[16px] text-black opacity-[0.60]">
            A iaculis auctor viverra integer elementum nisl quam. Lorem volutpat
            quisque.
          </p>
        </span>
        <span className="flex flex-col gap-4 grow">
          <Castle size={64} />
          <h2 className="font-bold text-[24px] text-start text-black">
            Temple
          </h2>
          <p className="font-normal text-[16px] text-black opacity-[0.60]">
            A iaculis auctor viverra integer elementum nisl quam. Lorem volutpat
            quisque.
          </p>
        </span>
        <span className="flex flex-col gap-4 grow">
          <BedDouble size={64} />
          <h2 className="font-bold text-[24px] text-start text-black">Stays</h2>
          <p className="font-normal text-[16px] text-black opacity-[0.60]">
            A iaculis auctor viverra integer elementum nisl quam. Lorem volutpat
            quisque.
          </p>
        </span>
      </div>
      <div className="flex flex-col items-center gap-[60px] px-[120px] py-[60px]">
        <h1 className="font-bold text-[40px] text-black">Meet Our Team</h1>
        <div className="flex gap-6">
          <span className="flex flex-col items-center gap-3">
            <img
              src={soksochetra}
              alt=""
              className="w-[250px] h-[350px] bg-[#f0f0f0] rounded-[20px] object-cover"
            />
            <h1 className="font-semibold text-[20px] text-black">
              Sok Sochetra
            </h1>
            <p className="font-normal text-[16px] text-black opacity-[0.60]">
              ITE
            </p>
          </span>
          <span className="flex flex-col items-center gap-3">
            <img
              src={seansoulong}
              alt=""
              className="w-[250px] h-[350px] bg-[#f0f0f0] rounded-[20px] object-cover"
            />
            <h1 className="font-semibold text-[20px] text-black">
              Sean Soulong
            </h1>
            <p className="font-normal text-[16px] text-black opacity-[0.60]">
              ITE
            </p>
          </span>
          <span className="flex flex-col items-center gap-3">
            <img
              src={rapnha}
              alt=""
              className="w-[250px] h-[350px] bg-[#f0f0f0] rounded-[20px] object-cover"
            />
            <h1 className="font-semibold text-[20px] text-black">Ra Panha</h1>
            <p className="font-normal text-[16px] text-black opacity-[0.60]">
              ITE
            </p>
          </span>
        </div>
      </div>
      <div className="flex px-[120px] py-[60px]">
        <img
          src="https://www.aseanbriefing.com/news/wp-content/uploads/2018/02/ASEAN-Briefing-Cambodias-Investment-Outlook-for-2018-002.jpg"
          alt=""
          className="justify-center items-end w-[600px] h-[460px] object-cover rounded-[20px]"
        />
        <div className="w-[600px] flex flex-col gap-10 px-12">
          <h1 className="font-bold text-[40px] text-black">
            Turn Your Vacation Dreams Into Reality.
          </h1>
          <p className="font-normal text-base text-black opacity-[0.60]">
            Eu id cras morbi consectetur viverra eleifend pellentesque dui.
            Senectus commodo morbi aliquet eget quis gravida. Ut vel curabitur
            ut a id tempor. Viverra non commodo vel ac aliquet. Ac euismod
            tincidunt sed quam pharetra laoreet nisl mollis vitae.
          </p>
        </div>
      </div>
      <div className="flex px-[120px] py-[30px]">
        <div className="w-[600px] flex flex-col gap-10">
          <span className="font-bold text-[40px] text-black">F.A.Q.</span>
          <div className="flex flex-col justify-between self-stretch pr-12">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 self-stretch py-2 border-b border-gray-200"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-[22px] text-black">
                    {item.question}
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {openIndex === index && (
                  <div className="pl-2 pr-4 pt-1">
                    <p className="text-[16px] text-[#6a6a6a]">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <img
          src="https://pa-11264.kxcdn.com/wp-content/uploads/2024/12/koh-ker-2.webp"
          alt=""
          className="justify-center items-end w-[600px] h-[460px] object-cover rounded-[20px]"
        />
      </div>
      <div className="flex flex-col gap-2.5 px-[120px] pt-[60px] pb-[180px]">
        <div className="justify-center items-end w-[1200px] h-[400px] object-cover rounded-[20px]">
          <div className="flex flex-col relative justify-center items-center w-full h-full bg-cover bg-center rounded-[20px] bg-[#58A6A0]">
            <img src={logobgwhite} alt="" />
            <p class="font-bold text-[40px] text-center text-white">
              Dare to Explore with Toursara{" "}
            </p>
            <div class="absolute mt-[400px] w-[920px] flex justify-between bg-white px-[60px] py-[58px] rounded-2xl shadow-lg ">
              <div class="w-[200px] h-[83px] flex flex-col items-center justify-between px-4">
                <span class="font-bold text-[40px] text-black">200k</span>
                <span class="font-normal text-[16px] text-black opacity-60">
                  Happy travelers
                </span>
              </div>

              <div class="w-[200px] h-[83px] flex flex-col items-center justify-between px-4">
                <span class="font-bold text-[40px] text-black">120</span>
                <span class="font-normal text-[16px] text-black opacity-60">
                  Destinations
                </span>
              </div>

              <div class="w-[200px] h-[83px] flex flex-col items-center justify-between px-4">
                <span class="font-bold text-[40px] text-black">224</span>
                <span class="font-normal text-[16px] text-black opacity-60 text-center">
                  Tours
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
