

import css from './Articles.module.css';
import Link from 'next/link';
import BackButton from '@/components/Buttons/BackButton';

const Top = () => {

    return (
        <section className={css.article}>
            <h2 className={css.article_name}>Топові ігри для PlayStation 5 та PlayStation 4 Pro: захопливий геймплей та приголомшлива графіка</h2>
            <div className={css.article_blok}>
                <h4 className={css.article_title}>God of War Ragnarok</h4>
                <p className={css.article_text}>
                    Епічне продовження культової God of War серії з вражаючим скандинавським сеттингом,
                    неперевершеною графікою та напруженими бойовими сценами. Геймери занурюються в легендарний
                    світ нордичної міфології.
                </p>
            </div>
            <div className={css.article_blok}>
                <h4 className={css.article_title}>Horizon Forbidden West</h4>
                <p className={css.article_text}>
                    Чудове продовження Horizon Zero Dawn із захопливим пост-апокаліптичним відкритим світом,
                    заповненим роботизованими динозаврами. Гравці виступають мисливцею Елой, досліджуючи
                    неймовірні локації та беручи участь у видовищних боях.
                </p>
            </div>
            <div className={css.article_blok}>
                <h4 className={css.article_title}>Spider-Man: Miles Morales</h4>
                <p className={css.article_text}>
                    Пригодницька гра, в якій ви втілюєтесь у роль Майлза Моралеса - нового Spider-Man з
                    усіма знаменитими здібностями та акробатичними трюками. Насолоджуйтесь вражаючою графікою,
                    динамічним відкритим Нью-Йорком та епічними бойовими сценами.
                </p>
            </div>
            <div className={css.article_blok}>
                <h4 className={css.article_title}>God of War (2018)</h4>
                <p className={css.article_text}>
                    Перезапуск God of War з видатною історією про силу сімейних стосунків та вправним
                    поєднанням екшену й рольового геймплею. Бачите світ очима спартанця Кратоса у його новій
                    ролі батька.
                </p>
            </div>
            <div className={css.article_blok}>
                <h4 className={css.article_title}>Red Dead Redemption 2</h4>
                <p className={css.article_text}>
                    Епічний вестерн з абсолютно жвавим відкритим світом, деталізованими графічними
                    елементами та безліччю активностей. Історія про пригоди банди грабіжників на Дикому
                    Заході у XIX столітті.
                </p>
                <p>
                    Ці захопливі ігри демонструють потужність консолей PlayStation та приносять
                    геймерам неперевершені враження завдяки новітній графіці, багатому контенту та
                    різноманітним ігровим жанрам.
                </p>
            </div>
            <div className={css.article_blok_button}>
                <BackButton />
                <Link className={css.article_button} href="/interesting-articles/choice">
                    <button type="button">Читати більше</button></Link>
            </div>
        </section>
    )
};

export default Top;