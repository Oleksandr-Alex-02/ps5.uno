"use client";

import css from './BackButton.module.css'
import { useRouter } from 'next/navigation';

const BackButton = () => {
    const router = useRouter();

    return (
        <button className={css.button} type="button" onClick={() => router.back()}>
            Повернутися Назад
        </button>
    );
};

export default BackButton;