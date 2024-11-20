import {Roboto, Poppins, Manrope} from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ['normal'],
  subsets: ['latin'],
  display: "swap",
  variable: '--ff-roboto',
});

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ['normal'],
  subsets: ['latin'],
  display: "swap",
  variable: '--ff-poppins',
})

const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ['normal'],
  subsets: ['latin'],
  display: "swap",
  variable: '--ff-manrope',
});

export {roboto, poppins, manrope};