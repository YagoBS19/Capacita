import Image from 'next/image';
import { Cat } from 'lucide-react';
import Link from 'next/link';

export function NavBar(){
    return(
        <header className = 'flex items-center justify-between gap-3 p-4 bg-white border-b-4 border-[#7163b0]'>
            <Link className = 'flex justify-between text-[#ff8d46] text-[18px] lg:text-[26px] font-semibold' href = {'/'}>
                <Cat className= 'lg:h-[35px] lg:w-[35px]' color='#ff8d46'/>
                <h2>Pet Patinhas</h2>
            </Link>
            <nav className = 'flex justify-between gap-2 lg:gap-6 text-[14px] lg:text-[20px]'>
                <Link className = 'box-border h-8 w-16 lg:h-12 lg:w-20 bg-white border-2 rounded border-[#ff8d46] flex items-center justify-center hover:text-white hover:bg-[#ff8d46]' href = {'/'}>Adotar</Link>
                <Link className = 'box-border h-8 w-16 lg:h-12 lg:w-20 bg-white border-2 rounded border-[#7163b0] flex items-center justify-center hover:text-white hover:bg-[#7163b0]' href = {'/'}>Entrar</Link>
            </nav>
        </header>
    );
}