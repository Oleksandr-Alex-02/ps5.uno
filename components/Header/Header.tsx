// 'use client';


// import Link from "next/link";
// import css from './Header.module.css'

// import { useEffect, useState } from "react";

// const Navigation = () => {
//     const [scrolled, setScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setScrolled(window.scrollY > 50); // якщо прокрутка більше 50px
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     return (
//         <section className={`${css.navigation} ${scrolled ? css.scrolled : ""}`}>
//             <nav className={css.nav}>
//                 <p className={css.title}>Оренда техніки у Києві +380958202612</p>
//                 <ul className={css.ul}>
//                     <li><Link href='/'>Оренда ПС5</Link></li>
//                     <li><Link href='/generator'>Оренда генераторів</Link></li>
//                     <li><Link href='/ninebot'>Оренда електросамокатів</Link></li>
//                     <li><a href='#pickup_location'>Місцезнаходження</a></li>
//                     <li><a href="tel:+380958202612">+380958202612</a></li>
//                 </ul>
//             </nav>
//         </section>
//     )
// }

// export default Navigation;


'use client';

import Link from "next/link";
import css from './Header.module.css';
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
                    <span />
                    <span />
                    <span />
                </button>
                {/* </nav> */}

                {/* меню */}
                <ul className={`${css.ul} ${menuOpen ? css.show : ""}`}>
                    <li><Link href='/' onClick={CloseMenu}>Оренда ПС5</Link></li>
                    <li><Link href='/generator' onClick={CloseMenu}>Оренда генераторів</Link></li>
                    <li><Link href='/ninebot' onClick={CloseMenu}>Оренда електросамокатів</Link></li>
                    <li><a href='#pickup_location' onClick={CloseMenu}>Місцезнаходження</a></li>
                    <li><a href="tel:+380958202612" onClick={CloseMenu}>+380958202612</a></li>
                </ul>
            </nav>

            {/* {
                menuOpen && (
                    <div className={css.modal}>
                        <div className={css.backdrop} onClick={CloseMenu}></div>
                        <div className={css.modalContent}>
                            <ul className={css.ul}>
                                <li><Link href='/' onClick={CloseMenu}>Оренда ПС5</Link></li>
                                <li><Link href='/generator' onClick={CloseMenu}>Оренда генераторів</Link></li>
                                <li><Link href='/ninebot' onClick={CloseMenu}>Оренда електросамокатів</Link></li>
                                <li><a href='#pickup_location' onClick={CloseMenu}>Місцезнаходження</a></li>
                                <li><a href="tel:+380958202612" onClick={CloseMenu}>+380958202612</a></li>
                            </ul>
                        </div>
                    </div>
                )
            } */}

        </section >
    );
};

export default Navigation;