
import Link from 'next/link';
import css from './Articles.module.css';

import BackButton from '@/components/Buttons/BackButton';

const ConvenientRental = () => {

    return (
        <section className={css.article}>
            <h2 className={css.article_name}></h2>
            <div className={css.article_blok}>
                <p className={css.article_text}>Зацікавились орендою ігрових консолей, але не знаєте, з чого почати?
                    Не хвилюйтеся, процес дуже простий і зручний! Розповімо про всі етапи від вибору консолі до її повернення.</p>
            </div>
            <div className={css.article_blok}>
                <h4 className={css.article_title}>Крок 1: Вибір консолі</h4>
                <p className={css.article_text}>
                    Перший крок - це вибір бажаної ігрової приставки на сайті
                    або ж за номером телефону +380958202612. Серед вибору представлені PlayStation 5 або ж PlayStation 4 Pro.
                </p>
            </div>
            <div className={css.article_blok}>
                <h4 className={css.article_title}>Крок 2: Період оренди</h4>
                <p className={css.article_text}>
                    Ми пропонуємо гнучкі терміни оренди - від однієї доби до кількох місяців.
                    Виберіть потрібний вам період відповідно до ваших потреб та бюджету.
                </p>
            </div>
            <div className={css.article_blok}>
                <h4 className={css.article_title}>Крок 3: Оформлення та внесок</h4>
                <p className={css.article_text}></p>
            </div>
            <div className={css.article_blok}>
                <h4 className={css.article_title}>Крок 4: Отримання обладнання</h4>
                <p className={css.article_text}>
                    Ви можете отримати обрану консоль із доставкою або зі самовивозом з пункту видачі.
                    Зручно, що разом із приставкою ви також отримаєте все необхідне додаткове обладнання - контролери,
                    кабелі живлення тощо.
                </p>
            </div>
            <div className={css.article_blok}>
                <h4 className={css.article_title}>Крок 5: Повернення</h4>
                <p className={css.article_text}>
                    По закінченні терміну оренди вам залишиться повернути обладнання
                    у належному стані самостійно або ж за допомогою доставки.
                    Після огляду та перевірки працездатності консолі вам буде повернуто заставну суму.
                </p>
                <p className={css.article_text}>
                    Одна з ключових переваг оренди - її гнучкість.
                    Більшість прокатних пунктів дозволяють продовжувати термін оренди прямо на місці,
                    без потреби повертати обладнання. Також є можливість орендувати нову консоль замість повернутої.
                </p>
                <p className={css.article_text}>
                    Як бачите, процес оренди ігрових приставок дуже простий і зручний.
                    Ви можете легко вибрати необхідну вам консоль. Жодних складних процедур чи великих авансових виплат.
                    Просто насолоджуйтесь грою в найпопулярніші ігри протягом обраного періоду!
                </p>
            </div>

            <div className={css.article_blok_button}>
                <BackButton />
                <Link className={css.article_button} href="/interesting-articles">
                    <button type="button">Повенутись до Цікаві статті</button></Link>
            </div>
        </section>
    )
};

export default ConvenientRental;

