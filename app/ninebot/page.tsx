
import css from './ninebot.module.css'

import Social from '@/components/Social/Social';
import Phone from '@/components/Phone/Phone';
import DeliveryNinebot from '@/components/Delivery/DeliveryNinebot';
import { KharkivHighway, Bakunska } from '@/components/Address/Address';
import NinebotG30 from '@/components/GameConsoles/NinebotG30';


const Ninebot = () => {

    return (
        <section>
            <section className={css.container_generator}>
                <div className={css.hero}>
                    <h1 className={css.hero_title}>Оренда електросамокатів</h1>
                    <a className={css.hero_button} href="tel:+380958202612">Зателефонувати +380958202612</a>
                </div>
            </section>
            <Social />
            <NinebotG30 />
            <DeliveryNinebot />

            <section id="pickup_location" className={css.rent_block}>
                <ul className={css.address}>
                    <KharkivHighway />
                    <Bakunska />
                </ul>
            </section>

            <Phone />
        </section >
    );
};

export default Ninebot;