
import css from "./page.module.css"

import Hero from "@/components/Hero/Hero";
import Social from "@/components/Social/Social"
import Console from "@/components/GameConsoles/GameConsoles";
import Delivery from "@/components/Delivery/Delivery";
import Phone from "@/components/Phone/Phone";
import { Bakunska, KharkivHighway } from "@/components/Address/Address";

export const metadata = {
  title: "Оренда PlayStation у Києві | PS5 та PS4 Pro",
  description:
    "Оренда Sony PlayStation 5 та PlayStation 4 Pro у Києві. Вигідні тарифи, ігри на двох, гнучкі умови та доступні ціни. Телефонуйте: +380958202612.",
  keywords: [
    "оренда PlayStation Київ",
    "оренда пс5",
    "оренда PS5",
    "оренда PS4 Pro",
    "оренда консолей Київ",
    "оренда ігрових приставок",
    "оренда Sony PlayStation",
    "оренда приставки",
  ],
  openGraph: {
    title: "Оренда PlayStation у Києві",
    description:
      "Оренда Sony PlayStation 5 та PlayStation 4 Pro з іграми на двох. Доступні тарифи та вигідні умови.",
    url: "hhttps://ps5-uno.vercel.app/",
    siteName: "Оренда PlayStation у Київ +380958202612",
    images: [
      {
        url: "/PlayStation-5fon.png",
        width: 800,
        height: 600,
        alt: "Оренда PlayStation 5 у Києві",
      },
    ],
    locale: "uk_UA",
    type: "website",
  },
  alternates: {
    canonical: "https://ps5-uno.vercel.app/",
  },
};


export default function Home() {
  return (
    <>
      <Hero />
      <Social />
      <Console />
      <Delivery />

      <section id="pickup_location" className={css.rent_block}>
        <ul className={css.address}>
          <KharkivHighway />
          <Bakunska />
        </ul>
      </section>

      <Phone />
      <Social />

      <div>
        відгуки
      </div>
    </>
  );
}