import React from 'react';
import './Nutrition.css';

function Nutrition() {
  // Example macronutrient data
  const macronutrients = {
    calories: 2000,
    protein: 150, // grams
    carbs: 250,   // grams
    fat: 70       // grams
  };

  return (
    <div className="nutrition-container">
      <h1>Nutrition Overview</h1>
      <div className="section">
        <h2>Your Macronutrient Intake</h2>
        <div className="macronutrient-box">
          <div className="macronutrient">
            <p className="label">Calories:</p>
            <p className="value">{macronutrients.calories} kcal</p>
          </div>
          <div className="macronutrient">
            <p className="label">Protein:</p>
            <p className="value">{macronutrients.protein} g</p>
          </div>
          <div className="macronutrient">
            <p className="label">Carbohydrates:</p>
            <p className="value">{macronutrients.carbs} g</p>
          </div>
          <div className="macronutrient">
            <p className="label">Fat:</p>
            <p className="value">{macronutrients.fat} g</p>
          </div>
        </div>
      </div>
      <div className="section link-section">
        <p>Want to calculate your macros?</p>
        <a href="https://www.myfitnesspal.com/" target="_blank" rel="noopener noreferrer" className="myfitnesspal-link">
          Calculate Macros on MyFitnessPal
        </a>
      </div>
    </div>
  );
}

export default Nutrition;
