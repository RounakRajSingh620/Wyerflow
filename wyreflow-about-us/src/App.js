import "./styles/about.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GlanceTabs from "./components/GlanceTabs";
import VisionSlider from "./components/VisionSlider";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <GlanceTabs/>
      <VisionSlider/>
      <CTA/>
      <FAQ/>
      <Footer />

    </>
  );
}

export default App;
