def predict_deficiency(image, body_part):

    # Temporary prediction system.
    # Replace this with the trained CNN model later.

    result = {
        "deficiency": "Possible Iron Deficiency",
        "confidence": 0.72,
        "message": (
            "This is a screening result and "
            "does not confirm a medical deficiency."
        )
    }

    return result