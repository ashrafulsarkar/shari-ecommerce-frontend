import './globals.scss';
import {Jost, Roboto,Charm,Oregano} from 'next/font/google';
import Providers from '@/components/provider';

export const metadata = {
  title: 'Jo - The Story of Handloom Jamdani',
  description: 'The Story of Handloom Jamdani',
  icons: {
    icon: '/favicon.png'
  },
}

const body = Jost({
  weight: ["300","400", "500", "600", "700", "800","900"],
  subsets: ["latin"],
  variable: "--tp-ff-body",
});
const heading = Jost({
  weight: ["300","400", "500", "600", "700", "800","900"],
  subsets: ["latin"],
  variable: "--tp-ff-heading",
});
const p = Jost({
  weight: ["300","400", "500", "600", "700", "800","900"],
  subsets: ["latin"],
  variable: "--tp-ff-p",
});
const jost = Jost({
  weight: ["300","400", "500", "600", "700", "800","900"],
  subsets: ["latin"],
  variable: "--tp-ff-jost",
});
const roboto = Roboto({
  weight: ["300","400","500","700","900"],
  subsets: ["latin"],
  variable: "--tp-ff-roboto",
});
const oregano = Oregano({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-oregano",
});
const charm = Charm({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--tp-ff-charm",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
