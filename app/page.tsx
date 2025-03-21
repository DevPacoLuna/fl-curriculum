"use client";
import { Roboto } from "next/font/google";
import { Header } from "@/app/components/Header/Header";
import { Overview } from "@/app/components/Overview/Overview";
import { ExperiencesCarousel } from "@/app/components/ExperiencesCarousel/ExperiencesCarousel";
import { Events } from "@/app/components/Events/Events";
import { Announcement } from "@/app/components/Announcement/Announcement";
import { Awards } from "@/app/components/Awards/Awards";
import { Footer } from "@/app/components/Footer/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "500", "700", "900"],
});

export default function Home() {
  return (
    <main className={roboto.className}>
      <div>
        <Header />
        <Overview />
      </div>
      <ExperiencesCarousel />
      <Events />
      <Announcement />
      <Awards />
      <Footer />
    </main>
  );
}
