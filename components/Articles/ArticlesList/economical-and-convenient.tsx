
import BackButton from '@/components/Buttons/BackButton';
import css from './Articles.module.css';
import Link from "next/link";

const Economical = () => {

    return (
        <section className={css.article}>
            <h2 className={css.article_name}>Оренда PlayStation: Економна та зручна альтернатива купівлі</h2>
            <div className={css.article_blok}>
                <p className={css.article_text}>
                    Купівля нової ігрової консолі PlayStation 5 або ж 4 Pro разом з іграми може значно вдарити по гаманцю.
                    Чи замислювалися ви про економнішу альтернативу - оренду PlayStation?
                    Ця послуга стає дедалі популярнішою серед геймерів завдяки низці вагомих переваг.
                </p>
            </div>
            <div className={css.article_blok}>
                <h4 className={css.article_title}>Головна перевага: <span>Економія коштів.</span></h4>
                <p className={css.article_text}>
                    Оренда PlayStation дозволяє заощадити чималі суми порівняно з купівлею.
                    Ви платите лише частину вартості на певний період замість одноразової великої витрати.
                </p>
            </div>
            <div className={css.article_blok}>
                <h4 className={css.article_title}>Перевага 2: <span>Доступ до новинок.</span></h4>
                <p className={css.article_text}>
                    Завдяки оренді ви завжди матимете змогу грати в найсвіжіші ігри.
                </p>
            </div>
            <div className={css.article_blok}>
                <h4 className={css.article_title}>Перевага 3: <span>Гнучкість та зручність</span></h4>
                <p className={css.article_text}>
                    Оренда PlayStation дає вам свободу вибору - можна взяти консоль та ігри на кілька днів чи на кілька тижнів.
                </p>
            </div>
            <div className={css.article_blok}>
                <h4 className={css.article_title}>Перевага 4: <span>Екологічний бік</span></h4>
                <p className={css.article_text}>
                    Оренда продовжує життєвий цикл консолей та дисків з іграми,
                    запобігаючи передчасному утворенню електронних відходів. Таким чином, ви робите свій внесок
                    у збереження довкілля.
                </p>
                <p className={css.article_text}>
                    Оренда PlayStation - розумне рішення для тих, хто хоче заощадити, але не готовий відмовлятися від
                    задоволення грати в найновіші ігри. Спробувавши цю послугу, ви зможете оцінити всі її переваги над
                    купівлею консолі. Вигідно, зручно та екологічно свідомо - такою має бути гра по-справжньому!
                </p>
            </div>
            <div className={css.article_blok_button}>
                <BackButton />
                <Link className={css.article_button} href="/interesting-articles/rent">
                    <button type="button">Читати більше</button></Link>
            </div>
        </section>
    )
};

export default Economical;