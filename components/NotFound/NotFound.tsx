"use client";

import css from './NotFound.module.css'

import BackButton from "../Buttons/BackButton";
import MainButton from "../Buttons/MainButton";

const NotFound404 = () => {

    return (
        <section>
            <div className={css.error}>
                <h1>404</h1>
                <h2>Сторінку не знайдено</h2>
                <p>На жаль, сторінку, яку ви шукаєте, не існує або була переміщена.</p>
                <div className={css.blok_button}>
                    <BackButton />
                    <MainButton />
                </div>
            </div>
        </section>
    )
}

export default NotFound404;