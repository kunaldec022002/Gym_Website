import React, { useState } from "react";
import crossFit from '../../Views/Classes/img/crossFit.jpg'
import './ImageSlider.css';


const Images = [
     'https://backtomotion.net/wp-content/uploads/2020/01/Battle-Ropes-Crossfit-Workout-1024x680.jpg',
     'https://www.fit19.com/hubfs/Cycle-GallerySliderImages-804x526px.png',
     'https://krishnasportsacademy.com/wp-content/uploads/2016/08/Power-Yoga-classes-in-delhi.jpg',
     'https://www.muscleandfitness.com/wp-content/uploads/2020/05/Skinny-Young-Man-Exercising-With-A-Barbell.jpg?quality=86&strip=all',
     'https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20201116162519/iStock-680886440-scaled.jpg',
     'https://www.powermmafitness.com/wp-content/uploads/2018/05/Top-4-Kick-Boxing-Workouts-620x420@2x.jpg'
];

function ImageSlider (){

    const [currentIndex , setCurrentIndex] = useState(0);

    const nextSlide = ()=>{
        setCurrentIndex((prevIndex)=>(prevIndex +1)% Images.length);

    };

    const prevSlide = ()=>{
        setCurrentIndex((prevIndex)=>( prevIndex-1 + Images.length)% Images.length);

    };

    return (
        <div className="app">
      <button onClick={prevSlide} className="prev-btn">Previous</button>
      <img src={Images[currentIndex]} alt={`Slide ${currentIndex}`} className="slider-image" />
      <button onClick={nextSlide}className="next-btn">Next</button>
    </div>
  );
    
}

export default ImageSlider;