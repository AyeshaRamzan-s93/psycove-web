

// src/pages/Home/Home.jsx

import SliderSection from "./sections/SliderSection/SliderSection";
import AboutUsPreview from "./sections/AboutUsPreview/AboutUsPreview";
import HeroSection from "./sections/Hero/Hero";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUsPreview />
      <SliderSection />
    </>
  );
};

export default Home;
