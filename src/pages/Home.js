import Carousel from "../components/slidebars/Slider.jsx";
import SolarPanelAnimation from "../components/home_animation/home_animation.jsx";
import Form from "../components/form/form.jsx";
import NewsSection from "../components/newssection/newsection.jsx";
import CompanySection from "../components/companysection/companysection.jsx";
import ReviewList from "../components/reviews/reviewList.jsx";
import ScrollAnimation from "../components/newssection/scrollAnimation.jsx";
// import Advertisement from "../components/advertisements/advertisement.jsx";
import Adslider from "../components/adslider/adslider.jsx";

function HomePage() {
  return (
    <>
      <Carousel />
      <SolarPanelAnimation />
      <ScrollAnimation>
        <Form />
      </ScrollAnimation>
      <ScrollAnimation>
        <NewsSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <CompanySection />
      </ScrollAnimation>
      <ScrollAnimation>
        <ReviewList />
      </ScrollAnimation>
      <Adslider />
    </>
  );
}

export default HomePage;
