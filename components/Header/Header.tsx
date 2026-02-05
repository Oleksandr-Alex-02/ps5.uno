'use client';

import Link from "next/link";
import css from './Header.module.css';

import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [menuOpen]);

    const CloseMenu = () => {
        setMenuOpen(false)
    };


    return (
        <section className={`${css.navigation} ${scrolled ? css.scrolled : ""}`}>
            <nav className={css.nav}>
                <p className={css.title}>Оренда техніки у Києві +380958202612</p>

                {/* бургер кнопка */}
                <button
                    className={`${css.burger} ${menuOpen ? css.open : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <GiHamburgerMenu className={css.GiHamburgerMenu} />
                </button>

                {/* меню */}
                <ul className={`${css.ul} ${menuOpen ? css.show : ""}`}>
                    <li><Link href='/' onClick={CloseMenu}>Оренда ПС5</Link></li>
                    <li><Link href='/generator' onClick={CloseMenu}>Оренда генераторів</Link></li>
                    <li><Link href='/ninebot' onClick={CloseMenu}>Оренда електросамокатів</Link></li>
                    <li><a href='#pickup_location' onClick={CloseMenu}>Місцезнаходження</a></li>
                    <li><a href="tel:+380958202612" onClick={CloseMenu}>+380958202612</a></li>
                </ul>
            </nav>
        </section >
    );
};

export default Navigation;