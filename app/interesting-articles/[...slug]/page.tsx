
import css from './interesting.module.css';

import BackButton from "@/components/Buttons/BackButton";
import Economical from "@/components/Articles/ArticlesList/economical-and-convenient";
import Top from '@/components/Articles/ArticlesList/top';
import Rent from '@/components/Articles/ArticlesList/rent';
import Choice from '@/components/Articles/ArticlesList/choice';
import PlayStationOnHoliday from '@/components/Articles/ArticlesList/playstation-on-holiday';
import HotHits from '@/components/Articles/ArticlesList/hot-hits';
import RentBuy from '@/components/Articles/ArticlesList/rent-vs-buy';
import ConvenientRental from '@/components/Articles/ArticlesList/convenient-rental';


type Props = {
    params: Promise<{ slug: string[] }>;
};

const NotesByCategory = async ({ params }: Props) => {

    const { slug } = await params;
    const category = slug[0] === 'all' ? undefined : slug[0];


    return (
        <section className={css.conteuner}>
            {category === 'economical-and-convenient' ? <Economical /> : ''}
            {category === 'rent' ? <Rent /> : ''}
            {category === 'top' ? <Top /> : ''}
            {category === 'choice' ? <Choice /> : ''}
            {category === 'playstation-on-holiday' ? <PlayStationOnHoliday /> : ''}
            {category === 'hot-hits' ? <HotHits /> : ''}
            {category === 'rent-vs-buy' ? <RentBuy /> : ''}
            {category === 'convenient-rental' ? <ConvenientRental /> : ''}
        </section >

    );
};

export default NotesByCategory;
