import React, { useState, useEffect } from 'react';
import { 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  StarIcon 
} from '@heroicons/react/24/solid';
import './TestmonialSlider.css';
import { Link } from 'react-router';

const TestmonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  
  const testimonials = [
    {
      id: 1,
      name: "Moges",
      location: "Jimma",
      rating: 5.0,
      text: "Em truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.",
      avatarColor: "#4f46e5"
    },
    {
      id: 2,
      name: "Irana",
      location: "Hawassa",
      rating: 4.5,
      text: "I had a fantastic experience working with Em. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!",
      avatarColor: "#059669"
    },
    {
      id: 3,
      name: "Getch",
      location: "Addis Ababa",
      rating: 5.0,
      text: "Em made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step of the process. I couldn't be happier with my new home!",
      avatarColor: "#dc2626"
    },
    {
      id: 4,
      name: "Kebebeka",
      location: "Adama",
      rating: 4.8,
      text: "As a first-time home buyer, I was nervous about the process. Em's team made everything so easy and transparent. They found me a perfect apartment in my budget.",
      avatarColor: "#7c3aed"
    },
    {
      id: 5,
      name: "Efeson",
      location: "Bahir Dar",
      rating: 5.0,
      text: "The level of service from Em is incredible. They understood exactly what I was looking for and found properties I never would have discovered on my own. 10/10 experience!",
      avatarColor: "#0ea5e9"
    }
  ];

  // Function to render star rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    
    return (
      <div className="stars-container">
        {[...Array(fullStars)].map((_, i) => (
          <StarIcon key={`full-${i}`} className="star-icon full" />
        ))}
        {halfStar && <StarIcon className="star-icon half" />}
        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <StarIcon key={`empty-${i}`} className="star-icon empty" />
        ))}
        <span className="rating-text">{rating.toFixed(1)}</span>
      </div>
    );
  };

 
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };


  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };


    
  

  return (
    <div 
      className="testimonials-slider-container" 
      
    >
      <div className="testimonials-header">
        <h1 className="testimonials-title">What People Say</h1>
        <h2 className="testimonials-subtitle">About EM</h2>
        <div className="title-divider"></div>
      </div>

      <div className="slider-wrapper">
        <button className="slider-nav-btn prev-btn" onClick={prevSlide} aria-label="Previous testimonial">
          <ChevronLeftIcon className="nav-icon" />
        </button>
        
        <div className="slider-container">
          <div 
            className="slider-track" 
            style={{ 
              transform: `translateX(-${currentSlide * (100 / 3)}%)` 
            }}
          >
            {testimonials.map((testimonial, index) => {
              const isActive = index === currentSlide;
              const position = index - currentSlide;
              
              return (
                <div 
                  key={testimonial.id} 
                  className={`slide ${isActive ? 'active' : ''} ${position < 0 ? 'prev' : position > 0 ? 'next' : ''}`}
                  data-position={position}
                >
                  <div className="testimonial-card">
                    <div className="testimonial-header">
                      <div 
                        className="avatar" 
                        style={{ backgroundColor: testimonial.avatarColor }}
                      >
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="client-info">
                        <h3 className="client-name">{testimonial.name}</h3>
                        <p className="client-location">{testimonial.location}</p>
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    
                    <div className="testimonial-body">
                      <p className="testimonial-text">"{testimonial.text}"</p>
                    </div>
                    
                    <div className="testimonial-quote">
                      <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 20V13.3333C0 9.11111 1.66667 5.22222 5 1.66667L10 0V6.66667C6.66667 7.55556 5 9.77778 5 13.3333H10V20H0ZM20 20V13.3333C20 9.11111 21.6667 5.22222 25 1.66667L30 0V6.66667C26.6667 7.55556 25 9.77778 25 13.3333H30V20H20Z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <button className="slider-nav-btn next-btn" onClick={nextSlide} aria-label="Next testimonial">
          <ChevronRightIcon className="nav-icon" />
        </button>
      </div>

      <div className="slider-indicators">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    <div className='explore-btn'>
      <Link className='btn' to="/properties">Explore Properties</Link>
    </div>
    
    </div>
  );
};

export default TestmonialSlider;