import InDevelopment from '@/components/InDevelopment/InDevelopment'


const Interesting = () => {
    const isDevelopment = true;
    // const isDevelopment = false;

    return (
        <section>
            {isDevelopment ? <InDevelopment /> : ""}
        </section>
    );
};

export default Interesting;
