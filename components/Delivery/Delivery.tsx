import { defaultConfig } from 'next/dist/server/config-shared';
import css from './Delivery.module.css'


const Delivery = () => {

    return (
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
    )
};

export default Delivery;