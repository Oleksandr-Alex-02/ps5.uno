import InDevelopment from '@/components/InDevelopment/InDevelopment'


const Ninebot = () => {
    const isDevelopment = true;
    // const isDevelopment = false;

    return (
        <section>
            {isDevelopment ? <InDevelopment /> : ""}
        </section>
    );
};

export default Ninebot;