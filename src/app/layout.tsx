import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import LogoImg from "../assets/images/horizontal-2-fundo-azul.png"
import './globals.css'
import { ThemeProvider } from '@emotion/react'
import { AppTheme } from '@/themes'

export const metadata: Metadata = {
  title: 'Conversor - Vinicius Zago',
  description: 'Conversor de alimentos por Vinicius Zago',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
        <body className='overflow-x-hidden'>
          <header className='w-screen bg-primary flex items-center justify-center shadow-lg'>
            <Image src={LogoImg} alt='Logo Vinicius Zago' className='w-52'/>
          </header>
          {children}
        </body>
    </html>
  )
}
