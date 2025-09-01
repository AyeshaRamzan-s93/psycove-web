import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./SliderSection.css";

import img1 from "../../../../assets/Image.png";
import img2 from "../../../../assets/Image.png";

import leftArrow from "../../../../assets/chevron-left.png";
import rightArrow from "../../../../assets/next.png";

const SliderSection = () => {
  return (
    <div className="slider">
      <div className="slider-inner">
        <Swiper
          modules={[Navigation]}
          spaceBetween={25}
          slidesPerView={2} // shows 2 images
          slidesPerGroup={1} // scrolls 1 image at a time
          speed={800} 
          grabCursor={true}
          breakpoints={{
            320: { slidesPerView: 1, slidesPerGroup: 1 },
            768: { slidesPerView: 2, slidesPerGroup: 1 },
          }}
          navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
        >
          <SwiperSlide>
            <img src={img1} alt="slide-1" className="slide-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="slide-2" className="slide-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt="slide-1" className="slide-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="slide-2" className="slide-img" />
          </SwiperSlide>

          {/* Custom Navigation */}
          <div className="swiper-nav">
            <button className="custom-prev">
              <img src={leftArrow} alt="Left" />
            </button>
            <button className="custom-next">
              <img src={rightArrow} alt="Right" />
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default SliderSection;
