
import css from './Phone.module.css'



const Phone = () => {

    return (
        <section className={css.hero_section}>
            <div className={css.tel_blok}>
                <a className={css.tel} href="tel:+380958202612">Телефонуй +380958202612</a>
                <p className={css.tel_title}>Кожного дня з 09:00 - 20:00</p>
            </div>
        </section>
    )
};

export default Phone;