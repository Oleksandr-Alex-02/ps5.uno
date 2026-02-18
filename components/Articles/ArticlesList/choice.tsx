
import Link from 'next/link';
import css from './Articles.module.css';
import BackButton from '@/components/Buttons/BackButton';

const Choice = () => {

    return (
        <section className={css.article}>
            <h2 className={css.article_name}>Вибір між PlayStation 5 та PlayStation 4 Pro</h2>
            <div className={css.article_blok}>
                <h4 className={css.article_title}>Продуктивність і графіка</h4>
                <p className={css.article_text}>
                    PS5 значно випереджає PS4 Pro в плані продуктивності та графічних можливостей.
                    Вона обладнана потужним 8-ядерним процесором і графічним процесором з технологією
                    ray tracing, що забезпечує неперевершену якість зображення та високу деталізацію. PS4 Pro,
                    хоча й була вдосконаленою версією PS4, все ж поступається новітній консолі у відтворенні
                    графіки.
                </p>
            </div>
            <div className={css.article_blok}>
                <h4 className={css.article_title}>Ігровий каталог</h4>
                <p className={css.article_text}>
                    На даний момент каталог ігор для PS5 є більш ексклюзивним від PS4 Pro,
                    оскільки PS5 - новіша консоль. Багато ігор для PS4 Pro сумісні з PS5,
                    але їхня графіка покращена на новій консолі.
                </p>
            </div>
            <div className={css.article_blok}>
                <h4 className={css.article_title}>Швидкість завантаження</h4>
                <p className={css.article_text}>
                    PS5 має революційний твердотільний накопичувач (SSD),
                    що забезпечує блискавичне завантаження ігор і практично позбавляє потреби
                    чекати екрани завантаження. PS4 Pro використовує традиційний жорсткий диск,
                    що робить процес завантаження значно повільнішим.
                </p>
            </div>
            <div className={css.article_blok}>
                <h4 className={css.article_title}>Зворотна сумісність</h4>
                <p className={css.article_text}>
                    PS5 має зворотну сумісність з більшістю ігор для PS4,
                    що дозволяє грати в улюблені старі ігри на новій консолі.
                    PS4 Pro не сумісна з іграми для старих поколінь PlayStation.
                </p>
                <p>
                    Якщо ви прагнете максимальної продуктивності,
                    неймовірної графіки та швидкого завантаження ігор,
                    то варто розглянути PS5. Якщо ж ви не надто прискіпливі до графічних деталей то
                    PS4 Pro може бути кращим вибором. Однак слід пам’ятати, що PS5 - це консоль майбутнього,
                    тож вона стала домінуючою для нових ігор.
                </p>
            </div>
            <div className={css.article_blok_button}>
                <BackButton />
                <Link className={css.article_button} href="/interesting-articles/playstation-on-holiday">
                    <button type="button">Читати більше</button></Link>
            </div>
        </section>
    )
};

export default Choice;