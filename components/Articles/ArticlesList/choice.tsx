
import Link from 'next/link';
import css from './Articles.module.css';

const Choice = () => {

    return (
        <>
            <h2 className={css.article_title}>Вибір між PlayStation 5 та PlayStation 4 Pro</h2>
            <p></p>
            <Link href="/interesting-articles/rent">
                <button type="button">Читати більше</button></Link>
        </>
    )
};

export default Choice;