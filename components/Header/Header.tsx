'use client';


import Link from "next/link";
import css from './Header.module.css'

import { useEffect, useState } from "react";

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50); // якщо прокрутка більше 50px
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className={`${css.navigation} ${scrolled ? css.scrolled : ""}`}>
            <nav className={css.title}>
                <p className={css.pp}>Оренда техніки у Києві +380958202612</p>
                <ul className={css.ul}>
                    <li><Link href='/'>Оренда ПС5</Link></li>
                    <li><Link href='/generator'>Оренда генераторів</Link></li>
                    <li><Link href='/ninebot'>Оренда електросамокатів</Link></li>
                    <li><Link href='/interesting-articles'>Місцезнаходження</Link></li>
                    <li><a href="tel:+380958202612">+380958202612</a></li>
                </ul>
            </nav>
        </section>
    )
}

export default Navigation;