
from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)

# Load the trained Random Forest model
model = joblib.load("model.pkl")


@app.route("/")
def home():
    return "🌊 Rising Waters Backend is Running!"


@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    rainfall = float(data.get("rainfall", 0))
    river_level = float(data.get("river_level", 0))
    humidity = float(data.get("humidity", 0))
    temperature = float(data.get("temperature", 0))

    # Make prediction using the ML model
    prediction = model.predict([[
        rainfall,
        river_level,
        humidity,
        temperature
    ]])[0]

    # Prediction confidence
    probability = model.predict_proba([[
        rainfall,
        river_level,
        humidity,
        temperature
    ]])[0]

    confidence = round(max(probability) * 100, 2)

    if prediction == 1:
        risk = "🔴 High Flood Risk"
        advice = "Move to a safer location and follow emergency alerts."
    else:
        risk = "🟢 Low Flood Risk"
        advice = "No immediate flood threat detected."

    return jsonify({
        "prediction": int(prediction),
        "risk": risk,
        "confidence": confidence,
        "advice": advice
    })


if __name__ == "__main__":
    app.run(debug=True)