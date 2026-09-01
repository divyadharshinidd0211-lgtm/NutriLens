import React from "react";
import { Link, useLocation } from "react-router-dom";

function Recommendations() {

  const location = useLocation();

  const result = location.state;


  // If no scan result was passed

  if (!result) {

    return (

      <main className="recommendations-page">

        <div className="no-result-card">

          <div className="no-result-icon">
            ?
          </div>

          <div className="section-label">
            NUTRILENS
          </div>

          <h1>
            No recommendation available
          </h1>

          <p>
            Complete a NutriLens scan first to receive
            nutrition recommendations.
          </p>

          <Link
            to="/scan"
            className="primary-button"
          >
            Start a Scan →
          </Link>

        </div>

      </main>

    );

  }


  const recommendation =
    result.recommendation;


  return (

    <main className="recommendations-page">


      {/* HEADER */}

      <section className="recommendation-header">

        <div>

          <div className="section-label">
            NUTRITION SUPPORT
          </div>

          <h1>
            Nutrition guidance
            <span>for your result.</span>
          </h1>

          <p>
            Explore nutrient-rich foods and general dietary
            suggestions related to your NutriLens screening.
          </p>

        </div>


        <div className="nutrient-badge">

          <span>
            NUTRIENT
          </span>

          <strong>
            {recommendation.nutrient}
          </strong>

        </div>

      </section>



      {/* RESULT SUMMARY */}

      <section className="nutrition-summary">

        <div className="summary-icon">
          N
        </div>

        <div>

          <span>
            BASED ON YOUR SCREENING
          </span>

          <h2>
            {result.prediction.deficiency}
          </h2>

          <p>
            These recommendations are intended for general
            nutrition support and should not be treated as
            medical treatment.
          </p>

        </div>

      </section>



      {/* FOOD SECTION */}

      <section className="nutrition-section">

        <div className="nutrition-section-heading">

          <div>

            <span className="section-number">
              01
            </span>

            <h2>
              Foods to explore
            </h2>

          </div>

          <p>
            Natural food sources of {recommendation.nutrient}
          </p>

        </div>


        <div className="food-grid-modern">

          {recommendation.foods.map(
            (food, index) => (

              <div
                className="modern-food-card"
                key={index}
              >

                <div className="food-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="food-symbol">
                  +
                </div>

                <h3>
                  {food}
                </h3>

                <p>
                  Nutrient-rich food option
                </p>

              </div>

            )
          )}

        </div>

      </section>



      {/* SUGGESTIONS */}

      <section className="nutrition-section suggestions-section">

        <div className="nutrition-section-heading">

          <div>

            <span className="section-number">
              02
            </span>

            <h2>
              Nutrition suggestions
            </h2>

          </div>

          <p>
            Simple habits to support a balanced diet
          </p>

        </div>


        <div className="suggestions-modern">

          {recommendation.suggestions.map(
            (suggestion, index) => (

              <div
                className="modern-suggestion"
                key={index}
              >

                <div className="suggestion-check">
                  ✓
                </div>

                <div>

                  <span>
                    TIP {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>
                    {suggestion}
                  </p>

                </div>

              </div>

            )
          )}

        </div>

      </section>



      {/* NEXT STEP */}

      <section className="diet-next-card">

        <div className="diet-next-content">

          <span>
            NEXT STEP
          </span>

          <h2>
            Turn these recommendations
            into a meal plan.
          </h2>

          <p>
            Explore a suggested breakfast, lunch, snack,
            and dinner plan based on your screening result.
          </p>

        </div>


        <Link
          to="/diet-plan"
          state={result}
          className="primary-button diet-plan-button"
        >
          View Diet Plan
          <span>→</span>
        </Link>

      </section>



      {/* SAFETY */}

      <section className="nutrition-disclaimer">

        <div className="nutrition-warning-icon">
          !
        </div>

        <div>

          <strong>
            Nutrition guidance, not medical treatment
          </strong>

          <p>
            NutriLens recommendations are general educational
            suggestions based on the screening result. They
            cannot confirm a nutrient deficiency or replace
            professional medical advice, laboratory testing,
            or a personalized diet plan from a qualified
            professional.
          </p>

        </div>

      </section>


    </main>

  );
}

export default Recommendations;