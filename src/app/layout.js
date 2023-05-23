import NavBar from './components/NavBar'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-mont' })

export const metadata = {
  title: 'Talk About Bruno',
  description: 'Portfolio Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} font-sans bg-light w-full min-h-screen`}>
      <body>
      <NavBar/>
        {children}
      </body>
    </html>
  )
}
