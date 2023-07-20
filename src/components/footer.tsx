import Image from 'next/image';
import Link from 'next/link';
import { Cat } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { UserSquare2 } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';

export function Footer(){
    return(
        <footer className = 'flex justify-between items-start p-20 bg-[#7163b0]'>
            <div className = 'flex-col items-start -ml-16 lg:ml-0 -mt-12 lg:-mt-8'>
                <Link className = 'flex text-[#ff8d46] text-[15px] lg:text-[24px] font-semibold' href={'/'}>
                    <Cat className = 'lg:h-[35px] lg:w-[35px]' size={20} color='#ff8d46'/>
                    <h2>Pet Patinhas</h2>
                </Link>
                <span className = 'text-[11px] lg:text-[20px] text-white'>Texto sobre a loja</span>
                <div className = 'flex justify-start gap-2 mt-2'>
                    <Link href = {'/'}>
                    <Instagram className = 'lg:h-[30px] lg:w-[30px]' color='white' size={20} href = {'/'}/>
                    </Link>
                    <Link href = {'/'}>
                    <Facebook className = 'lg:h-[30px] lg:w-[30px]' color='white' size={20} href = {'/'}/>
                    </Link>
                </div>
            </div>
            <div className = 'flex flex-col justify-between items-end -mr-16 lg:mr-0 -mt-12 lg:-mt-8 gap-3 lg:gap-6'>
                <address className = 'flex justify-between gap-1 text-[11px] lg:text-[20px] text-[#ff8d46] font-medium'>
                    <MapPin className = 'lg:h-[30px] lg:w-[30px]' color = '#ff8d46' size=  {20}/>
                    <Link href = {'/'}>Rua Tchurusbango Tchurusbago</Link>
                </address>
                <div className='flex justify-between gap-1 text-[11px] lg:text-[20px] text-[#ff8d46] font-medium'>
                    <UserSquare2 className = 'lg:h-[30px] lg:w-[30px]' color = '#ff8d46' size = {20}/>
                    <span>Desenvolvido por Yago Bastos</span>
                </div>
            </div>
        </footer>
    );
}