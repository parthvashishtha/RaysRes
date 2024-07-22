import FAQ from "./components/faq/faq";
import Navbar from "./components/navbar/navbar";
import NewsSection from "./components/newssection/newsection";
import Footer from "./components/footer/footer";
import ReviewList from "./components/reviews/reviewList";
import ScrollAnimation from "./components/newssection/scrollAnimation";
import Carousel from "./components/slidebars/Slider";
import SolarPanelAnimation from "./components/home_animation/home_animation";

function App() {
  return (
    <>
      <Navbar />;
      <Carousel />
      <SolarPanelAnimation />
      <ScrollAnimation>
        <NewsSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <FAQ />
      </ScrollAnimation>
      <ScrollAnimation>
        <ReviewList />
      </ScrollAnimation>
      <Footer />
    </>
  );
}

export default App;
