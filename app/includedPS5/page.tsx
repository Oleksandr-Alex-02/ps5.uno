
import Benefits from '@/components/Benefits/Benefits';
import css from './includedPS5.module.css'

import Games from "@/components/Games/Games"
import Phone from "@/components/Phone/Phone";
import Social from "@/components/Social/Social";
import Equipment from '@/components/Equipment/Equipment';


const Included = () => {

    return (
        <section>
            <section className={css.container_hero}>
                <div className={css.hero}>
                    <h1 className={css.hero_title}>Що входить в комплект при оренді PlayStation?</h1>
                    <a className={css.hero_button} href="tel:+380958202612">Зателефонувати +380958202612</a>
                </div>
            </section>
            <Social />
            <Games />
            <Benefits />
            <Equipment />
            <Phone />
            <Social />
        </section>
    )
};

export default Included;