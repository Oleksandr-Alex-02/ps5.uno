'use client';
import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './Swiper.module.css';

const SwiperSlider = () => {
    return (
        <section>
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                loop={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image src="/ninebot/ninebot-1.jpg" alt="PS5" width={400} height={300} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/ninebot/ninebot-2.jpg" alt="PS5" width={400} height={300} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/ninebot/ninebot-3.jpg" alt="PS5" width={400} height={300} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/ninebot/ninebot-4.jpg" alt="PS5" width={400} height={300} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/ninebot/ninebot-5.jpg" alt="PS5" width={400} height={300} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/ninebot/ninebot-6.jpg" alt="PS5" width={400} height={300} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/ninebot/ninebot-7.jpg" alt="PS5" width={400} height={300} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/ninebot/ninebot-8.jpg" alt="PS5" width={400} height={300} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/ninebot/ninebot-9.jpg" alt="PS5" width={400} height={300} />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default SwiperSlider;