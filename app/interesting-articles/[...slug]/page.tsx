
import css from './interesting.module.css';

import Economical from "@/components/Articles/ArticlesList/economical-and-convenient";
import Top from '@/components/Articles/ArticlesList/top';
import Rent from '@/components/Articles/ArticlesList/rent';
import Choice from '@/components/Articles/ArticlesList/choice';
import PlayStationOnHoliday from '@/components/Articles/ArticlesList/playstation-on-holiday';
import HotHits from '@/components/Articles/ArticlesList/hot-hits';
import RentBuy from '@/components/Articles/ArticlesList/rent-vs-buy';
import ConvenientRental from '@/components/Articles/ArticlesList/convenient-rental';


type ArticalProps = {
    params: Promise<{ slug: string[] }>;
};

const InterestingArticals = async ({ params }: ArticalProps) => {
    const { slug } = await params;
    const artical = slug[0] === 'all' ? undefined : slug[0];


    return (
        <section className={css.conteuner}>
            <div className={css.artical_fon}></div>
            {artical === 'economical-and-convenient' ? <Economical /> : ''}
            {artical === 'rent' ? <Rent /> : ''}
            {artical === 'top' ? <Top /> : ''}
            {artical === 'choice' ? <Choice /> : ''}
            {artical === 'playstation-on-holiday' ? <PlayStationOnHoliday /> : ''}
            {artical === 'hot-hits' ? <HotHits /> : ''}
            {artical === 'rent-vs-buy' ? <RentBuy /> : ''}
            {artical === 'convenient-rental' ? <ConvenientRental /> : ''}
        </section >

    );
};

export default InterestingArticals;
