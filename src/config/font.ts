import { Raleway, Inter, Montserrat, Poppins } from "next/font/google"
import localFont from 'next/font/local'
export const satoshi = localFont({
    src: [
        {
            path: '../assets/fonts/Satoshi-Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../assets/fonts/Satoshi-Medium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../assets/fonts/Satoshi-Bold.otf',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-satoshi',
    display: 'swap',
    preload:true
})

export const primaryFont = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const secondaryFont = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})