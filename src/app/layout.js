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
    <html lang="en" className={`${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  )
}
