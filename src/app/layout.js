import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="h-full w-full  flex flex-col gap-3 overflow-hidden px-3">
        <Header />

        {children}
        
        </body>
    </html>
  )
}
