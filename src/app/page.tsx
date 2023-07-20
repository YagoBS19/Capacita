import Image from 'next/image';
import { Card } from '@/components/card';
import { Card2 } from '@/components/card2';
import { Banner } from '@/components/banner';
import Fundo1  from '@/assets/Banner1.jpg';
import Pet1 from '@/assets/Pet.png'
import Pet2 from '@/assets/Pet2.png'
import Forms1 from '@/assets/Forms1.png'
import Forms2 from '@/assets/Forms2.png'
import  Seco  from '@/assets/SecaAdulto.png';
import  Sache  from '@/assets/MolhoCarne.png';
import  Petisco  from '@/assets/Petiscos.png';

export default function Home() {
  return (
    <main className = ''>
      <div className = 'grid place-items-center pt-10'>
        <Banner img = {Fundo1}/>
      </div>
      <div className = 'grid justify-items-center pt-10 pb-10'>
        <div className = 'grid justify-items-center pt-6 p-6 gap-5 w-[350px] lg:w-[1000px] bg-pink-50 rounded-xl'>
          <h1 className = 'font-bold text-[24px] text-center'>Quer Adotar? Entenda os requerimentos</h1>
          <div className ='grid lg:flex lg:justify-center gap-14 lg:gap-10'>
            <Card2 title = {'Encontre seu Pet'} subtitle = {'Conheça nossos Pets através do catálogo virtual ou vá em uma de nossas unidades e encontre o animalzinho perfeito pra você!'} img = {Pet1}/>
            <Card2 title = {'Preencha o Formulário'} subtitle = {'Preencha o formulário de interesse em uma de nossas unidades ou online. Caso preencha o formulário virtual, entraremos em contato com você em até 72h!'} img = {Forms1}/>
            <Card2 title = {'Análise de Formulário'} subtitle = {'Após preenchimento, seu perfil será avaliado e você receberá a resposta na hora! Caso tenha feito o formulário virtual, a resposta será enviada por telefone ou e-mail.'} img = {Forms2}/>
            <Card2 title = {'Adoção Completa'} subtitle = {'Após aprovação, você estará pronto para levar seu animalzinho para casa! Se enviou o formulário virtual, busque seu animalzinho no dia combinado com o avaliador!'} img = {Pet2}/>
          </div>
        </div>
      </div>
      <div className = 'grid place-items-center pt-10 pb-10'>
        <div className = 'grid justify-items-center pt-6 p-6 h-[1250px] w-[300px] lg:h-[450px] lg:w-[900px] bg-pink-50 rounded-2xl'>
          <h1 className = 'font-bold text-center text-[24px]'>Conheça Nossos produtos</h1>
          <div className = 'grid lg:flex lg:justify-center gap-14'>
            <Card title = {'Rações Secas'} img = {Seco} subtitle = {'Comprar Agora'}/>
            <Card title = {'Sachês'} img = {Sache} subtitle = {'Comprar Agora'}/>
            <Card title = {'Petiscos'} img = {Petisco} subtitle = {'Comprar Agora'}/>
          </div>
        </div>
      </div>
    </main>
  );
}