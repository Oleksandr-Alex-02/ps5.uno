
import css from './Hero.module.css'

const Hero = () => {

    return (
        <section className={css.container_hero}>
            <div className={css.hero}>
                <h1 className={css.hero_title}>Оренда Sony PlayStation 5 у Києві</h1>
                <a className={css.hero_button} href="tel:+380958202612">Зателефонувати +380958202612</a>
            </div>
        </section>
    )
};

export default Hero;