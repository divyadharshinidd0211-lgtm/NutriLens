import React from "react";
import { Link, useLocation } from "react-router-dom";

function DietPlan() {

  const location = useLocation();

  const result = location.state;


  // If no scan data exists

  if (!result) {

    return (

      <main className="diet-page">

        <div className="no-result-card">

          <div className="no-result-icon">
            ?
          </div>

          <div className="section-label">
            NUTRILENS
          </div>

          <h1>
            No diet plan available
          </h1>

          <p>
            Complete a NutriLens scan first to generate
            your suggested nutrition plan.
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


  const diet =
    result.recommendation.diet_plan;


  const nutrient =
    result.recommendation.nutrient;


  return (

    <main className="diet-page">


      {/* HEADER */}

      <section className="diet-header">

        <div>

          <div className="section-label">
            DAILY NUTRITION GUIDE
          </div>

          <h1>
            Your suggested
            <span>daily meal plan.</span>
          </h1>

          <p>
            A general sample meal plan created from your
            NutriLens screening result and nutrient focus.
          </p>

        </div>


        <div className="diet-focus-badge">

          <span>
            NUTRIENT FOCUS
          </span>

          <strong>
            {nutrient}
          </strong>

        </div>

      </section>



      {/* SCREENING SUMMARY */}

      <section className="diet-summary">

        <div className="diet-summary-icon">
          ✓
        </div>

        <div>

          <span>
            PLAN BASED ON SCREENING
          </span>

          <h2>
            {result.prediction.deficiency}
          </h2>

          <p>
            This plan provides general food suggestions
            related to the identified nutritional concern.
          </p>

        </div>

      </section>



      {/* MEAL PLAN */}

      <section className="meal-plan-section">

        <div className="meal-heading">

          <div>

            <span>
              01
            </span>

            <h2>
              Today's meals
            </h2>

          </div>

          <p>
            A simple balanced structure for your day
          </p>

        </div>


        <div className="meal-grid">


          {/* BREAKFAST */}

          <article className="meal-card">

            <div className="meal-card-top">

              <div className="meal-icon">
                B
              </div>

              <span>
                01
              </span>

            </div>

            <div className="meal-time">
              MORNING
            </div>

            <h3>
              Breakfast
            </h3>

            <p>
              {diet.breakfast}
            </p>

            <div className="meal-line"></div>

            <small>
              Start your day with a nourishing meal.
            </small>

          </article>



          {/* LUNCH */}

          <article className="meal-card featured-meal">

            <div className="meal-card-top">

              <div className="meal-icon">
                L
              </div>

              <span>
                02
              </span>

            </div>

            <div className="meal-time">
              MIDDAY
            </div>

            <h3>
              Lunch
            </h3>

            <p>
              {diet.lunch}
            </p>

            <div className="meal-line"></div>

            <small>
              Include nutrient-rich foods in your main meal.
            </small>

          </article>



          {/* SNACK */}

          <article className="meal-card">

            <div className="meal-card-top">

              <div className="meal-icon">
                S
              </div>

              <span>
                03
              </span>

            </div>

            <div className="meal-time">
              AFTERNOON
            </div>

            <h3>
              Snack
            </h3>

            <p>
              {diet.snack}
            </p>

            <div className="meal-line"></div>

            <small>
              Choose a simple nutrient-rich snack.
            </small>

          </article>



          {/* DINNER */}

          <article className="meal-card">

            <div className="meal-card-top">

              <div className="meal-icon">
                D
              </div>

              <span>
                04
              </span>

            </div>

            <div className="meal-time">
              EVENING
            </div>

            <h3>
              Dinner
            </h3>

            <p>
              {diet.dinner}
            </p>

            <div className="meal-line"></div>

            <small>
              Finish the day with a balanced meal.
            </small>

          </article>


        </div>

      </section>



      {/* DAILY REMINDER */}

      <section className="daily-reminder">

        <div className="reminder-icon">
          +
        </div>

        <div>

          <span>
            NUTRILENS REMINDER
          </span>

          <h2>
            Focus on overall dietary balance.
          </h2>

          <p>
            A single nutrient is only one part of a healthy
            diet. Aim for variety across vegetables, fruits,
            whole grains, legumes, nuts, seeds, and other
            appropriate food sources.
          </p>

        </div>

      </section>



      {/* DISCLAIMER */}

      <section className="diet-disclaimer">

        <div className="diet-warning-icon">
          !
        </div>

        <div>

          <strong>
            This is a general dietary suggestion
          </strong>

          <p>
            NutriLens does not create personalized medical
            diet plans. This meal plan is generated for
            educational and awareness purposes based on
            the screening result. It does not confirm a
            deficiency and should not replace professional
            medical advice or clinical testing.
          </p>

        </div>

      </section>



      {/* ACTIONS */}

      <section className="diet-actions">

        <Link
          to="/recommendations"
          state={result}
          className="secondary-button"
        >
          ← Back to Recommendations
        </Link>

        <Link
          to="/scan"
          className="primary-button"
        >
          Scan Another Image
          <span>→</span>
        </Link>

      </section>


    </main>

  );

}

export default DietPlan;