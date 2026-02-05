
import css from './generator.module.css'
import { Bakunska } from '@/components/Address/Address';
import Generator from '@/components/Generators/GeneratorList';
import Phone from '@/components/Phone/Phone';

const Generators = () => {

    return (
        <>
            <section className={css.container_generator}>
                <div className={css.hero}>
                    <h1 className={css.hero_title}>Оренда генераторів</h1>
                    <a className={css.hero_button} href="tel:+380958202612">Зателефонувати +380958202612</a>
                </div>
            </section>

            <Generator />

            <section id="pickup_location" className={css.rent_block}>
                <ul className={css.address}>
                    <Bakunska />
                </ul>
            </section>

            <Phone />
        </>
    );
};

export default Generators;