import Image from 'next/image';
import { Cat } from 'lucide-react';
import Link from 'next/link';

export function NavBar(){
    return(
        <header className="p-4 bg-white border-b-4 border-[#7163b0] flex items-center justify-between gap-3">
            <Link className='flex justify-between text-[#ff8d46] text-[14px] font-semibold' href={'/'}>
                <Cat color='#7163b0'/>
                <h2 className="">Pet Patinhas</h2>
            </Link>
            <nav className="flex justify-between gap-2 text-[14px]">
                <Link className='box-border h-8 w-16 text-[14px] bg-white border-2 rounded border-[#ff8d46] flex items-center justify-center mouse-pointer hover:text-white hover:bg-[#ff8d46] ' href={''}>Adotar</Link>
                <Link className='box-border h-8 w-16 text-[14px] bg-white border-2 rounded border-[#7163b0] flex items-center justify-center mouse-pointer hover:text-white hover:bg-[#7163b0]' href={''}>Entrar</Link>
            </nav>
        </header>
    );
}