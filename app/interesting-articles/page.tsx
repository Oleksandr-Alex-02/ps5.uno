import Articles from '@/components/Articles/Articles';
import InDevelopment from '@/components/InDevelopment/InDevelopment'


const Interesting = () => {
    const isDevelopment = false;

    return (
        <section>
            {!isDevelopment ? <Articles /> : <InDevelopment />}
        </section>
    );
};

export default Interesting;
