import Link from "next/link";

const Navigation = () => {

    return (
        <section>
            <nav>
                <p>Оренда техніки у Києві +380958202612</p>
                <ul>
                    <li><Link href='/'>Оренда ПС5</Link></li>
                    <li><Link href='/generator'>Оренда генераторів</Link></li>
                    <li><Link href='/ninebot'>Оренда електросамокатів</Link></li>
                    <li><Link href='/interesting-articles'>Місцезнаходження</Link></li>
                    <li>+380958202612</li>
                </ul>
            </nav>
        </section>
    )
}

export default Navigation;