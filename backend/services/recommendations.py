RECOMMENDATIONS = {

    "Possible Iron Deficiency": {

        "nutrient": "Iron",

        "foods": [
            "Spinach",
            "Lentils",
            "Beans",
            "Chickpeas",
            "Sesame seeds"
        ],

        "suggestions": [
            "Include iron-rich foods in regular meals.",
            "Combine plant-based iron sources with vitamin C-rich foods.",
            "Consider professional testing if symptoms persist."
        ],

        "diet_plan": {

            "breakfast": "Iron-fortified cereal with fruit",

            "lunch": "Lentils with vegetables and rice",

            "snack": "Roasted chickpeas",

            "dinner": "Spinach and bean-based meal"
        }
    }
}


def get_recommendation(deficiency):

    recommendation = RECOMMENDATIONS.get(
        deficiency
    )

    if recommendation is None:

        return {
            "nutrient": "General nutrition",
            "foods": [],
            "suggestions": [
                "Maintain a balanced diet.",
                "Consult a qualified healthcare professional "
                "for persistent concerns."
            ],
            "diet_plan": {}
        }

    return recommendation