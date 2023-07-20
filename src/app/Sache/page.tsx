import Image from 'next/image';
import { Banner } from '@/components/banner';
import Fundo1 from '@/assets/Banner3.jpg'
import { Card } from '@/components/card';
import  SacheA  from '@/assets/SacheA.png';
import  SacheP  from '@/assets/SacheP.png';
import  SacheF  from '@/assets/SacheF.png';
import SacheAG from '@/assets/SacheAG.png';
import SacheCG from '@/assets/SacheCG.png';
import SacheFG from '@/assets/SacheFG.png';

export default function HomeSeca(){
    return(
    <main className=''>
        <div className = 'grid place-items-center pt-20'>
            <Banner img = {Fundo1}/>
        </div>
        <div className = 'grid text-center pt-14 pb-14 gap-8 text-[24px]'>
            <div className='grid justify-self-center gap-3 lg:w-[600px] lg:h-[350px] pt-2 pb-6 bg-pink-50 rounded-2xl'>
                <h1 className='font-bold'>Para Cachorros</h1>
                <div className = 'grid justify-items-center lg:flex lg:justify-center gap-20 text-[15px] lg:text-[16px] font-medium p-2'>
                    <Card title = {'Sachê para Cachorros Filhotes'} img = {SacheF} subtitle = {'Comprar Agora'} direct={'/Sache'}/>
                    <Card title = {'Sachê para Cachorros Raças Pequenas'} img = {SacheP} subtitle = {'Comprar Agora'} direct={'/Sache'}/>
                    <Card title = {'Sachê para Cachorros Adultos'} img = {SacheA} subtitle = {'Comprar Agora'} direct={'/Sache'}/>
                </div>
            </div>
            <div className='grid justify-self-center gap-3 w-[300px] lg:w-[700px] h-[3px] bg-pink-200 rounded-full'></div>
            <div className='grid justify-self-center gap-4 lg:w-[600px] lg:h-[350px] pt-2 pb-6 bg-pink-50 rounded-2xl'>
                <h2 className='font-bold'>Para Gatos</h2>
                <div className = 'grid justify-items-center lg:flex lg:justify-center gap-14 text-[15px] lg:text-[16px] font-medium'>
                        <Card title = {'Sachê para Gatos Filhotes'} img = {SacheAG} subtitle = {'Comprar Agora'} direct={'/Sache'}/>
                        <Card title = {'Sachê para Gatos Castrados'} img = {SacheCG} subtitle = {'Comprar Agora'} direct={'/Sache'}/>
                        <Card title = {'Sachê para Gatos Adultos'} img = {SacheFG} subtitle = {'Comprar Agora'} direct={'/Sache'}/>
                </div>
            </div>
        </div>
    </main>
    );
}