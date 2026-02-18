
import Link from 'next/link';
import css from './Articles.module.css';
import BackButton from '@/components/Buttons/BackButton';

const PlayStationOnHoliday = () => {

    return (
        <section className={css.article}>
            <h2 className={css.article_name}>Оренда ігрових консолей на вечірки та корпоративи: розважальний хіт на вашому святі!</h2>
            <h5 className={css.article_name2}>Плануєте незабутню вечірку, корпоративний івент чи інше святкове зібрання?
                Зробіть його по-справжньому захопливим та яскравим завдяки орендованим ігровим консолям!
                Це ідеальний спосіб створити розважальну гейм-зону, що спалахне емоціями та веселощами.</h5>
            <div className={css.article_blok}>
                <h4 className={css.article_title}>Які консолі можна орендувати?</h4>
                <ul className={css.article_list}>
                    <li>Потужна PlayStation 5 з неперевершеною графікою та контролерами DualSense.</li>
                    <li>Незрівнянна класика PlayStation 4 Pro справжній флагман свого покоління.</li>
                </ul>
                <p className={css.article_text}>
                    Крім того, ви отримаєте у своє розпорядження величезні бібліотеки ігор на будь-який смак:
                    захопливі шутери, динамічні рейсинги,
                    веселі керівники, гостросюжетні екшени та багато іншого.
                </p>
            </div>
            <div className={css.article_blok}>
                <h4 className={css.article_title}>Переваги оренди на свято</h4>
                <p className={css.article_text}>
                    Орендувати ігрові приставки на свято - це розумне та економне рішення порівняно з купівлею консолей.
                    До того ж ви отримаєте низку вагомих переваг:
                </p>
                <ul className={css.article_list}>
                    <li>Гнучкість вибору необхідної кількості консолей на певний термін</li>
                    <li>Можливість доставки обладнання до місця заходу</li>
                    <li>Великий комплект  ігор для різновікових груп гостей</li>
                    <li>Оренда на одну подію обійдеться дешевше, ніж купівля всього обладнання</li>
                </ul>
                <p className={css.article_text}>Після завершення заходу консолі просто повертаються, і ви не переймаєтеся щодо зберіганням.</p>
            </div>
            <div className={css.article_blok}>
                <h4 className={css.article_title}>Оренда для різних подій</h4>
                <p className={css.article_text}>Ігрові приставки можна орендувати для найрізноманітніших зібрань та святкувань:</p>
                <ul className={css.article_list}>
                    <li>Дитячі дні народження та випускні</li>
                    <li>Вечірки, розважальні заходи</li>
                    <li>Корпоративні івенти для командного розвитку</li>
                    <li>Весілля та інші урочистості з розважальною програмою</li>
                </ul>
                <p className={css.article_text}>Гейм-зона стане родзинкою будь-якої події та подарує гостям потужний заряд позитивних емоцій!</p>
                <p className={css.article_text}>
                    Створіть незабутню пригодницьку атмосферу на вашому святі за допомогою орендованих ігрових консолей.
                    Захопливі розваги для всіх вікових груп гостей гарантовані!
                    А провайдери оренди допоможуть спланувати та організувати ідеальний ігровий майданчик.
                </p>
            </div>
            <div className={css.article_blok_button}>
                <BackButton />
                <Link className={css.article_button} href="/interesting-articles/hot-hits">
                    <button type="button">Читати більше</button></Link>
            </div>
        </section>
    )
};

export default PlayStationOnHoliday;