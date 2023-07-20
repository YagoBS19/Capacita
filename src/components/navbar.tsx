import Image from 'next/image';
import { Cat } from 'lucide-react';
import Link from 'next/link';

export function NavBar(){
    return(
        <header className = 'flex items-center justify-between fixed gap-3 border-b-2 w-full border-[#7163b0] p-2 bg-white truncate'>
            <Link className = 'flex justify-center -ml-1 lg:ml-6 text-[#e47836] text-[14px] lg:text-[26px] font-semibold' href = {'/'}>
                <Cat className = 'lg:h-[35px] lg:w-[35px]' size={20} color='#ff8d46'/>
                <h2>Pet Patinhas</h2>
            </Link>
            <nav className = 'flex gap-3 lg:gap-6 -mr-1 lg:mr-6'>
                <div className='flex items-center gap-2 lg:gap-8 text-[12px] lg:text-[18px]'>
                    <Link className = 'hover:text-[#e47836]' href={'/'}>Sobre-nós</Link>
                    <Link className = 'hover:text-[#e47836]' href={'/'}>Produtos</Link>
                </div>
                    <Link className = 'box-border h-8 w-14 lg:h-10 lg:w-[70px] bg-white border-2 lg:border-[3px] rounded border-[#ff8d46] flex items-center justify-center text-[12px] lg:text-[18px] hover:text-white hover:bg-[#ff8d46]' href = {'/'}>Adotar</Link>
                    <Link className = 'box-border h-8 w-14 lg:h-10 lg:w-[70px] bg-white border-2 lg:border-[3px] rounded border-[#7163b0] flex items-center justify-center text-[12px] lg:text-[18px] hover:text-white hover:bg-[#7163b0]' href = {'/'}>Entrar</Link>
            </nav>
        </header>
    );
}