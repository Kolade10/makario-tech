import Image from "next/image";
import localFont from "next/font/local";
import Shell from "@/components/layouts/shell";
import WhiteHeader from "@/components/layouts/WhiteHeader";
import PreHeader from "@/components/layouts/preHeader";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/footer";
import Hero from "@/components/layouts/hero";
import WhatWeDo from "@/components/layouts/whatWeDo";
import OurFingerprints from "@/components/layouts/ourFingerprints";
import Contact from "@/components/layouts/contact";
import Testimonials from "@/components/layouts/testimonials";
import Sponsor from "@/components/layouts/sponsor";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <Shell>
      <PreHeader/>
      <Hero/>
      <WhatWeDo/>
      <OurFingerprints/>
      <Testimonials/>
      <Sponsor/>
      <Contact/>
    </Shell>
  );
}
