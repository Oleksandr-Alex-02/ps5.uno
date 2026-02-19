
import Link from "next/link";
import css from './Footer.module.css';

const Footer = () => {

    return (
        <section>
            <footer className={css.footer}>
                <div className={css.footer_content}>
                    <div className={css.footer_left}>
                        <h4><Link href="/">ps5.uno</Link></h4>
                        <p>© 2026 Всі права захищені</p>
                    </div>

                    <div className={css.footer_center}>
                        <nav>
                            <ul className={css.footer_nav}>
                                <li><Link href="/">Головна</Link></li>
                                <li><Link href="/interesting-articles">Статті</Link></li>
                                <li>Контакти</li>
                                <li><a href="tel:+380958202612">+380958202612</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <address className={css.address}>
                            <h5>Наша адреса</h5>
                            <p><a href='#pickup_location' >Харківське шосе, 15А</a></p>
                            <p><a href='#pickup_location' >вул. Бакинська 37Д</a></p>
                        </address>
                    </div>

                    <div className={css.footer_right}>
                        <p>Сайт ствонений розробником:</p>
                        <div className={css.footer_social}>
                            <a href="https://github.com/Oleksandr-Alex-02" target="_blank">GitHub</a>
                            <a href="https://www.linkedin.com/in/chaikovskyi-oleksandr/" target="_blank">linkedin</a>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
};

export default Footer;