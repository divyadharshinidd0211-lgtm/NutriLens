import React from "react";
import { Link, useLocation } from "react-router-dom";

function Results() {

  const location = useLocation();

  const result = location.state;


  // If the user opens /results directly
  // without performing a scan first

  if (!result) {

    return (

      <main className="results-page">

        <div className="no-result-card">

          <div className="no-result-icon">
            ?
          </div>

          <p className="section-label">
            NUTRILENS
          </p>

          <h1>
            No scan result found
          </h1>

          <p>
            You need to complete an image scan before
            viewing your screening results.
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


  // Convert confidence from decimal to percentage

  const confidence =
    result.prediction.confidence * 100;


  return (

    <main className="results-page">


      {/* HEADER */}

      <section className="results-header">

        <div>

          <div className="section-label">
            ANALYSIS COMPLETE
          </div>

          <h1>
            Your screening
            <span>results are ready.</span>
          </h1>

          <p>
            NutriLens has completed an AI-based screening
            of your submitted image.
          </p>

        </div>


        <div className="complete-badge">

          <span>
            ✓
          </span>

          Scan Complete

        </div>

      </section>



      {/* RESULT GRID */}

      <section className="result-grid">


        {/* MAIN RESULT */}

        <div className="main-result-card">

          <div className="result-card-top">

            <div>

              <span className="result-label">
                SCREENING RESULT
              </span>

              <p className="body-part-result">
                Analyzed body part:
                <strong>
                  {result.body_part}
                </strong>
              </p>

            </div>


            <div className="result-status">
              AI
            </div>

           </div>
            {/* SCANNED IMAGE */}

            <div className="result-image-section">

            <span className="result-label">
                SCANNED IMAGE
            </span>

            {result.imagePreview ? (

                <img
                src={result.imagePreview}
                alt={`Scanned ${result.body_part}`}
                className="result-image"
                />

            ) : (

                <div className="image-placeholder">

                <div>
                    {result.body_part?.charAt(0)}
                </div>

                <span>
                    Image analyzed
                </span>

                </div>

            )}

            </div>

          <div className="result-divider"></div>


          <div className="result-content">

            <span className="concern-label">
              POSSIBLE NUTRITIONAL CONCERN
            </span>

            <h2>
              {result.prediction.deficiency}
            </h2>

            <p>
              This result represents a possible nutritional
              concern identified by the screening model.
            </p>

          </div>


          {/* CONFIDENCE */}

          <div className="confidence-section">

            <div className="confidence-header">

              <div>

                <span>
                  AI screening confidence
                </span>

                <small>
                  Model prediction score
                </small>

              </div>

              <strong>
                {confidence.toFixed(0)}%
              </strong>

            </div>


            <div className="confidence-bar">

              <div
                className="confidence-fill"
                style={{
                  width: `${confidence}%`
                }}
              ></div>

            </div>


            <div className="confidence-scale">

              <span>
                Low
              </span>

              <span>
                Moderate
              </span>

              <span>
                Higher
              </span>

            </div>

          </div>


          {/* MESSAGE */}

          <div className="result-message-box">

            <div className="message-icon">
              i
            </div>

            <div>

              <strong>
                Important
              </strong>

              <p>
                {result.prediction.message}
              </p>

            </div>

          </div>

        </div>



        {/* SIDE PANEL */}

        <aside className="result-side-card">

          <div className="side-card-heading">

            <span>
              NUTRILENS
            </span>

            <div className="ai-circle">
              AI
            </div>

          </div>


          <div className="result-visual">

            <div className="visual-circle-large">

              <div className="visual-circle-small">

                <span>
                  {confidence.toFixed(0)}
                </span>

                <small>
                  %
                </small>

              </div>

            </div>

          </div>


          <h3>
            What happens next?
          </h3>

          <p className="side-description">
            Use this screening result as a starting point
            for exploring nutrition-focused recommendations.
          </p>


          <div className="next-step">

            <div>
              01
            </div>

            <span>
              Review nutrition guidance
            </span>

          </div>


          <div className="next-step">

            <div>
              02
            </div>

            <span>
              Explore suggested foods
            </span>

          </div>


          <div className="next-step">

            <div>
              03
            </div>

            <span>
              View your suggested diet plan
            </span>

          </div>

        </aside>

      </section>



      {/* ACTIONS */}

      <section className="result-actions">

        <Link
          to="/recommendations"
          state={result}
          className="primary-button"
        >
          View Nutrition Recommendations
          <span>→</span>
        </Link>


        <Link
          to="/scan"
          className="secondary-button"
        >
          ← Scan Another Image
        </Link>

      </section>



      {/* DISCLAIMER */}

      <section className="result-disclaimer">

        <div className="disclaimer-symbol">
          !
        </div>

        <div>

          <strong>
            Remember: NutriLens is a screening tool
          </strong>

          <p>
            A visual screening result cannot confirm a
            nutritional deficiency. If you have concerns
            about your health or symptoms, consult a
            qualified healthcare professional and consider
            appropriate clinical testing.
          </p>

        </div>

      </section>


    </main>

  );
}

export default Results;