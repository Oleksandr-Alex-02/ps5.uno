
import Link from 'next/link';
import css from './BackButton.module.css';

const MainButton = () => {

    return (
        <Link href="/">
            <button className={css.button} type='button'>
                Повернутись на головну
            </button>
        </Link>
    )
};

export default MainButton;


