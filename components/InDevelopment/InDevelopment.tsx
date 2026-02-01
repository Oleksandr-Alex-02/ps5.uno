import css from './InDevelopment.module.css';

const UnderConstruction = () => {
    return (
        <section className={css.construction_section}>
            <div className={css.construction_block}>
                <h1 className={css.construction_title}>Сторінка в розробці</h1>
                <p className={css.construction_text}>
                    Ми працюємо над оновленням цього розділу.
                    Будь ласка, завітайте пізніше!
                </p>
                <div className={css.construction_icon}>🚧</div>
            </div>
        </section>
    );
};

export default UnderConstruction;