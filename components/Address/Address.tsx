
import css from './Address.module.css'

export const Bakunska = () => {
    return (
        <div className={css.pickup_block}>
            <p className={css.pickup_text}>
                На правому березі можна забрати замовлення за адресою:
            </p>
            <p className={css.pickup_address}>вул. Бакинська 37Д</p>

            <iframe
                className={css.pickup_map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.7557430997904!2d30.448601876062572!3d50.4828907850281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cdbe6241a091%3A0xed241229aa322e75!2z0LLRg9C70LjRhtGPINCR0LDQutC40L3RgdGM0LrQsCwgMzfQlCwg0JrQuNGX0LIsIDA0MDg2!5e0!3m2!1suk!2sua!4v1769608234024!5m2!1suk!2sua"
                width="450"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    )
};

export const KharkivHighway = () => {

    return (
        <div className={css.pickup_block}>
            <p className={css.pickup_text}>На лівому березі чекатимемо вас тут:</p>
            <p className={css.pickup_address}>Харківське шосе, 15А</p>
            <iframe
                className={css.pickup_map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.3579647849588!2d30.6347681!3d50.434432699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c54043ba9233%3A0xa606d34e0143523c!2z0KXQsNGA0LrRltCy0YHRjNC60LUg0YjQvtGB0LUsIDE10LAsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1769608480745!5m2!1suk!2sua"
                width="450"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
};