import React, { useEffect, useReducer, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from "swiper/react";
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/autoplay'


// import required modules
import { Pagination, Autoplay } from "swiper";
import Axios from 'axios';
import LoadingBox from './../components/LoadingBox'
import MessageBox from './../components/MessageBox'
import ChangingProgress from './../components/ChangingProgress'

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, events: action.payload, loading: false }
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}

export default function Event() {
    const percentage = 66;
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            const span = '<span class="' + className + '">' + (index + 1) + "</span>"
            return span
        },
    }

    const [{ events, loading, error }, dispatch] = useReducer(reducer, {
        events: [],
        loading: true,
        error: ''
    })

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const { data } = await Axios.get('https://626106a8e7361dff91fdfbbb.mockapi.io/api/events')
                dispatch({ type: 'FETCH_SUCCESS', payload: data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message })
            }
        };
        fetchData();
    }, [])

    return (
        <section className="event">
                  
            <div className="event__title-wrapper">
                <div className="event__title">
                    <h1>SPEACIAL EVENTS & PROMOTIONAL</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, ut ipsum quis porro, eum voluptatem placeat laborum illum aspernatur natus adipisci cumque velit dicta reiciendis maxime impedit nemo praesentium quisquam.</p>
                </div>
            </div>
            <div className="event__slider">
                {
                    loading ? <LoadingBox />
                        :
                        error ? <MessageBox variant='danger'>{error}</MessageBox>
                            :
                            <>
                                <Swiper
                                    slidesPerView={isMobile ? 1 : 'auto'}
                                    spaceBetween={isMobile ? 20 : 50}
                                    centeredSlides={true}
                                    loop={true}
                                    autoplay={{
                                        delay: 3000,
                                    }}
                                    speed={800}
                                    // rewind={true}
                                    pagination={pagination}
                                    /* pagination={{
                                        el: '.swiper-pagination',
                                        clickable: true,
                                        type: 'bullets',
                                        renderBullet: function (index, className) {
                                            return '<span class="' + className + '">' + (index + 1) + "</span>"
                                        }
                                    }} */
                                    modules={[Pagination, Autoplay]}
                                    className="mySwiper"
                                >
                                    {events.map((event) => (
                                        <SwiperSlide key={event.id} className="event__slider__items" style={{ backgroundImage: `url(${event.image})` }}>
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
                                            <div className="event__slider__items__button" >
                                                <a href={event.url} target="_blank" rel="noreferrer noopener">READ MORE
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                {/* <div className="swiper-pagination" /> */}
                            </>
                }
            </div>
        </section>
    )
}


