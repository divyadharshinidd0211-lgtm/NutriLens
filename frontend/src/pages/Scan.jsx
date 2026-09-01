import React from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Scan() {

  const navigate = useNavigate();

  const fileInputRef = useRef(null);

  const [bodyPart, setBodyPart] = useState("Nails");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dragActive, setDragActive] = useState(false);


  const bodyParts = [
    {
      name: "Nails",
      description: "Nail appearance",
      symbol: "N"
    },
    {
      name: "Tongue",
      description: "Tongue appearance",
      symbol: "T"
    },
    {
      name: "Skin",
      description: "Skin appearance",
      symbol: "S"
    },
    {
      name: "Eyes",
      description: "Eye appearance",
      symbol: "E"
    },
    {
      name: "Lips",
      description: "Lip appearance",
      symbol: "L"
    },
    {
      name: "Hair",
      description: "Hair appearance",
      symbol: "H"
    }
  ];


  const handleImageChange = (event) => {

    const file = event.target.files[0];

    if (!file) {
      return;
    }

    processImage(file);
  };


  const processImage = (file) => {

    setError("");

    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png"
    ];

    if (!allowedTypes.includes(file.type)) {

      setError(
        "Please upload a JPG, JPEG, or PNG image."
      );

      return;
    }


    const maxSize = 10 * 1024 * 1024;

    if (file.size > maxSize) {

      setError(
        "Image size must be less than 10 MB."
      );

      return;
    }


    setImage(file);

    setPreview(
      URL.createObjectURL(file)
    );
  };


  const handleDrop = (event) => {

    event.preventDefault();

    setDragActive(false);

    const file = event.dataTransfer.files[0];

    if (!file) {
      return;
    }

    processImage(file);
  };


  const handleDragOver = (event) => {

    event.preventDefault();

    setDragActive(true);
  };


  const handleDragLeave = () => {

    setDragActive(false);
  };


  const removeImage = () => {

    setImage(null);

    setPreview(null);

    setError("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };


  const handleScan = async () => {

    if (!image) {

      setError(
        "Please upload an image before starting the scan."
      );

      return;
    }


    setLoading(true);

    setError("");


    const formData = new FormData();


    formData.append(
      "body_part",
      bodyPart
    );


    formData.append(
      "image",
      image
    );


    try {

      const response = await fetch(
        "http://127.0.0.1:8000/api/scan",
        {
          method: "POST",
          body: formData,
        }
      );


      const data = await response.json();


      if (!response.ok) {

        throw new Error(
          data.detail || "Scan failed. Please try again."
        );

      }


      navigate("/results", {
        state: {
            ...data,
            imagePreview: preview,
        },
    });


    } catch (error) {

      setError(
        error.message
      );

    } finally {

      setLoading(false);

    }
  };


  return (

    <main className="scan-page">


      {/* PAGE HEADER */}

      <section className="scan-header">

        <div className="section-label">
          NUTRILENS SCAN
        </div>

        <h1>
          Start your
          <span>nutrition scan.</span>
        </h1>

        <p>
          Select a visible body area, upload a clear image,
          and let NutriLens perform an AI-based screening.
        </p>

      </section>



      {/* MAIN SCAN CONTAINER */}

      <section className="scan-workspace">


        {/* LEFT SIDE */}

        <div className="scan-left">

          <div className="scan-step-label">
            STEP 01
          </div>

          <h2>
            Select an area
          </h2>

          <p className="scan-description">
            Choose the body part shown in your image.
          </p>


          <div className="body-selector">

            {bodyParts.map((part) => (

              <button
                type="button"
                key={part.name}
                className={
                  bodyPart === part.name
                    ? "body-option active"
                    : "body-option"
                }
                onClick={() => setBodyPart(part.name)}
              >

                <div className="body-option-icon">
                  {part.symbol}
                </div>

                <div className="body-option-text">

                  <strong>
                    {part.name}
                  </strong>

                  <span>
                    {part.description}
                  </span>

                </div>

                {bodyPart === part.name && (

                  <div className="selected-check">
                    ✓
                  </div>

                )}

              </button>

            ))}

          </div>


          <div className="scan-step-label upload-step">
            STEP 02
          </div>

          <h2>
            Upload your image
          </h2>

          <p className="scan-description">
            Use a clear, well-lit image for better screening.
          </p>


          {/* UPLOAD AREA */}

          {!preview ? (

            <label
              className={
                dragActive
                  ? "modern-upload drag-active"
                  : "modern-upload"
              }

              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >

              <div className="upload-circle">
                ↑
              </div>

              <h3>
                Drop your image here
              </h3>

              <p>
                or click to browse from your device
              </p>

              <span className="upload-format">
                JPG • JPEG • PNG • MAX 10 MB
              </span>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg,image/jpg"
                onChange={handleImageChange}
              />

            </label>

          ) : (

            /* IMAGE PREVIEW */

            <div className="image-preview-card">

              <div className="preview-header">

                <div>

                  <span>
                    SELECTED IMAGE
                  </span>

                  <strong>
                    {bodyPart}
                  </strong>

                </div>

                <button
                  type="button"
                  onClick={removeImage}
                  className="remove-button"
                >
                  Remove
                </button>

              </div>


              <div className="preview-image-wrapper">

                <img
                  src={preview}
                  alt={`Selected ${bodyPart}`}
                />

              </div>


              <div className="file-information">

                <span>
                  {image.name}
                </span>

                <span>
                  {(image.size / 1024 / 1024).toFixed(2)} MB
                </span>

              </div>

            </div>

          )}


          {/* ERROR */}

          {error && (

            <div className="scan-error">

              <span>
                !
              </span>

              <p>
                {error}
              </p>

            </div>

          )}


          {/* SCAN BUTTON */}

          <button
            type="button"
            className="primary-button scan-button"
            onClick={handleScan}
            disabled={loading || !image}
          >

            {loading ? (

              <>
                <span className="loading-spinner"></span>

                Analyzing image...
              </>

            ) : (

              <>
                Analyze Image
                <span>→</span>
              </>

            )}

          </button>


          {/* DISCLAIMER */}

          <div className="scan-safety">

            <div className="safety-icon">
              !
            </div>

            <div>

              <strong>
                Screening, not diagnosis
              </strong>

              <p>
                NutriLens provides an AI-based screening result
                for awareness and nutrition support. It does not
                replace professional medical testing or advice.
              </p>

            </div>

          </div>

        </div>



        {/* RIGHT SIDE */}

        <aside className="scan-info-panel">

          <div className="info-panel-top">

            <span>
              NUTRILENS
            </span>

            <div className="ai-badge">
              AI
            </div>

          </div>


          <div className="info-visual">

            <div className="visual-ring ring-one"></div>

            <div className="visual-ring ring-two"></div>

            <div className="visual-core">

              <span>
                N
              </span>

            </div>

          </div>


          <h3>
            How the screening works
          </h3>


          <div className="mini-process">

            <div className="mini-process-item">

              <span>
                01
              </span>

              <div>

                <strong>
                  Image processing
                </strong>

                <p>
                  Your image is prepared for analysis.
                </p>

              </div>

            </div>


            <div className="mini-process-item">

              <span>
                02
              </span>

              <div>

                <strong>
                  AI screening
                </strong>

                <p>
                  The model examines visual features.
                </p>

              </div>

            </div>


            <div className="mini-process-item">

              <span>
                03
              </span>

              <div>

                <strong>
                  Nutrition insight
                </strong>

                <p>
                  Possible concerns and guidance are displayed.
                </p>

              </div>

            </div>

          </div>


          <div className="info-panel-footer">

            <span className="info-dot"></span>

            Your scan is processed through the NutriLens API.

          </div>

        </aside>

      </section>

    </main>

  );
}

export default Scan;