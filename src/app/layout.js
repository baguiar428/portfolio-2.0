import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata = {
  title: "Talk About Bruno",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
<html
lang="en">
<body className={`${montserrat.variable} font-sans bg-light dark:bg-dark w-full min-h-screen`}>
  <NavBar />
  {children}
  <Footer />
</body>
</html>
  );
}

// Original Code
{
  /* <html
lang="en"
className={`${montserrat.variable} font-sans bg-light dark:bg-dark w-full min-h-screen`}
>
<body>
  <NavBar />
  {children}
  <Footer />
</body>
</html> */
}

//Improved code?
{
  /* <>
<Head>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <link rel="icon" href="/favicon.ico"/>
</Head>
  <main className={`${montserrat.variable} font-sans bg-light dark:bg-dark w-full min-h-screen`}>
    <NavBar />
    {children}
    <Footer />
  </main>
</> */
}
