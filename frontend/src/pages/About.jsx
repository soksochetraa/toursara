import FrameImage from "../assets/images/frame_about_us.jpg";
import Button from "../components/buttons/ButtonGetStart";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <section className="w-full flex justify-center  items-center">
      <div className="w-[1440px] flex justify-center items-center gap-[150px] px-[45px] py-[50px]">
        <div
          className="w-[566px] h-[611px] bg-cover bg-no-repeat bg-center flex justify-center items-center"
          style={{
            backgroundImage: `url(${FrameImage})`,
          }}
        >
          <span
            className="w-[500px] h-[500px] bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(https://img.freepik.com/free-vector/flat-design-illustration-web-developers_23-2148817995.jpg?ga=GA1.1.495992702.1746376184&semt=ais_hybrid&w=740)`,
            }}
          ></span>
        </div>
        <div className="w-[550px] h-[611px] flex flex-col gap-10">
          <h1 className="font-bold text-[64px] capitalize text-black">
            About Us
          </h1>
          <p class="font-normal text-[16px] leading-[29px] text-[#505050]">
            We specialize in developing high-quality web applications, booking
            platforms, and tourism management systems, ensuring that businesses
            and travelers can connect effortlessly. With cutting-edge
            technologies and a user-centric approach, we craft solutions that
            drive growth, improve efficiency, and elevate the tourism experience
            across Cambodia.
          </p>
          <p class="font-normal text-[16px] leading-[29px] text-[#505050]">
            We specialize in developing high-quality web applications, booking
            platforms, and tourism management systems, ensuring that businesses
            and travelers can connect effortlessly. With cutting-edge
            technologies and a user-centric approach, we craft solutions that
            drive growth, improve efficiency, and elevate the tourism experience
            across Cambodia.
          </p>
          <Button
            text="Contact Us"
            ariaLabel="Contact Button"
            onClick={() => navigate("/contact")}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
