import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CardProps {
    title: string;
    subtitle: string;
    img: StaticImageData;
};

export function Card({title, img, subtitle} :CardProps){
    return (
        <div className = 'grid justify-item-center text-center break-words'>
            <Image src = {img} alt = {''} width = {260}/>
            <div className = 'grid place-items-center justify-self-center gap-2'>
                <h1 className = 'text-[20px] font-medium'>{title}</h1>
                <Link className = 'grid place-items-center h-12 w-32 bg-[#a291ee] hover:bg-[#e0854c] rounded-full text-black hover:text-white font-medium text-[14px]' href = {'/'}>{subtitle}</Link>
            </div>
        </div>
    )
};