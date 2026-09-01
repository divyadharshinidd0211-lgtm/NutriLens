# 🔬 NutriLens — AI-Powered Nutrition Screening

NutriLens is a web-based nutrition screening and awareness application that uses **image processing** and **AI-based analysis** to identify possible micronutrient concerns from visible body parts.

Users can upload an image of a selected body part and receive a **screening result, nutrition recommendations, and a suggested diet plan**.

> ⚠️ **Disclaimer:** NutriLens is a screening and awareness tool, not a medical diagnosis system. Its results should not replace professional medical advice, laboratory testing, or clinical evaluation.

---

## 🌱 Problem Statement

Micronutrient deficiencies may sometimes be associated with visible changes in areas such as:

* 💅 Nails
* 👅 Tongue
* 🧴 Skin
* 👁️ Eyes
* 👄 Lips
* 💇 Hair

However, identifying these visual characteristics can be difficult without proper knowledge or professional evaluation.

**NutriLens** aims to make nutrition awareness more accessible by providing an easy-to-use, image-based screening platform.

---

## 💡 Proposed Solution

NutriLens provides a simple workflow for image-based nutrition screening:

```text
User
  ↓
Select Body Part
  ↓
Upload Image
  ↓
Image Processing
  ↓
AI-Based Screening
  ↓
Possible Nutritional Concern
  ↓
Nutrition Recommendations
  ↓
Suggested Diet Plan
```

---

## ✨ Key Features

* 📷 Upload images of selected body parts
* 🔍 Image preprocessing and analysis
* 🤖 AI-based screening
* 🥗 Nutrition recommendations
* 📋 Suggested diet plans
* 💡 Nutrition awareness information
* ⚠️ Screening-focused results instead of medical diagnosis
* 🌐 User-friendly web interface

---

## 🧠 AI Workflow

The image analysis pipeline is designed to process an uploaded image before sending it for AI-based screening.

```text
Input Image
     ↓
Image Validation
     ↓
RGB Conversion
     ↓
Image Resizing
     ↓
Image Normalization / Preprocessing
     ↓
CNN Model
     ↓
Screening Prediction
     ↓
Nutrition Recommendation
```

> 🚧 **Current Development Status:** Image preprocessing has been implemented. CNN model integration and training are planned as the next stage of development.

---

## 🛠️ Technology Stack

### Frontend

* HTML
* CSS
* JavaScript
* React *(if applicable)*

### Backend

* Python
* FastAPI

### Image Processing

* Pillow (PIL)
* NumPy

### AI / Machine Learning

* Convolutional Neural Network (CNN) *(planned/in development)*

### Development Tools

* Visual Studio Code
* Git
* GitHub

---

## 📂 Project Structure

```text
NutriLens/
│
├── backend/
│   ├── services/
│   │   └── image_processor.py
│   │
│   ├── main.py
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── ...
│
├── dataset/
│   └── ...
│
├── README.md
├── requirements.txt
└── ...
```

> The project structure may change as development progresses.

---

## ⚙️ Image Preprocessing

NutriLens preprocesses uploaded images before AI analysis.

The current preprocessing pipeline includes:

1. Opening the uploaded image
2. Converting the image to RGB format
3. Resizing the image to **224 × 224 pixels**
4. Converting the image into a NumPy array

Example:

```python
from PIL import Image
import numpy as np

IMAGE_SIZE = (224, 224)

def preprocess_image(image_path):
    image = Image.open(image_path)
    image = image.convert("RGB")
    image = image.resize(IMAGE_SIZE)

    image_array = np.array(image)

    return image_array
```

---

## 📊 Dataset

NutriLens uses an image dataset for developing and training the AI model.

The dataset is intended to contain images corresponding to different body parts and nutritional conditions.

The dataset will be further processed and divided into:

```text
Dataset
   ├── Training Set
   ├── Validation Set
   └── Testing Set
```

The CNN model will be trained using the prepared dataset once the dataset preprocessing and labeling stages are completed.

---

## 🚀 Future Development

Planned improvements include:

* 🧠 CNN model training and integration
* 📊 Model accuracy and performance evaluation
* 🔬 Improved image classification
* 🥗 Personalized nutrition recommendations
* 📅 More detailed diet planning
* 📈 Prediction confidence scores
* 🗃️ Larger and more diverse datasets
* 👨‍⚕️ Professional/clinical validation
* 🔐 Improved privacy and secure image handling
* 📱 Mobile-friendly interface

---

## 🔒 Privacy & Safety

NutriLens is designed for **educational, nutritional awareness, and preliminary screening purposes**.

Users should avoid treating the generated results as a confirmed medical condition.

For suspected nutritional deficiencies, users should consult a qualified healthcare professional and consider appropriate laboratory testing.

---

## 🎯 Project Goal

The main goal of NutriLens is to combine:

**Computer Vision + Image Processing + Artificial Intelligence + Nutrition Awareness**

into a simple web-based platform that can help users become more aware of possible nutritional concerns.

---

## 👩‍💻 Project Status

🚧 **Currently in Development**

### Completed

* [x] Basic web application
* [x] Image upload workflow
* [x] Body-part selection
* [x] Image preprocessing
* [x] Backend image processing service
* [x] Dataset preparation

### In Progress

* [ ] CNN model development
* [ ] Model training
* [ ] Model evaluation
* [ ] CNN integration with backend
* [ ] Prediction-based recommendations

---

## 📜 Disclaimer

NutriLens does **not** provide medical diagnosis or treatment.

Visual symptoms can have many different causes, and an image-based prediction alone cannot confirm a micronutrient deficiency.

Always consult a qualified healthcare professional for medical concerns.

---

## ⭐ Future Vision

NutriLens aims to evolve into an intelligent nutrition-awareness platform that combines **computer vision, machine learning, and personalized nutrition guidance** to make preliminary nutritional screening more accessible.
