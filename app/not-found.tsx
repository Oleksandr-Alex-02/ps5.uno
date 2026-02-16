
import NotFound404 from '@/components/NotFound/NotFound';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Сторінку не знайдено | ps5.uno',
    description: 'Запитувана сторінка не існує',
};

export default function NotFound() {
    return (
        <NotFound404 />
    );
}