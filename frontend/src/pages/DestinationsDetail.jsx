import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SmallMap from "../components/cards/SmallMap";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home02Icon,
  ArrowRight01Icon,
  PinLocation03Icon,
  StarIcon,
} from "@hugeicons/core-free-icons";

function DestinationsDetail() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(
    "https://lp-cms-production.imgix.net/2022-03/Cambodia%20Siem%20Reap%20%C2%A9%20Matteo%20Colombo%20GettyImages-1304987816.jpg?w=1095&fit=crop&crop=faces%2Cedges&auto=format&q=75"
  );
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  const images = [
    "https://lp-cms-production.imgix.net/2022-03/Cambodia%20Siem%20Reap%20%C2%A9%20Matteo%20Colombo%20GettyImages-1304987816.jpg?w=1095&fit=crop&crop=faces%2Cedges&auto=format&q=75",
    "https://images.squarespace-cdn.com/content/v1/54930d4ae4b018401d7b66f4/1472730432571-U4G41940R1RNDZPP4M1S/20160828-DSC01698.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSijq6qra2giMOup8_fQwpby-5ak_l0txl7hCGZhrHkUii0047fAUmoiQ-EpUo_8ZaQPgA&usqp=CAU",
    "https://withlocals-com-res.cloudinary.com/image/upload/w_412,h_290,c_fill,g_auto,q_auto,dpr_3.0,f_auto/657ebebb96d93ca77a5b697364ef7348",
    "https://cdn.britannica.com/49/94449-050-ECB0E7C2/Angkor-Wat-temple-complex-Camb.jpg",
    "https://smarthistory.org/wp-content/uploads/2024/10/AngkorWat.jpg",
  ];

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = `21da8d1db1e7b1ca184c222978b3316b`;
        const city = "Siem Reap";
        const weatherRes = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        const forecastRes = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
        );
        const weatherData = await weatherRes.json();
        const forecastData = await forecastRes.json();
        setWeather(weatherData);
        const daily = [];
        const dates = new Set();
        for (const entry of forecastData.list) {
          const date = entry.dt_txt.split(" ")[0];
          if (!dates.has(date)) {
            dates.add(date);
            daily.push(entry);
          }
          if (daily.length === 3) break;
        }
        setForecast(daily);
      } catch (err) {
        console.error(err);
      }
    };

    fetchWeather();
  }, []);

  return (
    <section className="w-full h-auto flex flex-col items-center justify-start gap-5pt-10 pb-20">
      <div className="w-[1170px] flex items-center gap-2.5">
        <HugeiconsIcon icon={Home02Icon} />
        <p
          onClick={() => navigate("/")}
          className="text-[18px] cursor-pointer text-[#444]"
        >
          Home
        </p>
        <HugeiconsIcon icon={ArrowRight01Icon} />
        <p
          onClick={(e) =>
            navigate("/explore", {
              state: { search: e.target.textContent, scrollToSearch: true },
            })
          }
          className="text-[18px] cursor-pointer text-[#444]"
        >
          Siem Reap
        </p>
        <HugeiconsIcon icon={ArrowRight01Icon} />
        <p
          onClick={(e) =>
            navigate("/explore", {
              state: { search: e.target.textContent, scrollToSearch: true },
            })
          }
          className="text-[18px] cursor-pointer text-[#444]"
        >
          Angkor Wat
        </p>
      </div>

      <section className="w-[1170px] h-auto flex items-start justify-around gap-[20px] bg-white">
        <div className="bg-white flex flex-col items-center justify-between gap-2.5">
          <h2 className="w-[770px] font-bold text-[36px] text-[#1c2b38]">
            Angkor Wat Temple.
          </h2>

          <div className="w-[770px] flex items-center justify-between mb-5">
            <div className="flex items-center gap-2.5">
              <HugeiconsIcon color="#ef3a45" icon={PinLocation03Icon} />
              <p className="text-[18px] font-semibold text-[#ef3a45]">
                Siem Reap
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <HugeiconsIcon
                    key={i}
                    size={20}
                    color="#FFA432"
                    icon={StarIcon}
                  />
                ))}
              </div>
              <p className="text-[18px] text-[#778088]">(348 reviews)</p>
            </div>
          </div>

          <div className="w-[770px] flex flex-col items-center gap-4">
            <img
              src={selectedImage}
              alt="Angkor Wat"
              className="rounded-[4px] object-cover w-[770px] h-[500px]"
            />
            <div className="flex gap-4 overflow-x-auto">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  onClick={() => setSelectedImage(image)}
                  className={`w-[115px] h-[85px] rounded-[4px] cursor-pointer object-cover ${
                    selectedImage === image ? "border-3 border-red-500" : ""
                  }`}
                />
              ))}
            </div>
          </div>

          <p className="w-[770px] text-[16px] text-[#222] leading-7 mt-4">
            Angkor Wat is a temple complex in Cambodia and one of the largest
            religious monuments in the world. Originally constructed as a Hindu
            temple dedicated to the god Vishnu, it was gradually transformed
            into a Buddhist temple towards the end of the 12th century. The
            temple is at the top of the high classical style of Khmer
            architecture. It has become a symbol of Cambodia, appearing on its
            national flag, and is the country's prime attraction for visitors.
          </p>

          <SmallMap
            width="770px"
            height="540px"
            borderRadius="15px"
            lat={11.568770435370498}
            lng={104.85263287431638}
            title="Angkor Wat"
            province="Siem Reap, Cambodia"
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/20171126_Angkor_Wat_4712_DxO.jpg/500px-20171126_Angkor_Wat_4712_DxO.jpg"
          />
        </div>

        <div className="flex flex-col gap-4 w-[350px]">
          {weather && (
            <div className="bg-white rounded-[4px] shadow-lg p-4 w-full">
              <h3 className="text-[20px] font-bold mb-2 text-[#1c2b38]">
                Current Weather
              </h3>
              <p className="text-[#ef3a45] font-semibold">{weather.name}</p>
              <p className="text-[16px] text-[#444]">
                {weather.weather[0].description},{" "}
                {Math.round(weather.main.temp)}°C
              </p>
              <p className="text-[14px] text-[#666]">
                Humidity: {weather.main.humidity}%
              </p>
              <p className="text-[14px] text-[#666]">
                Wind: {weather.wind.speed} m/s
              </p>

              <div className="mt-4">
                <h4 className="text-[18px] font-semibold mb-1 text-[#1c2b38]">
                  3-Day Forecast
                </h4>
                {forecast.map((day, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between text-sm text-[#444] mb-1"
                  >
                    <span>
                      {new Date(day.dt_txt).toLocaleDateString(undefined, {
                        weekday: "short",
                      })}
                    </span>
                    <span>{Math.round(day.main.temp)}°C</span>
                    <span>{day.weather[0].main}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </section>
  );
}

export default DestinationsDetail;
