
import css from './Equipment.module.css'

const Equipment = () => {

    return (
        <section className={css.bundleSection}>
            <h2 className={css.bundleTitle}>Оренда ігрової консолі PlayStation передбачає надання повного комплекту обладнання, необхідного для комфортного геймінгу</h2>
            <ul className={css.bundleList}>
                <li className={css.bundleItem}>
                    <h3 className={css.bundleHeading}>Повний комплект обладнання</h3>
                    <p className={css.bundleText}>
                        Оренда передбачає надання всього необхідного для комфортного геймінгу.
                    </p>
                </li>
                <li className={css.bundleItem}>
                    <h3 className={css.bundleHeading}>Обирайте бажану модель</h3>
                    <p className={css.bundleText}>
                        Потужна PlayStation 5 або легендарна PlayStation 4 Pro.
                    </p>
                </li>
                <li className={css.bundleItem}>
                    <h3 className={css.bundleHeading}>Два сучасні геймпади</h3>
                    <p className={css.bundleText}>
                        Ви одразу отримуєте 2 бездротові контролери, тоді як у стандартному наборі лише 1.
                    </p>
                </li>
                <li className={css.bundleItem}>
                    <h3 className={css.bundleHeading}>Великий асортимент ігор</h3>
                    <p className={css.bundleText}>
                        Доступ до вже куплених хітів на будь-який смак — грайте онлайн без додаткових витрат.
                    </p>
                </li>
                <li className={css.bundleItem}>
                    <h3 className={css.bundleHeading}>PlayStation Plus</h3>
                    <p className={css.bundleText}>
                        Підписка з перевагою гри онлайн разом із живими геймерами по всьому світу.
                    </p>
                </li>
            </ul>
            <p className={css.bundleSummary}>
                Орендуючи PlayStation, ви одразу отримуєте все необхідне обладнання та програмне забезпечення для повноцінного досвіду гри. Занурюйтесь у сюжети, відчувайте адреналін від баталій та грайте онлайн з друзями вже сьогодні!
            </p>
        </section>
    )
};

export default Equipment;