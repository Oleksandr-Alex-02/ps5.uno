"use client";

import css from './BackButton.module.css'
import { useRouter } from 'next/navigation';

const BackButton = () => {
    const router = useRouter();

    return (
        <button className={css.BackButton} type="button" onClick={() => router.back()}>
            Назад
        </button>
    );
};

export default BackButton;