import Image from 'next/image';
import { Card } from '@/components/card';
import { Banner } from '@/components/banner';
import Fundo1 from '@/assets/Banner2.jpg';
import  SecaA  from '@/assets/SecaA.png';
import  SecaP  from '@/assets/SecaP.png';
import  SecaF  from '@/assets/SecaF.png';
import SecaAG from '@/assets/SecaAG.png';
import SecaCG from '@/assets/SecaCG.png';
import SecaFG from '@/assets/SecaFG.png';

export default function HomeSeca(){
    return(
    <main className=''>
        <div className = 'grid place-items-center pt-20'>
            <Banner img = {Fundo1}/>
        </div>
        <div className = 'grid text-center pt-28 pb-14 gap-8 text-[24px]'>
            <div className='grid justify-self-center gap-3 lg:w-[600px] lg:h-[350px] pt-2 pb-6 bg-pink-50 rounded-2xl'>
                <h1 className='font-bold'>Para Cachorros</h1>
                <div className = 'grid justify-items-center lg:flex lg:justify-center gap-20 text-[15px] lg:text-[16px] font-medium p-4'>
                    <Card title = {'Ração Seca para Filhotes'} img = {SecaF} subtitle = {'Comprar Agora'} direct={'/Seco'}/>
                    <Card title = {'Ração Seca para Raças Pequenas'} img = {SecaP} subtitle = {'Comprar Agora'} direct={'/Seco'}/>
                    <Card title = {'Ração Seca para Adultos'} img = {SecaA} subtitle = {'Comprar Agora'} direct={'/Seco'}/>
                </div>
            </div>
            <div className='grid justify-self-center gap-3 w-[300px] lg:w-[700px] h-[3px] bg-pink-200 rounded-full'></div>
            <div className='grid justify-self-center gap-4 lg:w-[600px] lg:h-[350px] pt-2 pb-6 bg-pink-50 rounded-2xl'>
                <h2 className='font-bold'>Para Gatos</h2>
                <div className = 'grid justify-items-center lg:flex lg:justify-center gap-14 text-[15px] lg:text-[16px] font-medium'>
                        <Card title = {'Ração Seca para Filhotes'} img = {SecaAG} subtitle = {'Comprar Agora'} direct={'/Seco'}/>
                        <Card title = {'Ração Seca para Castrados'} img = {SecaCG} subtitle = {'Comprar Agora'} direct={'/Seco'}/>
                        <Card title = {'Ração Seca para Adultos'} img = {SecaFG} subtitle = {'Comprar Agora'} direct={'/Seco'}/>
                </div>
            </div>
        </div>
    </main>
    );
}