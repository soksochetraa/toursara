import { useState, useEffect } from "react";
import {
  Ship,
  MountainSnow,
  Bus,
  CalendarRange,
  Castle,
  BedDouble,
} from "lucide-react";

const cambodiaImages = [
  "https://static.toiimg.com/photo/54443614.cms",
  "https://lp-cms-production.imgix.net/2025-01/Cambodia-Koh-Rong-r------Aleksandar-Todorovic-shutterstockRF174688277-crop.jpg?auto=compress&format=auto&fit=crop&q=50&w=1200&h=800",
  "https://cdn.adventure-life.com/30/16/5/j86k3azq/1300x820.webp",
  "https://www.v-20.org/wp-content/uploads/2020/10/shutterstock_capital_cambodia_phnom-penh-s-min.jpeg",
];

function AboutCambodia() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % cambodiaImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-10 py-[50px]">
      <div className="w-[1200px] flex flex-col justify-between items-start gap-[20px]">
        <h1 className="w-full font-bold text-[64px] text-center">
          Welcome to <span className="text-[#58A6A0]">Cambodia</span>
        </h1>
        <p className="text-[28px] text-black">
          <b>Cambodia</b> is a captivating destination famous for its ancient
          temples like <b>Angkor Wat</b>, stunning natural landscapes, warm
          hospitality, vibrant festivals, and delicious cuisine. Whether you're
          seeking cultural heritage, relaxation, or adventure—Cambodia has it
          all.
        </p>
      </div>
      <div className="flex px-[120px] py-[60px]">
        <img
          src="https://images.blacktomato.com/2024/09/Angkor-Wat-Cambodia.jpg?auto=compress%2Cformat&ixlib=php-3.3.1&q=82&s=22fe2093aad59c41e03e6262d0b5c710"
          alt="Explore Cambodia"
          className="w-[600px] h-[460px] object-cover rounded-[20px]"
        />
        <div className="w-[600px] flex flex-col gap-10 px-12">
          <h1 className="font-bold text-[40px] text-black">
            Discover the Kingdom of Wonder
          </h1>
          <p className="font-normal text-base text-black opacity-[0.70]">
            From the bustling streets of Phnom Penh to the serene temples of
            Siem Reap, Cambodia invites you on a journey through ancient history
            and authentic traditions. Embrace the charm of floating villages,
            untouched beaches, and sacred mountains.
          </p>
        </div>
      </div>

      <div className="w-[1200px] flex items-start gap-[248px]">
        <h1 className="w-[394px] font-bold text-[40px] text-black">
          Dare to Explore Cambodia with Us
        </h1>
        <p className="w-[523px] font-normal text-[16px] text-black opacity-[0.70]">
          Let us guide you through the best Cambodia has to offer—from ancient
          ruins to modern experiences. Your unforgettable adventure starts here.
        </p>
      </div>

      <div className="w-[1200px] flex gap-12">
        <span className="flex flex-col gap-4 grow">
          <Ship size={64} />
          <h2 className="font-bold text-[24px] text-start text-black">
            Island Adventures
          </h2>
          <p className="w-[364.22px] font-normal text-[16px] text-black opacity-[0.60]">
            Visit Koh Rong and other islands for white sands, turquoise
            waters,and peaceful getaways.
          </p>
        </span>
        <span className="flex flex-col gap-4 grow">
          <MountainSnow size={64} />
          <h2 className="font-bold text-[24px] text-start text-black">
            Sacred Mountains
          </h2>
          <p className="w-[365.04px] font-normal text-[16px] text-black opacity-[0.60]">
            Hike through Phnom Kulen or Bokor for scenic views and spiritual
            sites.
          </p>
        </span>
        <span className="flex flex-col gap-4 grow">
          <Bus size={64} />
          <h2 className="font-bold text-[24px] text-start text-black">
            City to Village Tours
          </h2>
          <p className="font-normal text-[16px] text-black opacity-[0.60]">
            Ride with ease across Cambodia's cities, towns, and rural charm.
          </p>
        </span>
      </div>
      <div className="w-[1200px] flex gap-12">
        <span className="flex flex-col gap-4 grow">
          <CalendarRange size={64} />
          <h2 className="font-bold text-[24px] text-start text-black">
            Festivals & Events
          </h2>
          <p className="font-normal text-[16px] text-black opacity-[0.60]">
            Experience Khmer New Year, Water Festival, and traditional
            celebrations.
          </p>
        </span>
        <span className="flex flex-col gap-4 grow">
          <Castle size={64} />
          <h2 className="font-bold text-[24px] text-start text-black">
            Ancient Temples
          </h2>
          <p className="font-normal text-[16px] text-black opacity-[0.60]">
            Discover Angkor Wat, Bayon, Ta Prohm, and other majestic temple
            ruins.
          </p>
        </span>
        <span className="flex flex-col gap-4 grow">
          <BedDouble size={64} />
          <h2 className="font-bold text-[24px] text-start text-black">Stay</h2>
          <p className="font-normal text-[16px] text-black opacity-[0.60]">
            Enjoy stays from luxury resorts to charming homestays across the
            country.
          </p>
        </span>
      </div>
      <div className="relative w-[1200px] h-[600px] rounded-[20px] overflow-hidden">
        {cambodiaImages.map((img, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center flex justify-center items-center transition-opacity duration-1000 ease-in-out ${
              index === currentImgIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
      </div>
    </section>
  );
}

export default AboutCambodia;
