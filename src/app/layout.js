import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen min-w-full flex flex-col gap-3  px-3 bg-gradient-to-tr from-lime-200 via-lime-200 to-lime-700 bg-no-repeat">
        <Header />

        {children}
        
        </body>
    </html>
  )
}
