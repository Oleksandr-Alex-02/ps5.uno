import { BsTelephone } from "react-icons/bs";
import { FaTelegram, FaInstagram, FaViber } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

import css from './Social.module.css'

const Social = () => {

    return (
        <ul >
            <li>
                <a href="https://t.me/username" target="_blank" rel="noopener noreferrer">
                    <BsTelephone className={css.icon} />
                </a>
            </li>
            <li>
                <a href="viber://chat?number=%2B380931234567" target="_blank" rel="noopener noreferrer">
                    <FaTelegram className={css.icon} />
                </a>
            </li>
            <li>
                <a href="https://wa.me/380931234567" target="_blank" rel="noopener noreferrer">

                    <AiFillTikTok className={css.icon} />
                </a>
            </li>
            <li>
                <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className={css.icon} />
                </a>
            </li>
            <li>
                <a href="https://www.tiktok.com/@username" target="_blank" rel="noopener noreferrer">
                    <FaViber className={css.icon} />
                </a>
            </li>
        </ul>
    )
}

export default Social;