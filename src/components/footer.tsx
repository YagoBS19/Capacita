import Image from 'next/image';
import { Cat } from 'lucide-react';
import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';

export function Footer(){
    return(
        <footer className="p-20 bg-[#7163b0] absolute inset-x-0 bottom-0 flex justify-between items-start">
            <div className='flex-col items-start -ml-16 -mt-12'>
                <Link className='flex gap-1 text-[#ff8d46] text-[14px] font-semibold' href={'/'}>
                    <Cat color='#ff8d46'/>
                    <h2>Pet Patinhas</h2>
                </Link>
                <span className='text-[12px] text-white'>Texto sobre a loja</span>
                <div className='flex justify-start gap-2 mt-2'>
                    <Instagram color='white' href={'/'}/>
                    <Facebook color='white' href={'/'}/>
                </div>
            </div>
            <div className='flex flex-col justify-between items-end -mr-16 -mt-12 gap-3'>
                <address className='text-[12px] text-[#ff8d46] font-semibold]'>Rua Tchurusbango Tchurusbago</address>
                <span className='text-[12px] text-[#ff8d46] font-semibold]'>Desenvolvido por Yago Bastos</span>
            </div>
        </footer>
    );
}