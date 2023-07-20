import Image, {StaticImageData} from 'next/image';

interface BannerProps {
    img: StaticImageData;
};

export function Banner({img}:BannerProps){
    return(
        <Image src = {img} alt = {''} width = {715} height = {300} className = 'rounded-xl'/>
    );
}