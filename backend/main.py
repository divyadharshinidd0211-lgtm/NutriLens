from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import os
import uuid

from services.image_processor import preprocess_image
from services.predictor import predict_deficiency
from services.recommendations import get_recommendation


app = FastAPI(
    title="NutriLens API",
    description="AI-powered nutrition screening support API",
    version="1.0.0"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@app.get("/")
def home():
    return {
        "message": "Welcome to NutriLens API",
        "status": "running"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }


@app.post("/api/scan")
async def scan_image(
    body_part: str = Form(...),
    image: UploadFile = File(...)
):

    allowed_body_parts = [
        "nails",
        "tongue",
        "skin",
        "eyes",
        "lips",
        "hair"
    ]

    if body_part.lower() not in allowed_body_parts:
        return {
            "success": False,
            "message": "Invalid body part selected."
        }


    allowed_types = [
        "image/jpeg",
        "image/png",
        "image/jpg",
        "image/webp"
    ]

    if image.content_type not in allowed_types:
        return {
            "success": False,
            "message": "Please upload a valid image."
        }


    file_extension = os.path.splitext(image.filename)[1]

    unique_filename = f"{uuid.uuid4()}{file_extension}"

    file_path = os.path.join(
        UPLOAD_FOLDER,
        unique_filename
    )


    image_data = await image.read()


    with open(file_path, "wb") as file:
        file.write(image_data)


    try:

        processed_image = preprocess_image(
            file_path
        )


        prediction = predict_deficiency(
            processed_image,
            body_part.lower()
        )


        recommendation = get_recommendation(
            prediction["deficiency"]
        )


        return {
            "success": True,
            "body_part": body_part,
            "prediction": prediction,
            "recommendation": recommendation
        }


    except Exception as error:

        return {
            "success": False,
            "message": "Image analysis failed.",
            "error": str(error)
        }