import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { SliderContainer } from './style';



function MySwiper (props) {



    const { bannerList } = props;

    return (

        <SliderContainer>{bannerList.length ? <Swiper
            className="slider-container"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}

            pagination={{ clickable: true }}

            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >

            {bannerList.map((item, index) => {
                return (<SwiperSlide key={index}><img src={item.imageUrl} width="100%" height="100%" alt="推荐" /></SwiperSlide>)
            })}
            <div className="swiper-pagination"></div>
        </Swiper> : null}
            <div className="before"></div>
        </SliderContainer>
    )
}


export default React.memo(MySwiper) 