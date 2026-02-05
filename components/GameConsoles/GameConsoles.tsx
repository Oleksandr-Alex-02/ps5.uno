import Image from "next/image";

import css from './GameConsoles.module.css'


const Console = () => {

    return (
        <section>
            <p className={css.info_title}>
                <span><a href="">Оренда Sony PlayStation 5</a> з іграми на двох, вигідні</span>
                умови та доступні тарифи</p>

            <div className={css.rent_block}>

                {/* Sony PlayStation 5 */}
                <div className={`${css.rent_item} ${css.ps5}`}>
                    <Image
                        src="/ps-5.png"
                        alt="Generator preview"
                        width={200}
                        height={200}
                        priority      // якщо це важливе зображення
                    />
                    <h2 className={css.rent_title}>Sony PlayStation 5:</h2>

                    <p className={css.deposit_label}>Застава</p>
                    <p className={css.deposit_option}>
                        - з документами - 8000грн/200$(usdt) + фізичний оригінал документа
                        (який відображений в застосунку Дія)
                    </p>
                    <p className={css.deposit_option}>
                        - Без документів - 20000грн/500$(usdt)
                    </p>

                    <h3 className={css.price_title}>Вартість оренди</h3>
                    <ul className={css.price_list}>
                        <li className={css.price_item}>- 1 доба - 600 грн (24 години)</li>
                        <li className={css.price_item}>- 2 доби - 1000 грн (500 грн/доба)</li>
                        <li className={css.price_item}>- 3 доби - 1350 грн (450 грн/доба)</li>
                        <li className={css.price_item}>- 5+ діб - 2000+ грн (400 грн/доба)</li>
                        <li className={css.price_item}>- 1 тиждень (7 діб) - 2500 грн (375 грн/доба)</li>
                        <li className={css.price_item}>- 2 тижні (14 діб) - 4900 грн (350 грн/доба)</li>
                        <li className={css.price_item}>- 1 місяць (30 діб) - 7500 грн (250 грн/доба)</li>
                        <li className={css.price_item}>
                            Кожен наступний день, що перевищує 1 місяць (30 діб) - 250 грн
                        </li>
                    </ul>
                </div>

                {/* Sony PlayStation 4 Pro */}
                <div className={`${css.rent_item} ${css.ps4pro}`}>
                    <Image
                        src="/cropped-cropped-598d1d58478800a22818f0a7a4994d5b-1.png"
                        alt="Generator preview"
                        width={200}
                        height={200}
                        priority      // якщо це важливе зображення
                    />
                    <h2 className={css.rent_title}>Sony PlayStation 4 Pro:</h2>

                    <p className={css.deposit_label}>Застава</p>
                    <p className={css.deposit_option}>
                        - З документами - 4000грн/100$(usdt)+ фізичний оригінал документа
                        (який відображений в застосунку Дія)
                    </p>
                    <p className={css.deposit_option}>
                        - Без документів - 12000грн/300$(usdt)
                    </p>

                    <h3 className={css.price_title}>Вартість оренди</h3>
                    <ul className={css.price_list}>
                        <li className={css.price_item}>- 1 доба - 400 грн</li>
                        <li className={css.price_item}>- 2 доби - 600 грн (300 грн/доба)</li>
                        <li className={css.price_item}>- 3 доби - 750 грн (250 грн/доба)</li>
                        <li className={css.price_item}>- 5+ діб - 900+ грн (180 грн/доба)</li>
                        <li className={css.price_item}>- 1 тиждень (7 діб) - 1260 грн (180 грн/доба)</li>
                        <li className={css.price_item}>- 1 місяць (30 діб) - 3000 грн (100 грн/доба)</li>
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default Console;