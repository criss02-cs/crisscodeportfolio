// icons
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaWordpress,
    FaFigma,
    FaWpforms,
    FaJava,
    FaAndroid,
} from "react-icons/fa";

import Image from "next/image";

import {
    SiNextdotjs,
    SiFramer,
    SiAdobexd,
    SiAdobephotoshop,
    SiDotnet,
    SiCsharp,
    SiBlazor,
    SiNestjs,
    SiAngular,
    SiXamarin,
    SiNativescript,
    SiIos,
    SiMacos,
    SiTypescript,
    SiTailwindcss,
} from "react-icons/si";

import Maui from '/maui-logo.svg';


//  data
const aboutData = [
    {
        title: 'skills',
        info: [
            {
                title: 'Web Development',
                icons: [
                    <FaHtml5 key={1} />,
                    <FaCss3 key={2}/>,
                    <SiTailwindcss key={3} />,
                    <FaJs key={4}/>,
                    <FaReact key={5}/>,
                    <SiNextdotjs key={6}/>,
                    <SiBlazor key={7}/>,
                    <SiNestjs key={8}/>,
                    <SiAngular key={9}/>,
                    <SiTypescript key={10}/>
                ],
                overlays: [
                    'HTML5',
                    'CSS3',
                    'Tailwind CSS',
                    'Javascript',
                    'React',
                    'NextJS',
                    'Blazor',
                    'NestJS',
                    'AngularJS',
                    'Typescript'
                ]
            },
            {
                title: 'Desktop Development',
                icons: [
                    <SiCsharp key={1} />,
                    <FaJava key={2}/>,
                    <SiMacos key={3}/>
                ],
                overlays: [
                    'C#',
                    'Java',
                    'Mac OS',
                ]
            },
            {
                title: 'Mobile Development',
                icons: [
                    <SiXamarin key={1}/>,
                    <FaReact key={2}/>,
                    <SiNativescript key={3}/>,
                    <FaAndroid key={4}/>,
                    <SiIos key={5}/>,
                    <SiTypescript key={6}/>,
                ],
                overlays: [
                    'Xamarin',
                    'React Native',
                    'NativeScript',
                    'Android',
                    'Ios',
                    'Typescript'
                ]
            }
        ],
    },
    // {
    //     title: 'awards',
    //     info: [
    //         {
    //             title: 'Webby Awards - Honoree',
    //             stage: '2011 - 2012',
    //         },
    //         {
    //             title: 'Adobe Design Achievement Awards - Finalist',
    //             stage: '2009 - 2010',
    //         },
    //     ],
    // },
    {
        title: 'experience',
        info: [
            {
                title: 'Backend Developer - Einitia Internet Solutions S.L.U',
                stage: '2021',
            },
            {
                title: 'Web Developer - GBsoftware S.p.A.',
                stage: '2022 - present',
            },
            {
                title: 'Mobile Developer - GBsoftware S.p.A.',
                stage: '2022 - present',
            },
        ],
    },
    {
        title: 'credentials',
        info: [
            {
                title: 'MongoDB for .NET Developers - MongoDB University',
                stage: '2022',
            },
            {
                title: 'Diploma Perito Informatico - I.T. Franchetti Salviani',
                stage: '2021',
            },
            {
                title: 'Laurea in informatica - Università di Camerino',
                stage: 'In corso',
            },
            {
                title: 'English certification level B1 - Cambridge Assessment',
                stage: '2022',
            },
            {
                title: 'C# 8 Programming: da Principiante a Esperto - Udemy',
                stage: '2020',
            },
            {
                title: 'Introduction to Cybersecurity - Cisco Networking Academy',
                stage: '2021',
            },
        ],
    },
];

import Avatar from "@/components/Avatar";
import Circles from "@/components/Circles";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import CountUp from 'react-countup';
import Skills from "@/components/Skills";

const About = () => {
    const [index, setIndex] = useState(0);
    return (
        <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
            <Circles />
            {/* avatar img */}
            <motion.div
                variants={fadeIn('right', 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="hidden xl:flex absolute bottom-0 -left-[370px]">
                <Avatar />
            </motion.div>
            <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
                {/* text */}
                <div className="flex-1 flex flex-col justify-center">
                    <motion.h2 className="h2"
                        variants={fadeIn('right', 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden">
                        Captivating <span className="text-accent">stories</span> birth magnificent designs.
                    </motion.h2>
                    <motion.p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
                        variants={fadeIn('right', 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden">
                        Fin da piccolo sono stato appassionato di informatica e tutto il mondo che la riguarda.
                        All&apos;età di 14 ho iniziato il mio percorso nel mondo della programmazione e da allora ho avuto modo
                        di apprendere sempre più cose e conoscere nuove persone. Tante delle mie attività sono legate alla programmazione,
                        attalmente sviluppatore web e mobile alla GBsoftware S.p.A.
                    </motion.p>
                    {/* counters */}
                    <motion.div className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
                        variants={fadeIn('right', 0.6)}
                        initial="hidden"
                        animate="show"
                        exit="hidden">
                        <div className="flex flex-1 xl:gap-x-6">
                            {/* experience */}
                            <div className="relative flex-1 after:w-[1px] after:h-full after:absolute after:top-0 after:right-0">
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <CountUp start={0} end={10} duration={5} /> +
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4]
                                    max-w-[100px]">
                                    Years of experience
                                </div>
                            </div>
                            <div className="relative flex-1 after:w-[1px] after:h-full after:absolute after:top-0 after:right-0">
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <CountUp start={0} end={250} duration={5} /> +
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4]
                                    max-w-[100px]">
                                    Satisfied clients
                                </div>
                            </div>
                            <div className="relative flex-1 after:w-[1px] after:h-full after:absolute after:top-0 after:right-0">
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <CountUp start={0} end={650} duration={5} /> +
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4]
                                    max-w-[100px]">
                                    Finished projects
                                </div>
                            </div>
                            <div className="relative flex-1">
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <CountUp start={0} end={8} duration={5} /> +
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4]
                                    max-w-[100px]">
                                    Winning awards
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                {/* info */}
                <motion.div
                    variants={fadeIn('left', 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
                    <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
                        {aboutData.map((item, itemIndex) => {
                            return (
                                <div key={itemIndex}
                                    className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} 
                                    cursor-pointer capitalize xl:text-lg relative after:w-8
                                    after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                                    onClick={() => setIndex(itemIndex)}>
                                    {item.title}
                                </div>
                            )
                        })}
                    </div>
                    <div className="py-2 xl:py-6 flex flex-col gap-y-2
                        xl:gap-y-4 items-center xl:items-start">
                        {
                            aboutData[index].info.map((item, itemIndex) => {
                                return (
                                    <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2
                                        items-center text-white/60">
                                        {/* title */}
                                        <div className="font-light mb-2 md:mb-0">{item.title}</div>
                                        <div className="hidden md:flex">-</div>
                                        <div>{(item as { title: string, stage: string }).stage}</div>
                                        {/* icons */}
                                        <div className="flex gap-x-4">
                                            {(item as { title: string, icons?: JSX.Element[], overlays: string[] }).icons?.map((icon, itemIndex) => {
                                                const tooltip = (item as { title: string, icons?: JSX.Element[], overlays: string[] }).overlays[itemIndex];
                                                return (
                                                    <div className="relative flex group" key={itemIndex}>
                                                        <div className="text-2xl text-white" >{icon}</div>
                                                        {/* tooltip */}
                                                        <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                                                            <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]
                                                                    leading-none font-semibold capitalize">
                                                                <div className="text-[12px]">
                                                                    {tooltip}
                                                                </div>
                                                                {/* triangle */}
                                                                <div className="border-solid border-l-white border-l-8
                                                                    border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={`h-[400px] hidden ${index === 0 ? 'md:flex' : ''} sm:flex-row items-center justify-between `}>
                        <div className="ml-20">
                            <Skills />
                        </div>
                        <div className="mr-20">
                            <Skills />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
