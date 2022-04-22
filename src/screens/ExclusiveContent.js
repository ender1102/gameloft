import React, { useEffect, useReducer, useRef, useState } from 'react'
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
import Axios from 'axios';
import LoadingBox from './../components/LoadingBox'
import MessageBox from './../components/MessageBox'

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, exContents: action.payload, loading: false }
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}

export default function ExclusiveContent() {
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    const downloadHandler = (content) => {
        const imgName = `gameloft-image-${content.id}`
        saveAs(content.image, imgName)
    }
    const [{ exContents, loading, error }, dispatch] = useReducer(reducer, {
        exContents: [],
        loading: true,
        error: ''
    })

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const { data } = await Axios.get('https://626106a8e7361dff91fdfbbb.mockapi.io/api/exclusivecontents')
                dispatch({ type: 'FETCH_SUCCESS', payload: data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message })
            }
        };
        fetchData();
    }, [])

    return (
        <section className="exclusive-content">
            <div className="exclusive-content__title-wrapper">
                <div className="exclusive-content__title">
                    <h1>EXCLUSIVE GAME CONTENT</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, ut ipsum quis porro, eum voluptatem placeat laborum illum aspernatur natus adipisci cumque velit dicta reiciendis maxime impedit nemo praesentium quisquam.</p>
                </div>
            </div>
            <div className="exclusive-content__slider">
                {
                    loading ? <LoadingBox />
                        :
                        error ? <MessageBox variant='danger'>{error}</MessageBox>
                            :
                            <Swiper
                                slidesPerView={isMobile ? 1 : 3}
                                spaceBetween={200}
                                centeredSlidesBounds={true}
                                rewind={false}
                                pagination={{
                                    type: 'fraction',
                                }}
                                navigation={true}
                                autoplay={{
                                    delay: 3000,
                                }}
                                speed={800}
                                modules={[Pagination, Navigation, Autoplay]}
                                className="mySwiper"
                            >
                                {exContents.map((content) => (
                                    <SwiperSlide key={content.id} className="exclusive-content__slider__items">
                                        <div className="exclusive-content__item">
                                            <div className="exclusive-content__button">
                                                <i className="fas fa-download" onClick={() => downloadHandler(content)}></i>
                                            </div>
                                            <img src={content.image} alt={content.alt} className="exclusive-content__image" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                }
            </div>
        </section>
    )
}
