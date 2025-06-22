import { Phone, MapPin, Mail } from "lucide-react";
import bgbanner from "../public/images/contact/bg_banner.svg";
import GoogleMapComponent from "../components/cards/GoogleMapComponent";

function Contact() {
  const activeDestination = {
    lat: 11.5688868,
    lng: 104.893155,
    title: "Institute of Foreign Languages (IFL)",
    province: "Phnom Penh",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Institute_of_Foreign_Languages_campus.jpg/800px-Institute_of_Foreign_Languages_campus.jpg",
  };

  return (
    <section className="flex flex-col items-center justify-center gap-10 py-[50px]">
      <section className="w-[1200px] bg-[#58A6A0] h-80 flex justify-center items-center gap-2.5 object-cover rounded-[20px]">
        <h1 className="font-bold text-[60px] text-white">Contact Us</h1>
      </section>

      <div className="w-[1200px] flex justify-between px-20">
        <div className="flex flex-col items-center gap-4">
          <Phone size={40} />
          <h1 className="font-semibold text-[28px] text-center capitalize text-black">
            Phone
          </h1>
          <p className="font-normal text-[16px] capitalize text-black">
            (358) 707-4989
          </p>
          <p className="font-normal text-[16px] capitalize text-black">
            (358) 707-4989
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <MapPin size={40} />
          <h1 className="font-semibold text-[28px] text-center capitalize text-black">
            Address
          </h1>
          <p className="font-normal text-[16px] capitalize text-black">
            7914 Lees Creek St. Dayton, OH 45420
          </p>
          <p className="font-normal text-[16px] capitalize text-black">
            8911 Tanglewood Ave. Capitol Heights, MD 20743
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Mail size={40} />
          <h1 className="font-semibold text-[28px] text-center capitalize text-black">
            Email
          </h1>
          <p className="font-normal text-[16px] capitalize text-black">
            toursara@gmail.com
          </p>
          <p className="font-normal text-[16px] capitalize text-black">
            info.toursara@gmail.com
          </p>
        </div>
      </div>

      <section className="flex gap-12 px-[120px] py-[20px]">
        <div
          className="flex justify-center items-end w-[368px] h-[602px] object-cover rounded-[20px] py-[50px]"
          style={{ backgroundImage: `url(${bgbanner})` }}
        >
          <div className="flex flex-col items-center gap-10">
            <p class="font-normal text-[16px] text-center capitalize text-white">
              Don't know <br /> which destination to choose?
            </p>
            <span class="font-semibold text-[26px] text-center text-white">
              We Can help you
            </span>
          </div>
        </div>

        <form className="flex flex-col gap-7.5">
          <div className="flex flex-col gap-5">
            <span className="font-bold text-[40px] text-black">
              Contact Us For Any Questions
            </span>
            <span className="font-normal text-base text-black opacity-[0.60]">
              Eu id cras morbi consectetur viverra eleifend pellentesque dui.
            </span>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex gap-12">
              <div className="flex flex-col gap-[18px]">
                <label
                  htmlFor="fullName"
                  className="font-medium text-[18px] capitalize text-black"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  className="w-[368px] h-[50px] border border-solid border-black opacity-[0.60] px-4"
                  required
                />
              </div>
              <div className="flex flex-col gap-[18px]">
                <label
                  htmlFor="phone"
                  className="font-medium text-[18px] capitalize text-black"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-[368px] h-[50px] border border-solid border-black opacity-[0.60] px-4"
                  required
                />
              </div>
            </div>

            <div className="flex gap-12">
              <div className="flex flex-col gap-[18px]">
                <label
                  htmlFor="email"
                  className="font-medium text-[18px] capitalize text-black"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-[368px] h-[50px] border border-solid border-black opacity-[0.60] px-4"
                  required
                />
              </div>
              <div className="flex flex-col gap-[18px]">
                <label
                  htmlFor="subject"
                  className="font-medium text-[18px] capitalize text-black"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="w-[368px] h-[50px] border border-solid border-black opacity-[0.60] px-4"
                />
              </div>
            </div>

            <div className="flex flex-col gap-[18px] self-stretch">
              <label
                htmlFor="message"
                className="font-medium text-[18px] capitalize text-black"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="self-stretch h-[92px] border border-solid border-black opacity-[0.60] px-4 py-2 resize-none"
                required
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="w-[784px] h-[60px] flex justify-center items-center gap-2 bg-[#58a6a0] px-10 rounded-xl cursor-pointer hover:bg-[#4f9a8e] transition-colors duration-300"
          >
            <span className="font-medium text-[16px] text-white">
              Send Message
            </span>
          </button>
        </form>
      </section>
      <div className="mb-10 w-[1200px]">
        <GoogleMapComponent
          activeDestination={activeDestination}
          width="1200px"
          height="360px"
        />
      </div>
    </section>
  );
}

export default Contact;
