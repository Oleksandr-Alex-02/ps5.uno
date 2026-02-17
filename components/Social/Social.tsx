import { BsTelephone } from "react-icons/bs";
import { FaTelegram, FaInstagram, FaViber } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

import css from './Social.module.css'

const Social = () => {

    return (
        <ul className={css.social}>
            <li className={css.li}>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <FaTelegram className={`${css.icon} ${css.icon_telegram}`} />
                </a>
            </li>
            <li className={css.li}>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <FaViber className={`${css.icon} ${css.icon_viber}`} />
                </a>
            </li>
            <li className={css.li}>
                <a href="tel:+380958202612">
                    <BsTelephone className={`${css.icon} ${css.icon_phone}`} />
                </a>
            </li>
            <li className={css.li}>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className={`${css.icon} ${css.icon_instagram}`} />
                </a>
            </li>
            <li className={css.li}>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <AiFillTikTok className={`${css.icon} ${css.icon_tiktok}`} />
                </a>
            </li>
        </ul>
    )
}


export default Social;