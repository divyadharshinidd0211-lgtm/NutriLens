import React from "react";
function About() {

  return (

    <main className="about-page">


      {/* =================================================
          HERO
          ================================================= */}

      <section className="about-hero">

        <div className="about-hero-content">

          <div className="section-label">
            ABOUT NUTRILENS
          </div>

          <h1>
            Making nutrition
            <span>awareness more accessible.</span>
          </h1>

          <p>
            NutriLens is an AI-powered nutrition-support
            application designed to provide preliminary
            screening and awareness around possible
            micronutrient concerns.
          </p>

        </div>


        <div className="about-hero-card">

          <div className="about-orbit">

            <div className="orbit-center">
              N
            </div>

            <span className="orbit-dot dot-one"></span>
            <span className="orbit-dot dot-two"></span>
            <span className="orbit-dot dot-three"></span>

          </div>


          <div>

            <small>
              NUTRILENS AI
            </small>

            <h3>
              Image → Insight
            </h3>

            <p>
              A simple AI-assisted screening workflow.
            </p>

          </div>

        </div>

      </section>



      {/* =================================================
          WHAT IS NUTRILENS
          ================================================= */}

      <section className="about-intro">

        <div className="about-intro-label">

          <span>
            01
          </span>

          <p>
            THE CONCEPT
          </p>

        </div>


        <div className="about-intro-content">

          <h2>
            Turning visible observations
            into a starting point for
            nutrition awareness.
          </h2>

          <p>
            Nutritional deficiencies can sometimes be
            associated with visible changes in areas such
            as nails, skin, tongue, eyes, lips, or hair.
            However, these visual characteristics can also
            have many other causes.
          </p>

          <p>
            NutriLens explores how computer vision and
            machine learning can be used as an accessible
            first-level screening and educational tool.
          </p>

        </div>

      </section>



      {/* =================================================
          HOW NUTRILENS WORKS
          ================================================= */}

      <section className="about-process">

        <div className="section-heading">

          <div>

            <div className="section-label">
              THE TECHNOLOGY
            </div>

            <h2>
              Inside the
              <span>NutriLens pipeline.</span>
            </h2>

          </div>

          <p>
            From the uploaded image to nutrition-focused
            recommendations.
          </p>

        </div>



        <div className="pipeline">


          <div className="pipeline-step">

            <span>
              01
            </span>

            <div className="pipeline-icon">
              ↑
            </div>

            <h3>
              Image Upload
            </h3>

            <p>
              The user selects a visible body area and
              uploads a suitable image.
            </p>

          </div>



          <div className="pipeline-line"></div>



          <div className="pipeline-step">

            <span>
              02
            </span>

            <div className="pipeline-icon">
              ◇
            </div>

            <h3>
              Preprocessing
            </h3>

            <p>
              The uploaded image is prepared for analysis
              through image-processing steps.
            </p>

          </div>



          <div className="pipeline-line"></div>



          <div className="pipeline-step">

            <span>
              03
            </span>

            <div className="pipeline-icon">
              AI
            </div>

            <h3>
              AI Screening
            </h3>

            <p>
              A computer-vision model analyzes the image
              and produces a possible nutritional concern.
            </p>

          </div>



          <div className="pipeline-line"></div>



          <div className="pipeline-step">

            <span>
              04
            </span>

            <div className="pipeline-icon">
              +
            </div>

            <h3>
              Nutrition Support
            </h3>

            <p>
              The screening result is mapped to general
              nutrition recommendations and diet suggestions.
            </p>

          </div>


        </div>

      </section>



      {/* =================================================
          CORE FEATURES
          ================================================= */}

      <section className="about-features">

        <div className="section-heading">

          <div>

            <div className="section-label">
              CORE FEATURES
            </div>

            <h2>
              Built around a
              <span>simple experience.</span>
            </h2>

          </div>

        </div>



        <div className="about-feature-grid">


          <article className="about-feature-card">

            <div className="feature-number">
              01
            </div>

            <div className="feature-icon">
              ◉
            </div>

            <h3>
              Image Analysis
            </h3>

            <p>
              Uploaded images are processed before being
              passed to the AI screening model.
            </p>

          </article>



          <article className="about-feature-card">

            <div className="feature-number">
              02
            </div>

            <div className="feature-icon">
              AI
            </div>

            <h3>
              AI Screening
            </h3>

            <p>
              The model identifies patterns that may be
              associated with a nutritional concern based
              on its available training data.
            </p>

          </article>



          <article className="about-feature-card">

            <div className="feature-number">
              03
            </div>

            <div className="feature-icon">
              +
            </div>

            <h3>
              Nutrition Support
            </h3>

            <p>
              Possible concerns are connected to relevant
              nutrients, foods, and general dietary guidance.
            </p>

          </article>



          <article className="about-feature-card">

            <div className="feature-number">
              04
            </div>

            <div className="feature-icon">
              !
            </div>

            <h3>
              Safety First
            </h3>

            <p>
              Results are presented as screening information
              and are not intended to replace professional
              medical evaluation.
            </p>

          </article>


        </div>

      </section>



      {/* =================================================
          SCANNABLE AREAS
          ================================================= */}

      <section className="about-body-section">

        <div className="about-body-heading">

          <div className="section-label">
            SUPPORTED AREAS
          </div>

          <h2>
            Six visible areas
            <span>to explore.</span>
          </h2>

          <p>
            NutriLens currently accepts images of selected
            visible body areas for its screening workflow.
          </p>

        </div>


        <div className="about-body-list">

          {[
            "Nails",
            "Tongue",
            "Skin",
            "Eyes",
            "Lips",
            "Hair"
          ].map(
            (area, index) => (

              <div
                className="about-body-item"
                key={area}
              >

                <span>
                  0{index + 1}
                </span>

                <strong>
                  {area}
                </strong>

                <small>
                  Visible characteristics
                </small>

              </div>

            )
          )}

        </div>

      </section>



      {/* =================================================
          LIMITATIONS
          ================================================= */}

      <section className="about-limitation">

        <div className="limitation-icon">
          !
        </div>

        <div>

          <div className="section-label">
            IMPORTANT LIMITATION
          </div>

          <h2>
            An image cannot tell the
            whole health story.
          </h2>

          <p>
            A visual characteristic does not necessarily
            indicate a micronutrient deficiency. Lighting,
            image quality, genetics, environmental factors,
            other health conditions, and many additional
            variables can affect visible features.
          </p>

          <p>
            For this reason, NutriLens should be used for
            awareness and exploration rather than diagnosis.
          </p>

        </div>

      </section>


    </main>

  );

}

export default About;