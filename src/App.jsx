import "./App.css";
import Header from "./components/header/Header";
import Virtual from "./components/virtual/Virtual";
import Hero from "./components/Hero/Hero";
import Slider from "./components/slider/Slider";
import Products from "./components/Products/Products";
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonial />
      <Footer />

    </div>
  );
}

export default App;
