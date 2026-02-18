
import Link from 'next/link';
import css from './Articles.module.css';
import BackButton from '@/components/Buttons/BackButton';

const Choice = () => {

    return (
        <section className={css.article}>
            <h2 className={css.article_title}>Вибір між PlayStation 5 та PlayStation 4 Pro</h2>
            <p></p>
            <div className={css.article_blok_button}>
                <BackButton />
                <Link className={css.article_button} href="/interesting-articles/choice">
                    <button type="button">Читати більше</button></Link>
            </div>
        </section>
    )
};

export default Choice;