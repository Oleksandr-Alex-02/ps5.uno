// import InDevelopment from '@/components/InDevelopment/InDevelopment'

import css from './generator.module.css'
import { Bakunska } from '@/components/Address/Address';
import Generator from '@/components/Generators/Generators';

const Generators = () => {
    // const isDevelopment = true;
    // const isDevelopment = false;


    return (
        <>
            <section className={css.container_generator}>
                <div className={css.hero}>
                    <h1 className={css.hero_title}>Оренда генераторів</h1>
                    <a className={css.hero_button} href="tel:+380958202612">Зателефонувати +380958202612</a>
                </div>
            </section>

            <Generator />

            <Bakunska />

            <section className={css.hero_section}>
                <div className={css.tel_blok}>
                    <a className={css.tel} href="tel:+380958202612">Телефонуй +380958202612</a>
                    <p className={css.tel_title}>Кожного дня з 09:00 - 20:00</p>
                </div>
            </section>
        </>
    );
};

export default Generators;