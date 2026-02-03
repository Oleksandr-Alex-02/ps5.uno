
import css from './GeneratorList.module.css'
import { generators } from "@/data/generators";
import GeneratorCard from "./GeneratorCard/GeneratorCard";

const Generator = () => {
    return (
        <section>
            <h2 className={css.title}>БЕНЗИНОВІ від 2кВт до 7.5кВт <a href="#pickup_location">(метро Дорогожичі)</a></h2>
            <ul className={css.grid}>
                {generators.map((gen, index) => (
                    <li key={index} className={css.card}>
                        <GeneratorCard gen={gen} />
                    </li>
                ))}
            </ul>
        </section>

    );
};

export default Generator;
