
import css from './Articles.module.css';
import Link from "next/link";

const Economical = () => {

    return (
        <>
            <h2 className={css.article_title}>Оренда PlayStation: Економна та зручна альтернатива купівлі</h2>
            <p></p>
            <Link href="/interesting-articles/rent">
                <button type="button">Читати більше</button></Link>
        </>
    )
};

export default Economical;