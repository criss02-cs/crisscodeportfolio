import Image from "next/image";
import { useEffect, useRef } from "react";
const data: { title: string, image: string }[] = [
    {
        title: 'Net Core',
        image: '/net_core.png'
    },
    {
        title: 'Net Framework',
        image: '/net_framework.png'
    },
    {
        title: 'Maui',
        image: '/dotnet_bot.svg',
    },
    {
        title: 'Blazor',
        image: '/blazor.png'
    }
]


const Skills = () => {
    const centralNodeRef = useRef<HTMLDivElement>(null);
    const nodeRefs = data.map(() => useRef<HTMLDivElement>(null));
    const linesRefs = data.map(() => useRef<HTMLDivElement>(null));
    const minAngle = (lenght: number) => 360 / lenght;

    const getAngle = (index: number, minAngle = 45) => {
        let angle = 180;
        for (let i = 0; i < index; i++) {
            angle += minAngle;
        }
        return angle;
    }

    useEffect(() => {
        const centralNode = centralNodeRef.current;
        if (!centralNode) return;
        const nodes = nodeRefs.map(x => x.current);
        const lines = linesRefs.map(x => x.current);
        nodes.forEach((node, index) => {
            const line = lines[index];
            if (node && line) {
                const angle = minAngle(data.length);
                const centralNodeRect = centralNode.getBoundingClientRect();
                const nodeRect = node.getBoundingClientRect();
                const dx = nodeRect.left + nodeRect.width / 2 - (centralNodeRect.left + centralNodeRect.width / 2);
                const dy = nodeRect.top + nodeRect.height / 2 - (centralNodeRect.top + centralNodeRect.height / 2);
                const distance = Math.sqrt(dx * dx + dy * dy);
                const realAngle = getAngle(index, angle);
                line.style.height = `${distance}px`;
                line.style.transform = `translate(-50%, 0) rotate(${realAngle}deg)`;
                line.style.left = `${centralNodeRect.width / 2}px`;
                line.style.top = `${centralNodeRect.height / 2}px`;
            }
        })
    }, []);

    return (
        <div className="relative w-[50px] h-[50px] flex flex-wrap justify-center content-center row-[1]" id="centralNode"
            ref={centralNodeRef}>
            {
                data.map((item, index) => {
                    return (
                        <div className="absolute w-[2px] bg-white origin-[top_center] overflow-hidden" id={`line-${index}`}
                            ref={linesRefs[index]} key={index}></div>
                    )
                })
            }
            <Image src={'/net.png'} height={50} width={50} alt="" className="border-2 border-solid border-black rounded-full z-[1]" />
            {
                data.map((item, index) => {
                    let translate = '';
                    let animation = '';
                    switch (index) {
                        case 0:
                            translate = 'translate-x-[0%] -translate-y-[150%]';
                            animation = 'animate-[bounce_3s_ease-in-out_infinite]';
                            break;
                        case 1:
                            translate = 'translate-x-[150%] translate-y-[0%]';
                            animation = 'animate-[bounce-horizontal-inverse_3s_ease-in-out_infinite]';
                            break;
                        case 2:
                            translate = 'translate-x-[0%] translate-y-[150%]';
                            animation = 'animate-[bounce-inverse_3s_ease-in-out_infinite]';
                            break;
                        case 3:
                            translate = '-translate-x-[150%] translate-y-[0%]';
                            animation = 'animate-[bounce-horizontal_3s_ease-in-out_infinite]';
                            break;
                    }
                    return (
                        <div key={index} className={`w-[50px] h-[50px] ${translate ?? ''} absolute`}>
                            <div className={`w-[50px] h-[50px] text-white text-[18px] rounded-[50%]
                            flex justify-center items-center origin-[50%_50%] ${animation ?? ''} duration-[500ms] bg-white
                                relative group`} id={`node-${index}`}
                                ref={nodeRefs[index]}>
                                <Image src={item.image} width={45} height={45} alt="" />
                                {/* tooltip */}
                                <div className={`absolute pr-14 ${index === 1 ? 'left-14' : 'right-0'} hidden xl:group-hover:flex z-[10]`}>
                                    <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]
                                    leading-none font-semibold capitalize">
                                        <div className="text-[12px]">
                                            {item.title}
                                        </div>
                                        {/* triangle */}
                                        <div className={`border-solid border-${index === 1 ? 'r' : 'l'}-white border-${index === 1 ? 'r' : 'l'}-8
                                        border-y-transparent border-y-[6px] border-${index === 1 ? 'l' : 'r'}-0 absolute -${index === 1 ? 'left' : 'right'}-2`}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    )
};

export default Skills;