
import Image from "next/image";
import GeneratorList from "./GeneratorList/GeneratorList";


const Generator = () => {

    return (
        <>
            <section>
                <h2></h2>
                <ul>
                    <li>
                        <Image
                            src="/generators/9965756.jpg.webp"
                            alt="Generator preview"
                            width={400}
                            height={300}
                            priority      // якщо це важливе зображення
                        />
                        <GeneratorList />
                    </li>
                    <li>
                        <Image
                            src="/generators/9965756.jpg.webp"
                            alt="Generator preview"
                            width={400}
                            height={300}
                            priority      // якщо це важливе зображення
                        />
                    </li>
                    <li>
                        <Image
                            src="/generators/9965756.jpg.webp"
                            alt="Generator preview"
                            width={400}
                            height={300}
                            priority      // якщо це важливе зображення
                        />
                    </li>
                    <li>
                        <Image
                            src="/generators/9965756.jpg.webp"
                            alt="Generator preview"
                            width={400}
                            height={300}
                            priority      // якщо це важливе зображення
                        />
                    </li>
                    <li>
                        <Image
                            src="/generators/9965756.jpg.webp"
                            alt="Generator preview"
                            width={400}
                            height={300}
                            priority      // якщо це важливе зображення
                        />
                    </li>
                    <li>
                        <Image
                            src="/generators/9965756.jpg.webp"
                            alt="Generator preview"
                            width={400}
                            height={300}
                            priority      // якщо це важливе зображення
                        />
                    </li>
                    <li>
                        <Image
                            src="/generators/9965756.jpg.webp"
                            alt="Generator preview"
                            width={400}
                            height={300}
                            priority      // якщо це важливе зображення
                        />
                    </li>
                    <li>
                        <Image
                            src="/generators/9965756.jpg.webp"
                            alt="Generator preview"
                            width={400}
                            height={300}
                            priority      // якщо це важливе зображення
                        />
                    </li>
                    <li>
                        <Image
                            src="/generators/9965756.jpg.webp"
                            alt="Generator preview"
                            width={400}
                            height={300}
                            priority      // якщо це важливе зображення
                        />
                    </li>
                </ul>
            </section>
        </>
    )
};

export default Generator;