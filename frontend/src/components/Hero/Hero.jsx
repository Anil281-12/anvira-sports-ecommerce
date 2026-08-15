import "./Hero.css";

import { useEffect, useState } from "react";

import cricketBanner from "../../assets/banners/cricket-Banner.jpg";
import badmintonBanner from "../../assets/banners/badminton-Banner.jpg";
import gymBanner from "../../assets/banners/gym-Banner.jpg";

function Hero() {

  const slides = [
    cricketBanner,
    badmintonBanner,
    gymBanner
  ];

  const [currentSlide, setCurrentSlide] = useState(0);


  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentSlide((previous) =>
        (previous + 1) % slides.length
      );

    }, 4000);

    return () => clearInterval(interval);

  }, [slides.length]);


  const previousSlide = () => {

    setCurrentSlide((previous) =>
      previous === 0
        ? slides.length - 1
        : previous - 1
    );

  };


  const nextSlide = () => {

    setCurrentSlide((previous) =>
      (previous + 1) % slides.length
    );

  };


  return (

    <section className="hero">

      {/* Background / Sports Image */}

      <img
        src={slides[currentSlide]}
        alt="Sports"
        className="hero-image"
      />


      {/* Light overlay */}

      <div className="hero-overlay"></div>


      {/* Hero Text */}

      <div className="hero-content">

        <h3>
          WELCOME TO
        </h3>

        <h1>
          ANVIRA SPORTS
        </h1>

        <h2>
          <span className="line">◆</span>
          Work Hard.
          <span> Train Well. 💪</span>
          <span className="line"> ◆</span>
        </h2>

        <p>
          Premium Sports Equipment • Fitness Accessories • Jerseys • Shoes
          <br />
          Everything You Need For Every Game
        </p>

        <button className="shop-button">
          Shop Collection&nbsp; →
        </button>

      </div>


      {/* Previous */}

      <button
        className="hero-arrow hero-left"
        onClick={previousSlide}
      >
        ‹
      </button>


      {/* Next */}

      <button
        className="hero-arrow hero-right"
        onClick={nextSlide}
      >
        ›
      </button>


      {/* Dots */}

      <div className="hero-dots">

        {slides.map((_, index) => (

          <span
            key={index}
            className={
              currentSlide === index
                ? "active"
                : ""
            }
            onClick={() =>
              setCurrentSlide(index)
            }
          ></span>

        ))}

      </div>

    </section>

  );

}

export default Hero;