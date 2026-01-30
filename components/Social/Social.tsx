import { BsTelephone } from "react-icons/bs";
import { FaTelegram, FaInstagram, FaViber } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

import css from './Social.module.css'

const Social = () => {

    return (
        <ul className={css.social}>
            <li className={css.li}>
                <a href="https://t.me/mxiaomi" target="_blank" rel="noopener noreferrer">
                    <FaTelegram className={css.icon_telegram} />
                </a>
            </li>
            <li className={css.li}>
                <a href="viber://chat?number=%2B380931234567" target="_blank" rel="noopener noreferrer">
                    <FaViber className={css.icon_viber} />
                </a>
            </li>
            <li className={css.li}>
                <a href="tel:+380958202612">
                    <BsTelephone className={css.icon_phone} />
                </a>
            </li>
            <li className={css.li}>
                <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className={css.icon_instagram} />
                </a>
            </li>
            <li className={css.li}>
                <a href="https://www.tiktok.com/@username" target="_blank" rel="noopener noreferrer">
                    <AiFillTikTok className={css.icon_tiktok} />
                </a>
            </li>
        </ul>
    )
}



export default Social;