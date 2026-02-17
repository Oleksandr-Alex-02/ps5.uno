
import css from './interesting.module.css'
import BackButton from "@/components/Buttons/BackButton";
import Economical from "@/components/Articles/ArticlesList/economical-and-convenient";
import Top from '@/components/Articles/ArticlesList/top';
import Rent from '@/components/Articles/ArticlesList/rent';
import Choice from '@/components/Articles/ArticlesList/choice';


type Props = {
    params: Promise<{ slug: string[] }>;
};

const NotesByCategory = async ({ params }: Props) => {

    const { slug } = await params;
    const category = slug[0] === 'all' ? undefined : slug[0];


    return (
        <div className={css.conteuner}>
            {category === 'economical-and-convenient' ? <Economical /> : ''}
            {category === 'rent' ? <Rent /> : ''}
            {category === 'top' ? <Top /> : ''}
            {category === 'choice' ? <Choice /> : ''}
            <BackButton />
        </div>
    );
};

export default NotesByCategory;
