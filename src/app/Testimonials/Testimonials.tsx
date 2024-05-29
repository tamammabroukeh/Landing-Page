// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules

import { Autoplay, Parallax, Pagination, Navigation } from "swiper/modules";
import { Image } from "../../components";
import { testimonialsContent } from "../../data/data";
export default function Testimonials() {
  return (
    <div className="bg-slate-200">
      <div className="flex  flex-col gap-9 my-9 px-6 md:px:24 ">
        <div className="text-4xl font-bold text-center text-balance text-gray-800">
          What our Clients Says About us
        </div>
        <Swiper
          style={{
            width: "100%",
            height: "400px",
            padding: "70px 50px",
            margin: "5px 0",
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 5 },
            400: { slidesPerView: 1, spaceBetween: 15 },
            600: { slidesPerView: 1.5, spaceBetween: 15 },
            1200: { slidesPerView: 3, spaceBetween: 30 },
            1536: { slidesPerView: 3, spaceBetween: 25 },
          }}
          centeredSlides={true}
          initialSlide={3}
          parallax={true}
          navigation={true}
          modules={[Autoplay, Parallax, Pagination, Navigation]}
          className="clients items-end"
        >
          {testimonialsContent.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                className="transition-all duration-500"
              >
                <div className="card flex flex-col justify-center items-center gap-3 border bg-white shadow-lg p-3">
                  <div className="text-center  text-teal-700">
                    <item.icon className="w-20 h-20" />
                  </div>
                  <div className="text-sm text-center text-gray-600">
                    {item.description}
                  </div>

                  <div className="w-32 h-1 rounded bg-teal-700"></div>
                  <div className="w-16 h-16 rounded-full bg-gray-300">
                    <Image
                      altText={item.name}
                      ImageURL={item.image}
                      classes="rounded-full"
                    />
                  </div>
                  <div className="text-sm">{item.name}</div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
