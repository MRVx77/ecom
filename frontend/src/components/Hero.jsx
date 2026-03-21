import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";
import { Link } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Hero = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHeroSlides = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/hero/list");
      if (data.success) {
        setSlides(data.heroes);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHeroSlides();
  }, []);

  if (loading) {
    return (
      <div className="h-[300px] flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (slides.length === 0) return null;

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop={true}
      className="border border-gray-300 h-[650px] sm:h-[500px]"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide._id}>
          <div className="flex flex-col-reverse sm:flex-row h-full">
            {/* Left Content */}
            <div className="w-full sm:w-1/2 flex items-center justify-center h-full py-6 sm:py-12 px-4">
              <div className="text-[#414141] text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="w-10 h-0.5 bg-[#414141]" />
                  <p className="text-sm font-medium">{slide.subtitle}</p>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-5xl prata-regular py-1">
                  {slide.title}
                </h1>

                <Link
                  to="/collection" // coming from backend
                  className="inline-block mt-4 px-7 py-2 border border-black hover:bg-black hover:text-white transition"
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full sm:w-1/2 h-full sm:h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
