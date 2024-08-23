import BenefitsSection from "../components/benefits/benefits.jsx";
import WhyChooseUs from "../components/whyChooseUs/whyChooseUs.jsx";
import FAQ from "../components/faq/faq.jsx";
import ScrollAnimation from "../components/newssection/scrollAnimation.jsx";
import AboutComponent from "../components/aboutst/aboutst.jsx";

function AboutPage() {
  return (
    <>
      <AboutComponent />
      <BenefitsSection />
      <ScrollAnimation>
        <FAQ />
      </ScrollAnimation>
      <ScrollAnimation>
        <WhyChooseUs />
      </ScrollAnimation>
    </>
  );
}

export default AboutPage;
