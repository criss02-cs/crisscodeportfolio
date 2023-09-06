import ServiceSlider from "@/components/ServiceSlider";
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { RxDesktop, RxMobile } from "react-icons/rx";
import { CgWebsite } from 'react-icons/cg';

export const serviceData = [
    {
        icon: <RxDesktop />,
        title: 'Desktop Development',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' 
    },
    {
        icon: <CgWebsite />,
        title: 'Web Development',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' 
    },
    {
        icon: <RxMobile />,
        title: 'Mobile Development',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' 
    },
]

const Services = () => {
    return (
        <div className="h-full bg-primary/30 py-36 flex items-center">
            <Circles />
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-x-8">
                    {/* text */}
                    <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4
                        xl:mb-0">
                        <h2 className="h2 xl:mt-8">
                            My services <span className="text-accent">.</span>
                        </h2>
                        <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quidem enim nobis voluptatum fuga vitae commodi quo doloribus
                        </p>
                    </div>
                    {/* slider */}
                    <ServiceSlider />
                </div>
            </div>
            <Bulb />
        </div>
    );
};

export default Services;
