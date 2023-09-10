// icons
import { CgWebsite } from "react-icons/cg";
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxMobile,
  RxArrowTopRight,
} from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Pagination } from "swiper/modules";

// data
export const serviceData = [
  {
    icon: <RxDesktop />,
    title: "Desktop Development",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    icon: <CgWebsite />,
    title: "Web Development",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    icon: <RxMobile />,
    title: "Mobile Development",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
            <SwiperSlide key={index}>
                <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8
                    flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer">
                    {/* icon */}
                    <div>{item.icon}</div>
                    {/* title & desc */}
                    <div>
                        <div>{item.title}</div>
                        <p>{item.description}</p>
                    </div>
                    {/* arrow */}
                    <div className="text-3xl">
                        <RxArrowTopRight />
                    </div>
                </div>
            </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
