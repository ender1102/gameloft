import React, { useEffect, useReducer, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from "swiper/react";
import Axios from 'axios'
import LoadingBox from './../components/LoadingBox'
import MessageBox from './../components/MessageBox'


// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import 'swiper/scss/navigation';
import 'swiper/scss/autoplay'

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper';

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, news: action.payload, loading: false }
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}

export default function Community() {
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
    const [searchInput, setSearchInput] = useState()
    const [{ news, loading, error }, dispatch] = useReducer(reducer, {
        news: [],
        loading: true,
        error: ''
    })

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const { data } = await Axios.get('https://626106a8e7361dff91fdfbbb.mockapi.io/api/news')
                dispatch({ type: 'FETCH_SUCCESS', payload: data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message })
            }
        };
        fetchData();
    }, [])

    const SocialButtonHandler = (social) => {
        if (social === 'facebook') {
            return (<i className="fab fa-facebook-square" ></i>)
        } else if (social === 'instagram') {
            return (<i className="fab fa-instagram-square"></i>)
        } else if (social === 'youtube') {
            return (<i className="fab fa-youtube"></i>)
        }
    }

    return (
        <>
            <section className="community">
                <div className="community__title-wrapper">
                    <div className="community__title">
                        <h1>GAME COMMUNITY HUB</h1>
                        <h3>Live Game Updates</h3>
                    </div>
                </div>
                <div className="live-game__slider">
                    {
                        loading ? <LoadingBox />
                            :
                            error ? <MessageBox variant='danger'>{error}</MessageBox>
                                :
                                <Swiper
                                    slidesPerView={isMobile ? 3 : 6}
                                    spaceBetween={isMobile ? 10 : 80}
                                    centeredSlidesBounds={false}
                                    rewind={false}
                                    navigation={true}
                                    autoplay={{
                                        delay: 3000,
                                    }}
                                    speed={800}
                                    modules={[Navigation, Autoplay]}
                                    className="mySwiper"
                                >
                                    {news.map((data) => (
                                        <SwiperSlide key={data.id} className="live-game__slider__items" >
                                            <div className="live-game__slider__item">
                                                <a href={data.url} target="_blank" rel="noreferrer noopener">
                                                    <div className="live-game__slider__image" style={{
                                                        backgroundImage: `url(${data.image})`,
                                                        backgroundPosition: 'center',
                                                        backgroundSize: 'cover',
                                                    }}>
                                                    </div>
                                                </a>
                                                <div className="live-game__slider__content">
                                                    <h3>{data.title}</h3>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                    }
                </div>
                <div className="community__title__2-wrapper">
                    <h3>All Posts</h3>
                    <div className="community__title__2">
                        <div className="community__title__2__social-icons">
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram-square" ></i>
                            <i className="fab fa-facebook-square" ></i>
                        </div>
                        <div className="community__title__2__search-container">
                            <form >
                                <input type="text" id="search" name="search" placeholder='Search..' onChange={(e) => setSearchInput(e.target.value)} required></input>
                                <span type="submit"><i className="fa fa-search"></i></span>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="community__title__2-mobile-wrapper">
                    <div className="community__title__2-mobile">
                        <h3>All Posts</h3>
                        <div className="community__title__2-mobile__social-icons">
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram-square" ></i>
                            <i className="fab fa-facebook-square" ></i>
                        </div>
                    </div>
                    <div className="community__title__2-mobile__search-container">
                        <form >
                            <input type="text" id="search" name="search" placeholder='Search..' onChange={(e) => setSearchInput(e.target.value)} required></input>
                            <span type="submit"><i className="fa fa-search"></i></span>
                        </form>
                    </div>
                </div>
                <div className="community__slider">
                    {
                        loading ? <LoadingBox />
                            :
                            error ? <MessageBox variant='danger'>{error}</MessageBox>
                                :
                                <Swiper
                                    slidesPerView={isMobile ? 1 : 5}
                                    spaceBetween={50}
                                    centeredSlidesBounds={false}
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
                                    {news.map((data) => (
                                        <SwiperSlide key={data.id} className="community__slider__items" style={{
                                            backgroundImage: `url(${data.image})`,
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                        }}>
                                            <div className="community__slider__item">
                                                <div className="community__slider__social">
                                                    <a href={data.url} target="_blank" rel="noreferrer noopener">
                                                        {SocialButtonHandler(data.social)}
                                                    </a>
                                                </div>
                                                <div className="community__slider__button">
                                                    <i className="fas fa-share-alt"></i>
                                                </div>
                                                <div className="community__slider__content">
                                                    <p>{data.content}</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                    }
                </div>
            </section>
        </>
    )
}
