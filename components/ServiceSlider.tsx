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

import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

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
  {
    icon: <RxMobile />,
    title: "Mobile Development",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    icon: <RxMobile />,
    title: "Mobile Development",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    icon: <RxMobile />,
    title: "Mobile Development",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    icon: <RxMobile />,
    title: "Mobile Development",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    icon: <RxMobile />,
    title: "Mobile Development",
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
                    flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg[rgba(89,6,169,0.15)]
                    transition-all duration-300">
                    {/* icon */}
                    <div className="text-4xl text-accent mb-4">{item.icon}</div>
                    {/* title & desc */}
                    <div className="mb-8">
                        <div className="mb-2 text-lg">{item.title}</div>
                        <p className="max-w-[350px] leading-normal">{item.description}</p>
                    </div>
                    {/* arrow */}
                    <div className="text-3xl">
                        <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
                    </div>
                </div>
            </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
