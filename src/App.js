import FAQ from "./components/faq/faq";
import Navbar from "./components/navbar/navbar";
import NewsSection from "./components/newssection/newsection";
import Slider from "./components/slidebars/home_main_slidebar";
import Footer from "./components/footer/footer";
import ReviewList from "./components/reviews/reviewList";

function App() {
  return (
    <>
      <Navbar />;
      <Slider />
      <NewsSection />
      <FAQ />
      <ReviewList />
      <Footer />
    </>
  );
}

export default App;
