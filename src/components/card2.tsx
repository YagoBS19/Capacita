import Image, { StaticImageData } from "next/image";

interface Card2Props {
    title: string;
    subtitle: string;
    img: StaticImageData;
};

export function Card2({title, subtitle, img} :Card2Props){
    return (
        <div className = 'grid justify-items-center gap-4 text-center break-words'>
            <Image src = {img} alt = {''} width = {100}/>
            <div className = 'grid gap-2'>
                <span className = 'text-[20px] font-medium'>{title}</span>
                <span className = 'text-[16px]'>{subtitle}</span>
            </div>
        </div>
    )
};