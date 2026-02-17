'use client';

import css from './Articles.module.css'
import Link from 'next/link';

const Articles = () => {



    return (
        <>
            <section className={css.articlesSection}>
                <h2 className={css.articlesTitle}>Цікаві статті</h2>

                <ul className={css.articlesGroup}>
                    <li>
                        <article className={`${css.articleCard} ${css.PS5_1}`}>
                            < h3 className={css.articleHeading}>Оренда PlayStation: Економна та зручна альтернатива купівлі</h3>
                            <Link href="/interesting-articles/economical-and-convenient"><button type="button" className={css.articleButton}>Читати більше</button></Link>
                        </article>
                    </li>
                    <li>
                        <article className={`${css.articleCard} ${css.PS5_2}`}>
                            < h3 className={css.articleHeading}>Насолоджуйтесь топ-іграми без витрат – орендуйте PlayStation</h3>
                            <Link href="/interesting-articles/rent"><button type="button" className={css.articleButton}>Читати більше</button></Link>
                        </article>
                    </li>
                </ul >

                <ul className={css.articlesGroup}>
                    <li>
                        <article className={`${css.articleCard} ${css.PS5_3}`}>
                            <h3 className={css.articleHeading}>Топові ігри для PlayStation 5 та PlayStation 4 Pro</h3>
                            <Link href="/interesting-articles/top"><button type="button" className={css.articleButton}>Читати більше</button></Link>
                        </article>
                    </li>
                    <li>
                        <article className={`${css.articleCard} ${css.PS5_4}`}>
                            <h3 className={css.articleHeading}>Вибір між PlayStation 5 та PlayStation 4 Pro</h3>
                            <Link href="/interesting-articles/choice"><button type="button" className={css.articleButton}>Читати більше</button></Link>
                        </article>
                    </li >
                    <li>
                        <article className={`${css.articleCard} ${css.PS5_5}`}>
                            < h3 className={css.articleHeading}>Оренда консолей на вечірки та корпоративи</h3>
                            <Link href="/interesting-articles/playstation-on-holiday"><button type="button" className={css.articleButton}>Читати більше</button></Link>
                        </article>
                    </li >
                </ul >

                <ul className={css.articlesGroup}>
                    <li>
                        <article className={`${css.articleCard} ${css.PS5_6}`}>
                            <h3 className={css.articleHeading}>Гарячі хіти оренди: Найпопулярніші консолі та ігри</h3>
                            <Link href="/interesting-articles/hot-hits"><button type="button" className={css.articleButton}>Читати більше</button></Link>
                        </article>
                    </li>
                    <li>
                        <article className={`${css.articleCard} ${css.PS5_7}`}>
                            <h3 className={css.articleHeading}>PlayStation 5 та PS4 Pro: Оренда чи Купівля?</h3>
                            <Link href="/interesting-articles/rent-vs-buy"><button type="button" className={css.articleButton}>Читати більше</button></Link>
                        </article>
                    </li >
                    <li>
                        <article className={`${css.articleCard} ${css.PS5_8}`}>
                            < h3 className={css.articleHeading}>Зручна оренда консолей: простий і гнучкий процес</h3>
                            <Link href="/interesting-articles/convenient-rental"><button type="button" className={css.articleButton}>Читати більше</button></Link>
                        </article>
                    </li >
                </ul >
            </section >
        </>
    )
};

export default Articles;