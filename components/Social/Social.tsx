

const Social = () => {

    return (
        <ul >
            <li>
                <a href="https://t.me/username" target="_blank" rel="noopener noreferrer">
                    <svg><use xlinkHref="sprite.svg#icon-telegram"></use></svg>
                </a>
            </li>
            <li>
                <a href="viber://chat?number=%2B380931234567" target="_blank" rel="noopener noreferrer">
                    <svg><use xlinkHref="sprite.svg#icon-viber"></use></svg>
                </a>
            </li>
            <li>
                <a href="https://wa.me/380931234567" target="_blank" rel="noopener noreferrer">
                    <svg><use xlinkHref="sprite.svg#icon-whatsapp"></use></svg>
                </a>
            </li>
            <li>
                <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer">
                    <svg><use xlinkHref="sprite.svg#icon-instagram"></use></svg>
                </a>
            </li>
            <li>
                <a href="https://www.tiktok.com/@username" target="_blank" rel="noopener noreferrer">
                    <svg><use xlinkHref="sprite.svg#icon-tiktok"></use></svg>
                </a>
            </li>
        </ul>
    )
}

export default Social;