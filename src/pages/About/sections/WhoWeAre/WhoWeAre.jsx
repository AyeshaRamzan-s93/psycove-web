
import "./WhoWeAre.css";

// images from assets
import smallImg from "../../../../assets/Who.png";
import rightImg1 from "../../../../assets/group.png";
import rightImg2 from "../../../../assets/group.png";
import rightImg3 from "../../../../assets/group.png";
import arrowIcon from "../../../../assets/chevron-right.png";
import prevIcon from "../../../../assets/chevron-left.png";
import nextIcon from "../../../../assets/next.png";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const WhoWeAre = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-content">
          {/* Left Section */}
          <div className="about-left">
            <img src={smallImg} alt="About small" className="about-small" />
            <h2>Growing with Every Story Shared</h2>
            <p>
              We are a team of licensed psychologists, therapists, and mental
              health professionals dedicated to helping individuals navigate
              life’s challenges with compassion and clarity. <br /> <br />Whether you're
              seeking support for anxiety, depression, relationship struggles,
              burnout, or simply want to grow.
            </p>

            <div className="about-buttons">
              <button className="learn-more-btn">
                Learn More
                <span className="circle-btn">
                  <img src={arrowIcon} alt="arrow" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Section with Slider */}
          <div className="about-right">
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={20}
              loop={false}
              speed={800}
              grabCursor={true}
              navigation={{
                prevEl: ".about-prev",
                nextEl: ".about-next",
              }}
              className="about-swiper"
            >
              <SwiperSlide>
                <img src={rightImg1} alt="Slide 1" className="about-slide-img" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={rightImg2} alt="Slide 2" className="about-slide-img" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={rightImg3} alt="Slide 3" className="about-slide-img" />
              </SwiperSlide>
            </Swiper>

            {/* Custom Nav Buttons */}
            <div className="about-arrows">
              <button className="about-prev">
                <img src={prevIcon} alt="Previous" />
              </button>
              <button className="about-next">
                <img src={nextIcon} alt="Next" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
