
import css from './generator.module.css'
import { Bakunska } from '@/components/Address/Address';
import Generator from '@/components/Generators/GeneratorList';
import Phone from '@/components/Phone/Phone';
import Social from '@/components/Social/Social';

export const metadata = {
    title: "Оренда генераторів",
    description: "Оренда генераторів у Києві та Україні — вигідні умови, сучасне обладнання та повний комплект для роботи.",
    keywords: [
        "Оренда генераторів",
        "генератор",
        "оренда обладнання",
        "електрогенератор",
        "оренда Київ"
    ],
    openGraph: {
        title: "Оренда генераторів",
        description: "Оренда генераторів — сучасні моделі, повний комплект та вигідні умови.",
        url: "https://ps5-uno.vercel.app/generator",
        siteName: "UNO PlayStation Rental",
        images: [
            {
                url: "/generators/космо-генератори.png",
                width: 800,
                height: 600,
                alt: "Оренда генераторів",
            }
        ],
        locale: "uk_UA",
        type: "website",
    },
    alternates: {
        canonical: "https://ps5-uno.vercel.app/generator"
    }
}

const Generators = () => {

    return (
        <>
            <section className={css.container_generator}>
                <div className={css.hero}>
                    <h1 className={css.hero_title}>Оренда генераторів</h1>
                    <a className={css.hero_button} href="tel:+380958202612">Зателефонувати +380958202612</a>
                </div>
            </section>

            <Social />

            <Generator />

            <section id="pickup_location" className={css.rent_block}>
                <ul className={css.address}>
                    <Bakunska />
                </ul>
            </section>

            <Phone />
        </>
    );
};

export default Generators;