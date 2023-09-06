import Image from "next/image";
import { FC } from "react";



const Avatar: FC = () => {
    return (
        <div className="hidden xl:flex xl:max-w-none">
            <Image src={'/avatar.png'} width={737} height={678} alt=""
                className="translate-z-0 w-full h-full" />
        </div>
    );
};

export default Avatar;
