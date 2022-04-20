import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";

// import required modules
import { Pagination } from "swiper";

const data = [
    {
        id: 1,
        title: 'SHORT TITLE HERE',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, ut ipsum quis porro, eum voluptatem placeat laborum illum aspernatur natus adipisci cumque velit dicta reiciendis maxime impedit nemo praesentium quisquam.',
        image: '', link: "",
    },
    {
        id: 2,
        title: 'SHORT TITLE HERE 2',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, ut ipsum quis porro, eum voluptatem placeat laborum illum aspernatur natus adipisci cumque velit dicta reiciendis maxime impedit nemo praesentium quisquam.',
        image: '', link: "",
    },
    {
        id: 3,
        title: 'SHORT TITLE HERE 3',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores',
        image: '', link: "",
    },
    {
        id: 4,
        title: 'SHORT TITLE HERE 4',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, ut ipsum quis porro, eum voluptatem placeat laborum illum aspernatur natus adipisci cumque velit dicta reiciendis maxime impedit nemo praesentium quisquam.',
        image: '', link: "",
    },
    {
        id: 5,
        title: 'SHORT TITLE HERE 5',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, ut ipsum quis porro, eum voluptatem placeat laborum illum aspernatur natus adipisci cumque velit dicta reiciendis maxime impedit nemo praesentium quisquam.',
        image: '', link: "",
    },
]

export default function Event() {
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    return (
        <div className="event">
            <div className="event__title-wrapper">
                <div className="event__title">
                    <h1>SPEACIAL EVENTS & PROMOTIONAL</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, ut ipsum quis porro, eum voluptatem placeat laborum illum aspernatur natus adipisci cumque velit dicta reiciendis maxime impedit nemo praesentium quisquam.</p>
                </div>
            </div>
            <div className="event__slider">
                <Swiper
                    slidesPerView={isMobile ? 1 : 4}
                    spaceBetween={isMobile ? 20 : 50}
                    centeredSlides={false}
                    rewind={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {data.map((event) => (
                        <SwiperSlide key={event.id} className="event__slider__items">
                            <div className="event__slider__items__title-wrapper">
                                <div className="event__slider__items__title">
                                    <h2>{event.title}</h2>
                                </div>
                                <div className="event__slider__items__title-share">
                                    <i className="fas fa-share-alt"></i>
                                </div>
                            </div>
                            <div className="event__slider__items__line">__________</div>
                            <div className="event__slider__items__content">
                                {event.content}
                            </div>
                            <div className="event__slider__items__button">

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
