import React from "react";
import './Class.css';
import GreetingCard from '../../Components/Card/Home';
import Navbar from "../../Components/Navbar/Navbar";
import ClassImg from '../Classes/img/class-img.jpg';
import CrossFit from './img/crossFit.jpg'
import KickBoxing from './img/cickboxing.webp';
import IndoorC from './img/IndoorC.jpg';
import ZumbaFit from './img/zumbaFit.jpg';
import PowerYoga from './img/poweryoga.jpg';
import Lifting from './img/Lifting.jpg';
function Class (){
    return(

        <div>
            <Navbar/>

            <img src={ClassImg} className="card-img"/>

            <div className="Card-Container">
                    <GreetingCard img={CrossFit}
                      head="CrossFit Group Trainning"
                      para="CrossFit is a high-intensity fitness program that incorporates elements from various disciplines, including weightlifting,
                       cardiovascular exercise, gymnastics,
                       and functional movements. It's known for its focus on overall fitness, constantly
                        varied workouts, and a sense of community. "
                    />

                    <GreetingCard img={KickBoxing}
                      head="KickBoxing"
                      para="Kickboxing is a dynamic and high-energy martial art that has gained popularity as a fitness activity,
                       often offered in gym settings. It combines elements of traditional boxing with kicks,
                       knee strikes, and sometimes elbows, providing a full-body workout.  Whack them Fitness Struggles and Grow Strong!"
                    />
                 
               

                    <GreetingCard img={IndoorC}
                      head="Indoor Cycling"
                      para="Indoor cycling, often referred to as spinning, is a popular and effective group fitness activity
                       that takes place on stationary bikes. These classes are commonly offered in gyms and fitness studios and 
                       provide a cardiovascular workout with benefits for both endurance and strength  SWEAT TO A DIFFERENT BEAT"
                    />
                </div>
                    
                   
                   <div className="Card-Container">

                        <GreetingCard img={ZumbaFit}
                            head="Zumba Fitness"
                            para=" Zumba fitness is a popular and energetic workout program that combines dance movements with aerobic exercise,
                            often conducted in a group setting. It has gained widespread popularity
                            in gym settings as a fun and effective way to improve cardiovascular fitness, burn calories, 
                            and enhance overall well-being.SWEAT TO A DIFFERENT BEAT"
                        /> 

                        <GreetingCard img={PowerYoga}
                         head="Power Yoga"
                         para="Power yoga is a dynamic and physically intense form of yoga that is often practiced in gym settings 
                          as a part of fitness routines. It blends traditional
                          yoga postures with elements of strength training, cardiovascular exercise, and flexibility movements. "
                        />

                        <GreetingCard img={Lifting}
                          head="Power Lifting"
                           para=" Lifting in the gym, commonly referred to as weightlifting or strength training, is a form of exercise that involves 
                           the use of resistance to induce muscular contraction. This activity is centered around lifting and moving weights, 
                           such as dumbbells, barbells, kettlebells, 
                           or resistance machines, with the goal of increasing muscle strength, endurance, and overall fitness. "
                        />   


                    </div>    

        </div>

    )
}

export default Class;