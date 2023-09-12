import Link from "next/link";
import {
    RiYoutubeLine,
    RiInstagramLine,
    RiGithubLine,
    RiTwitterLine
} from 'react-icons/ri'

const Socials = () => {
    return (
        <div className="flex items-center gap-x-5 text-lg">
            <Link href={'https://www.instagram.com/criss02.cs/'} className="hover:text-accent transition-all duration-300">
                <RiInstagramLine />
            </Link>
            <Link href={'https://github.com/criss02-cs'} className="hover:text-accent transition-all duration-300">
                <RiGithubLine />
            </Link>
            <Link href={'https://www.x.com/crissss02cs'} className="hover:text-accent transition-all duration-300">
                <RiTwitterLine />
            </Link>
        </div>
    );
};

export default Socials;
