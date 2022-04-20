import React, { useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from "swiper/react";
import { saveAs } from 'file-saver'

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import 'swiper/scss/navigation';
import 'swiper/scss/autoplay'

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper';

const data = [
    {
        id: 1,
        image: '../assets/images/1.jpg',
        alt: "exclusive-ct-1",
        link: "http://img.enderws.com/1.jpg",
    },
    {
        id: 2,
        image: '../assets/images/2.jpg',
        alt: "exclusive-ct-2",
        link: "http://img.enderws.com/2.jpg",
    },
    {
        id: 3,
        image: '../assets/images/3.jpg',
        alt: "exclusive-ct-3",
        link: "http://img.enderws.com/3.jpg",
    },
    {
        id: 4,
        image: '../assets/images/4.jpg',
        alt: "exclusive-ct-4",
        link: "http://img.enderws.com/4.jpg",
    },
    {
        id: 5,
        image: '../assets/images/5.jpg',
        alt: "exclusive-ct-5",
        link: "http://img.enderws.com/5.jpg",
    },
    {
        id: 6,
        image: '../assets/images/6.jpg',
        alt: "exclusive-ct-6",
        link: "http://img.enderws.com/6.jpg",
    },
    {
        id: 7,
        image: '../assets/images/7.jpg',
        alt: "exclusive-ct-7",
        link: "http://img.enderws.com/7.jpg",
    },
    {
        id: 8,
        image: '../assets/images/8.jpg',
        alt: "exclusive-ct-8",
        link: "http://img.enderws.com/8.jpg",
    },
    {
        id: 9,
        image: '../assets/images/9.jpg',
        alt: "exclusive-ct-9",
        link: "http://img.enderws.com/9.jpg",
    },
    {
        id: 10,
        image: '../assets/images/10.jpg',
        alt: "exclusive-ct-10",
        link: "http://img.enderws.com/10.jpg",
    },
    {
        id: 11,
        image: '../assets/images/11.jpg',
        alt: "exclusive-ct-11",
        link: "http://img.enderws.com/11.jpg",
    },
    {
        id: 12,
        image: '../assets/images/12.jpg',
        alt: "exclusive-ct-12",
        link: "http://img.enderws.com/12.jpg",
    },
]

export default function ExclusiveContent() {
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    const downloadHandler = (id, image) => {
        const imgName = `gameloft-image-${id}`
        saveAs(image, imgName)
    }

    return (
        <div className="exclusive-content">
            <div className="exclusive-content__title-wrapper">
                <div className="exclusive-content__title">
                    <h1>EXCLUSIVE GAME CONTENT</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, ut ipsum quis porro, eum voluptatem placeat laborum illum aspernatur natus adipisci cumque velit dicta reiciendis maxime impedit nemo praesentium quisquam.</p>
                </div>
            </div>
            <div className="exclusive-content__slider">
                <Swiper
                    slidesPerView={isMobile ? 1 : 3}
                    spaceBetween={200}
                    centeredSlides={isMobile ? true : false}
                    rewind={true}
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    autoplay={{
                        delay:3000,
                    }}
                    speed={800}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {data.map((content) => (
                        <SwiperSlide key={content.id} className="exclusive-content__slider__items">
                            <div className="exclusive-content__item">
                                <div className="exclusive-content__button">
                                    <i className="fas fa-download" onClick={() => downloadHandler(content.id, content.image)}></i>
                                </div>
                                <img src={content.image} alt={content.alt} className="exclusive-content__image" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
