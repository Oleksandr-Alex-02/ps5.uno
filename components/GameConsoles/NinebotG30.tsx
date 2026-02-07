// import Image from "next/image";

import css from './GameConsoles.module.css'


const NinebotG30 = () => {

    return (
        <section>
            <div className={css.rent_block}>

                {/* Sony PlayStation 5 */}
                <div className={`${css.rent_item} ${css.ps5}`}>
                    {/* <Image
                        src="/ninebotG30.jpg"
                        alt="Generator preview"
                        width={200}
                        height={200}
                        priority      // якщо це важливе зображення
                    /> */}
                    <h2 className={css.rent_title}>Ninebot G30</h2>

                    <h4 className={css.deposit_label}>Запас ходу 65км</h4>

                    <p className={css.deposit_label}>Застава</p>
                    <p className={css.deposit_option}>
                        - З документами - 8000грн/200$ або USDT + фізичний оригінал документа
                        (який відображений в застосунку Дія)
                    </p>
                    <p className={css.deposit_option}>
                        - Без документів - 20000грн/500$ або USDT
                    </p>

                    <h3 className={css.price_title}>Вартість оренди</h3>
                    <ul className={css.price_list}>
                        <li className={css.price_item}>- 1 доба - 1000 грн (24 години)</li>
                        <li className={css.price_item}>- Від 2 діб - 700  грн (500 грн/доба)</li>
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default NinebotG30;