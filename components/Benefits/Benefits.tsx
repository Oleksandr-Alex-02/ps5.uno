
import css from './Benefits.module.css'


const Benefits = () => {

    return (
        <section className={css.benefitsSection}>
            <h2 className={css.benefitsTitle}>Переваги оренди PlayStation</h2>
            <ul className={css.benefitsList}>
                <li className={css.benefitItem}>
                    <h3 className={css.benefitHeading}>Економія коштів</h3>
                    <p className={css.benefitText}>
                        Не потрібно витрачати велику суму на покупку консолі.
                    </p>
                </li>
                <li className={css.benefitItem}>
                    <h3 className={css.benefitHeading}>Що входить в комплект?</h3>
                    <p className={css.benefitText}>
                        Оренда PlayStation включає все необхідне для гри: консоль, контролер, кабелі та доступ до ігор.
                    </p>
                </li>
                <li className={css.benefitItem}>
                    <h3 className={css.benefitHeading}>Широкий вибір</h3>
                    <p className={css.benefitText}>
                        Можливість спробувати різні ігри, не купуючи їх.
                    </p>
                </li>
                <li className={css.benefitItem}>
                    <h3 className={css.benefitHeading}>Модель на вибір</h3>
                    <p className={css.benefitText}>
                        Доступні для оренди як Sony PlayStation 4 Pro, так і новіша Sony PlayStation 5.
                    </p>
                </li>
                <li className={css.benefitItem}>
                    <h3 className={css.benefitHeading}>Гнучкість</h3>
                    <p className={css.benefitText}>
                        Оренда на будь-який термін — від однієї доби до кількох місяців.
                    </p>
                </li>
            </ul>
        </section>
    )
};

export default Benefits;
