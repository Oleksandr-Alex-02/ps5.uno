import Articles from '@/components/Articles/Articles';
import InDevelopment from '@/components/InDevelopment/InDevelopment'

const Interesting = () => {
    // const isDevelopment = false;
    const isDevelopment = true;


    return (
        <section>
            {!isDevelopment ? <Articles /> : <InDevelopment />}
        </section>
    );
};

export default Interesting;
