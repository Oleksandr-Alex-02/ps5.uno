
import Link from 'next/link';
import css from './Articles.module.css';
import BackButton from '@/components/Buttons/BackButton';


const Rent = () => {

    return (
        <section className={css.article}>
            <h2 className={css.article_name}>Замість купівлі дорогої консолі, орендуйте PS5</h2>
            <div className={css.article_blok}>
                <p className={css.article_text}>
                    Геймери, ласкаво просимо у світи Horizon Forbidden West, God of War Ragnarok,
                    Spider-Man: Miles Morales та інших блокбастерів! Занурюйтеся у приголомшливі відкриті локації,
                    захопливі історії, деталізовану графіку - без жодних обмежень.
                </p>
                <p className={css.article_text}>
                    Втім, чому витрачати чималі кошти на купівлю ігрової консолі?
                    Зустрічайте вигідну альтернативу - оренду PlayStation!
                </p>
                <p className={css.article_text}>
                    Орендуючи найновіші потужні консолі, ви отримаєте доступ до ігор одразу після їх релізу.
                    Пориньте у постапокаліптичний світ Horizon, випробуйте свої сили в Demon’s Souls
                    чи відчуйте приголомшливу реалістичність в Ratchet & Clank: Rift Apart.
                </p>
                <p className={css.article_text}>
                    Вигідно, гнучко та екологічно свідомо - такою має бути справжня гра!
                    Просто оберіть необхідний строк оренди консолі. Жодних зайвих витрат і незручностей.
                </p>
                <p className={css.article_text}>
                    До того ж, орендуючи, ви продовжуєте життєвий цикл консолей та ігор,
                    обмежуючи електронні відходи. Тож робите крок до захисту довкілля.
                </p>
                <p className={css.article_text}>
                    Не гайте часу! Орендуйте PlayStation 5 просто зараз.
                    Без фінансових турбот насолоджуйтесь найкращими захопливими пригодами у світах відомих ігор-блокбастерів.
                    Починайте своє неповторне дозвілля саме з оренди!
                </p>
            </div>
            <div className={css.article_blok_button}>
                <BackButton />
                <Link className={css.article_button} href="/interesting-articles/top">
                    <button type="button">Читати більше</button></Link>
            </div>
        </section>
    )
};

export default Rent;