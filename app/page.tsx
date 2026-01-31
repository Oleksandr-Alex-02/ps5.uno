
import css from "./page.module.css"
import Social from "@/components/Social/Social"
import { Bakunska, KharkivHighway } from "@/components/Address/Address";


export default function Home() {
  return (
    <>
      <section className={css.container_hero}>
        <div className={css.hero}>
          <h1 className={css.hero_title}>Оренда Sony PlayStation 5 у Києві</h1>
          <a className={css.hero_button} href="tel:+380958202612">Зателефонувати +380958202612</a>
        </div>
      </section>

      <Social />

      <section>
        <p className={css.info_title}>
          <span><a href="">Оренда Sony PlayStation 5</a> з іграми на двох, вигідні</span>
          умови та доступні тарифи</p>

        <div className={css.rent_block}>
          {/* Sony PlayStation 5 */}
          <div className={`${css.rent_item} ${css.ps5}`}>
            <h2 className={css.rent_title}>Sony PlayStation 5:</h2>

            <p className={css.deposit_label}>Застава</p>
            <p className={css.deposit_option}>
              - з документами - 8000грн/200$(usdt) + фізичний оригінал документа
              (який відображений в застосунку Дія)
            </p>
            <p className={css.deposit_option}>
              - Без документів - 20000грн/500$(usdt)
            </p>

            <h3 className={css.price_title}>Вартість оренди</h3>
            <ul className={css.price_list}>
              <li className={css.price_item}>- 1 доба - 600 грн (24 години)</li>
              <li className={css.price_item}>- 2 доби - 1000 грн (500 грн/доба)</li>
              <li className={css.price_item}>- 3 доби - 1350 грн (450 грн/доба)</li>
              <li className={css.price_item}>- 5+ діб - 2000+ грн (400 грн/доба)</li>
              <li className={css.price_item}>- 1 тиждень (7 діб) - 2500 грн (375 грн/доба)</li>
              <li className={css.price_item}>- 2 тижні (14 діб) - 4900 грн (350 грн/доба)</li>
              <li className={css.price_item}>- 1 місяць (30 діб) - 7500 грн (250 грн/доба)</li>
              <li className={css.price_item}>
                Кожен наступний день, що перевищує 1 місяць (30 діб) - 250 грн
              </li>
            </ul>
          </div>

          {/* Sony PlayStation 4 Pro */}
          <div className={`${css.rent_item} ${css.ps4pro}`}>
            <h2 className={css.rent_title}>Sony PlayStation 4 Pro:</h2>

            <p className={css.deposit_label}>Застава</p>
            <p className={css.deposit_option}>
              - З документами - 4000грн/100$(usdt)+ фізичний оригінал документа
              (який відображений в застосунку Дія)
            </p>
            <p className={css.deposit_option}>
              - Без документів - 12000грн/300$(usdt)
            </p>

            <h3 className={css.price_title}>Вартість оренди</h3>
            <ul className={css.price_list}>
              <li className={css.price_item}>- 1 доба - 400 грн</li>
              <li className={css.price_item}>- 2 доби - 600 грн (300 грн/доба)</li>
              <li className={css.price_item}>- 3 доби - 750 грн (250 грн/доба)</li>
              <li className={css.price_item}>- 5+ діб - 900+ грн (180 грн/доба)</li>
              <li className={css.price_item}>- 1 тиждень (7 діб) - 1260 грн (180 грн/доба)</li>
              <li className={css.price_item}>- 1 місяць (30 діб) - 3000 грн (100 грн/доба)</li>
            </ul>
          </div>
        </div>

      </section>

      <section className={css.delivery_section}>
        <h2 className={css.section_title}>Доставка та самовивіз в Києві</h2>

        <h4 className={css.sub_title}>ДОСТАВКА ПО КИЄВУ</h4>

        <div className={css.delivery_option}>
          <p className={css.delivery_text}>
            Від 500 грн при замовленні в межах міста.
          </p>
          <span className={css.delivery_note}>*вартість вказана за 1 виїзд</span>
        </div>

        <div className={css.delivery_option}>
          <p className={css.delivery_text}>
            У радіусі 1 км від нас - 100 грн.
          </p>
          <span className={css.delivery_note}>*вартість вказана за 1 виїзд</span>
        </div>

        <p className={css.delivery_extra}>
          У випадку, коли ви знаходитесь за межами міста, можливість доставки
          обговорюється в індивідуальному порядку.
        </p>

        <h4 className={css.sub_title}>САМОВИВІЗ</h4>

        <p className={css.pickup_text}>Попередньо телефонуйте за номером</p>
        <p className={css.pickup_text}>+380958202612 та бронюйте час</p>

        <button className={css.call_button}>
          <a href="tel:+380958202612" className={css.call_link}>
            +380958202612
          </a>
        </button>
      </section>

      <section className={css.rent_block}>
        <KharkivHighway />
        <Bakunska />
      </section>

      <section>
        <div>
          <a href="tel:+380958202612">Телефонуй +380958202612</a>
          <p>Кожного дня з 09:00 - 20:00</p>
        </div>

        <Social />

        <div>
          відгуки
        </div>
      </section>
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