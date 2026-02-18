

import Link from 'next/link';
import css from './Articles.module.css';

import BackButton from '@/components/Buttons/BackButton';

const HotHits = () => {

    return (
        <section className={css.article}>
            <h2 className={css.article_name}>Гарячі хіти оренди: Найпопулярніші ігрові консолі та ігри у прокаті</h2>
            <div className={css.article_blok}>
                <p className={css.article_text}>
                    Сервіси з оренди ігрових консолей стрімко набирають популярність серед геймерської спільноти.
                    Вони дозволяють користувачам спробувати нові ігрові системи та тайтли без великих витрат на їх купівлю.
                    Але ж поціновувачі відеоігор мають різні смаки та переваги.
                    Які консолі та ігри найчастіше орендують? Далі розглянемо топові запити.
                </p>
            </div>
            <div className={css.article_blok}>
                <h4 className={css.article_title}>Найпопулярніші приставки для оренди</h4>
                <p className={css.article_text}>Статистика запитів на оренду ігрових консолей виглядає наступним чином:</p>
                <ul className={css.article_list}>
                    <li>PlayStation 5</li>
                    <li>PlayStation 4 Pro</li>
                </ul>
                <p className={css.article_text}>
                    Безумовним лідером є найновіша консоль від Sony - PlayStation 5.
                    Клієнти прагнуть пограти на потужній системі з вражаючою графікою та імерсивним геймплеєм.
                </p>
                <p className={css.article_text}>Ранішні покоління PS4 Pro теж не втрачає актуальності через великі бібліотеки ігор.</p>
            </div>
            <div className={css.article_blok}>
                <h4 className={css.article_title}>Найзатребуваніші ігри</h4>
                <p className={css.article_text}>Що ж до ігрового контенту, то найбільш запитуваними для оренди є:</p>
                <ul className={css.article_list}>
                    <li><span>1.</span> Elden Ring</li>
                    <li><span>2.</span> Horizon Forbidden West</li>
                    <li><span>3.</span> God of War: Ragnarok</li>
                    <li><span>4.</span> Gran Turismo 7</li>
                    <li><span>5.</span> Halo Infinite</li>
                    <li><span>6.</span> Kirby’s Return to Dream Land Deluxe</li>
                </ul>
                <p className={css.article_text}>
                    Як бачимо, пріоритет надається високобюджетним новинкам із сюжетними кампаніями чи мультиплеєром.
                    Крім потужної графіки, користувачі хочуть цікавих ігрових світів та динамічного геймплею.
                </p>
            </div>
            <div className={css.article_blok}>
                <h4 className={css.article_title}>Цікаві тенденції</h4>
                <p className={css.article_text}>
                    З року в рік тенденції в оренді починають змінюватися. Наприклад,
                    з виходом нових поколінь консолей зростає інтерес до їх оренди,
                    тоді як старші моделі поступово відходять на другий план.
                </p>
                <p className={css.article_text}>
                    Водночас, завдяки ремастерингам чи випуску сиквелів,
                    інтерес до культових серій як God of War чи Horizon може відновлюватися навіть на старих консолях.
                </p>
                <p className={css.article_text}>
                    Крім того, простежується більша затребуваність
                    локальних мультиплеєрних ігор для командних розваг на святах чи вечірках з друзями.
                </p>
                <p className={css.article_text}>
                    Оренда ігрових консолей стає все популярнішою альтернативою їхній купівлі.
                    Геймери прагнуть спробувати новинки відеоігор та консолі без великих грошових інвестицій.
                    Тенденції демонструють зростання інтересу до локальних мультиплеєрів.
                </p>
            </div>
            <div className={css.article_blok_button}>
                <BackButton />
                <Link className={css.article_button} href="/interesting-articles/rent-vs-buy">
                    <button type="button">Читати більше</button></Link>
            </div>
        </section>
    )
};

export default HotHits;
