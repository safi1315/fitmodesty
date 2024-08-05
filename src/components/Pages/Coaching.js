import React from "react";
import '../../App.css';
import './Coaching.css';

function Coaching() {
  return (
    <div>
      <MainSection />
      <ReviewsSection />
      <TrainersSection />
    </div>
  );
}

// Main Section
function MainSection() {
  return (
    <div className="main-section-container">
      <main className="text">
        Sign up for coaching today. Get your first 3 months free!
        <a href="https://forgedwarriorfitness.com/workout-plans/p/personalized-workout-plan" className="fitness-link">
          Your Fitness Plan
        </a>
      </main>
    </div>
  );
}

// Reviews Section
function ReviewsSection() {
  return (
    <div className="middle-two">
      <h1>What people have to say about our coaches...</h1>
      <p className="coach-review">
        "Coach Reynolds is a great coach who cares about his clients deeply" - Anonymous
      </p>
      <p className="coach-review">
        "Coach Rony is awesome! Always pushing me to my limits!" - Cynthia
      </p>
      <p className="coach-review">
        "Coach Diva makes sure I am comfortable and makes me feel safe!" - Lydia
      </p>
      <p className="coach-review">
        "Coach Rony has made me feel more confident than ever!" - Anonymous
      </p>
    </div>
  );
}

function TrainersSection() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="person">
            <img src="/images/man_1.jpeg" alt="Roby Bob fitness description" />
            <p>Rony Bob</p>
            <p>Age: 52</p>
            <p>Personal fitness trainer for 20+ years. Working with you to meet any and all of your fitness goals.</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="person">
            <img src="/images/women.jpeg" alt="Diva Lake fitness description" />
            <p>Diva Lake</p>
            <p>Age: 35</p>
            <p>Personal fitness trainer for 10+ years. Helping you to meet your goals. Focus on strength training and pilates.</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="person">
            <img src="/images/man_2.jpeg" alt="Mark Reynolds fitness description" />
            <p>Mark Reynolds</p>
            <p>Age: 29</p>
            <p>Personal fitness trainer for 5 years. Focus on weight loss.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coaching;
