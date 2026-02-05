
import css from "./page.module.css"

import Hero from "@/components/Hero/Hero";
import Social from "@/components/Social/Social"
import Console from "@/components/GameConsoles/GameConsoles";
import Delivery from "@/components/Delivery/Delivery";
import Phone from "@/components/Phone/Phone";
import { Bakunska, KharkivHighway } from "@/components/Address/Address";


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



<div className="rent_block">
  {/* Sony PlayStation 5 */}
  <div>
    <h2>Sony PlayStation 5:</h2>

    <p>Застава</p>
    <p>- з документами - 8000грн/200$(usdt) + фізичний оригінал документа
      (який відображений в застосунку Дія)</p>
    <p>- Без документів - 20000грн/500$(usdt)</p>

    <h3>Вартість оренди</h3>
    <ul>
      <li>- 1 доба - 600 грн (24 години)</li>
      <li>- 2 доби - 1000 грн (500 грн/доба)</li>
      <li>- 3 доби - 1350 грн (450 грн/доба)</li>
      <li>- 5+ діб - 2000+ грн (400 грн/доба)</li>
      <li>- 1 тиждень (7 діб) - 2500 грн (375 грн/доба)</li>
      <li>- 2 тижні (14 діб) - 4900 грн (350 грн/доба)</li>
      <li>- 1 місяць (30 діб) - 7500 грн (250 грн/доба)</li>
      <li>Кожен наступний день, що перевищує 1 місяць (30 діб) - 250 грн</li>
    </ul>
  </div>
  {/* Sony PlayStation 4 Pro */}
  <div>
    <h2>Sony PlayStation 4 Pro:</h2>

    <p>Застава</p>
    <p>- З документами - 4000грн/100$(usdt)+ фізичний оригінал документа
      (який відображений в застосунку Дія)</p>
    <p>- Без документів - 12000грн/300$(usdt)</p>

    <h3>Вартість оренди</h3>
    <ul>
      <li>- 1 доба - 400 грн</li>
      <li>- 2 доби - 600 грн (300 грн/доба)</li>
      <li>- 3 доби - 750 грн (250 грн/доба)</li>
      <li>- 5+ діб - 900+ грн (180 грн/доба)</li>
      <li>- 1 тиждень (7 діб) - 1260 грн (180 грн/доба)</li>
      <li>- 1 місяць (30 діб) - 3000 грн (100 грн/доба)</li>
      {/* <li>Кожен наступний день, що перевищує 1 місяць (30 діб) - 250 грн</li> */}
    </ul>
  </div>
</div>