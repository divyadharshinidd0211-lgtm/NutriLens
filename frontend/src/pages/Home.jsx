import React from "react";
import { Link } from "react-router-dom";

function Home() {

  return (

    <main className="home-page">


      {/* =================================================
          HERO
          ================================================= */}

      <section className="hero-section">

        <div className="hero-content">

          <div className="status-pill">

            <span className="status-dot"></span>

            AI-POWERED NUTRITION SCREENING

          </div>


          <h1>

            See the signs.

            <span>
              Understand your nutrition.
            </span>

          </h1>


          <p className="hero-text">

            NutriLens uses AI-based computer vision to
            screen visible body features for possible
            micronutrient concerns and provide
            nutrition-focused guidance.

          </p>


          <div className="hero-actions">

            <Link
              to="/scan"
              className="primary-button hero-button"
            >

              Start a Scan

              <span>
                →
              </span>

            </Link>


            <Link
              to="/about"
              className="text-button"
            >

              Learn how it works

              <span>
                →
              </span>

            </Link>

          </div>


          <div className="hero-note">

            <span>
              ✓
            </span>

            Screening-focused
            <b>•</b>
            Nutrition guidance
            <b>•</b>
            Awareness tool

          </div>

        </div>



        {/* =================================================
            HERO AI VISUAL
            ================================================= */}

        <div className="hero-visual">

          <div className="visual-glow"></div>


          <div className="scan-card">

            <div className="scan-card-top">

              <span>
                NUTRILENS AI
              </span>

              <span className="analysis-status">
                ● READY
              </span>

            </div>


            <div className="scan-image-placeholder">

              <div className="face-outline">

                <div className="face-inner"></div>

              </div>


              <div className="scan-line"></div>


              <div className="scan-corner corner-one"></div>
              <div className="scan-corner corner-two"></div>
              <div className="scan-corner corner-three"></div>
              <div className="scan-corner corner-four"></div>

            </div>


            <div className="analysis-info">

              <div>

                <small>
                  SCREENING AREA
                </small>

                <strong>
                  Visible Features
                </strong>

              </div>


              <div className="analysis-icon">
                AI
              </div>

            </div>

          </div>



          {/* FLOATING CARD 1 */}

          <div className="floating-card floating-card-one">

            <span className="floating-icon">
              +
            </span>

            <div>

              <small>
                PROCESSING
              </small>

              <strong>
                Image Analysis
              </strong>

            </div>

          </div>



          {/* FLOATING CARD 2 */}

          <div className="floating-card floating-card-two">

            <div className="mini-progress">

              <span></span>

            </div>

            <div>

              <small>
                AI SCREENING
              </small>

              <strong>
                Pattern Detection
              </strong>

            </div>

          </div>


        </div>

      </section>



      {/* =================================================
          TRUST / STATS
          ================================================= */}

      <section className="trust-strip">

        <div>

          <strong>
            6
          </strong>

          <span>
            Scan areas
          </span>

        </div>


        <div>

          <strong>
            AI
          </strong>

          <span>
            Computer vision
          </span>

        </div>


        <div>

          <strong>
            01
          </strong>

          <span>
            Simple workflow
          </span>

        </div>


        <div>

          <strong>
            24/7
          </strong>

          <span>
            Accessible
          </span>

        </div>

      </section>



      {/* =================================================
          HOW IT WORKS
          ================================================= */}

      <section className="home-section">

        <div className="section-heading">

          <div>

            <div className="section-label">
              HOW IT WORKS
            </div>

            <h2>

              From image to

              <span>
                nutrition insight.
              </span>

            </h2>

          </div>


          <p>

            NutriLens turns a simple image upload into
            an easy-to-understand screening experience.

          </p>

        </div>



        <div className="steps-grid">


          <div className="step-card">

            <div className="step-number">
              01
            </div>

            <div className="step-icon">
              ↑
            </div>

            <h3>
              Upload
            </h3>

            <p>
              Select a visible body area and upload
              a clear image.
            </p>

          </div>



          <div className="step-card">

            <div className="step-number">
              02
            </div>

            <div className="step-icon">
              ◉
            </div>

            <h3>
              Analyze
            </h3>

            <p>
              The image is processed through the
              NutriLens AI screening pipeline.
            </p>

          </div>



          <div className="step-card">

            <div className="step-number">
              03
            </div>

            <div className="step-icon">
              +
            </div>

            <h3>
              Understand
            </h3>

            <p>
              Explore possible nutritional concerns,
              foods and general guidance.
            </p>

          </div>


        </div>

      </section>



      {/* =================================================
          BODY PARTS
          ================================================= */}

      <section className="body-section">

        <div className="section-heading centered">

          <div>

            <div className="section-label">
              WHAT CAN YOU SCAN?
            </div>

            <h2>

              Six visible areas.

              <span>
                One simple experience.
              </span>

            </h2>

          </div>

        </div>



        <div className="body-grid">

          {[

            [
              "01",
              "Nails",
              "Visible nail characteristics"
            ],

            [
              "02",
              "Tongue",
              "Visible tongue characteristics"
            ],

            [
              "03",
              "Skin",
              "Visible skin characteristics"
            ],

            [
              "04",
              "Eyes",
              "Visible eye characteristics"
            ],

            [
              "05",
              "Lips",
              "Visible lip characteristics"
            ],

            [
              "06",
              "Hair",
              "Visible hair characteristics"
            ],

          ].map(
            ([number, title, description]) => (

              <Link
                to="/scan"
                className="body-card"
                key={title}
              >

                <span className="body-number">
                  {number}
                </span>


                <div className="body-card-content">

                  <h3>
                    {title}
                  </h3>

                  <p>
                    {description}
                  </p>

                </div>


                <span className="body-arrow">
                  ↗
                </span>

              </Link>

            )
          )}

        </div>

      </section>



      {/* =================================================
          SAFETY MESSAGE
          ================================================= */}

      <section className="home-safety">

        <div className="home-safety-icon">
          !
        </div>

        <div>

          <span>
            IMPORTANT
          </span>

          <h2>
            NutriLens provides screening,
            not medical diagnosis.
          </h2>

          <p>
            Visual characteristics can have many causes.
            Results should be treated as awareness
            information and not as confirmation of a
            nutritional deficiency.
          </p>

        </div>


        <Link
          to="/disclaimer"
          className="text-button"
        >
          Read disclaimer →
        </Link>

      </section>



      {/* =================================================
          FINAL CTA
          ================================================= */}

      <section className="cta-section">

        <div>

          <div className="section-label light">
            START WITH NUTRILENS
          </div>

          <h2>
            Curious about what
            your image can reveal?
          </h2>

          <p>
            Upload an image and explore a possible
            nutritional concern with NutriLens.
          </p>

        </div>


        <Link
          to="/scan"
          className="cta-button"
        >

          Start Your Scan

          <span>
            →
          </span>

        </Link>

      </section>


    </main>

  );

}

export default Home;