//tamanho: 375x667
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { NavBar } from '@/components/navbar'
import { Footer } from '@/components/footer'

//definição de fontes
const inter = Inter({ subsets: ['latin'] })
//exemplo: const montserrat = Montserrat({ subsets: ['latin'], weight: ['100', '700']})

export const metadata: Metadata = {
  title: 'Capacitação',
  description: 'Projeto teste',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className = 'bg-pink-100'>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
