# 🌊 Rising Waters
## AI-Based Flood Prediction & Monitoring System

Rising Waters is a Machine Learning-based web application that predicts flood risk using environmental factors such as rainfall, river level, humidity, and temperature. The project combines a React frontend with a Flask backend and a Random Forest machine learning model to provide fast and accurate flood risk predictions.

---

## 📌 Project Overview

Floods are among the most destructive natural disasters. This project aims to provide an intelligent system that predicts flood risk based on weather and environmental conditions, helping users take preventive actions.

The application allows users to:
- Enter environmental parameters.
- Predict flood risk using a trained Random Forest model.
- View prediction confidence.
- Receive safety recommendations based on the predicted flood risk.

---

## 🚀 Features

- 🌧 Flood prediction using Machine Learning
- 🤖 Random Forest Classifier
- 📊 Confidence score for predictions
- 🚨 Safety recommendations
- 💻 Responsive React interface
- ⚡ Flask REST API
- 📂 Kaggle dataset integration

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- Bootstrap 5
- Axios

### Backend
- Flask
- Flask-CORS
- Joblib

### Machine Learning
- Python
- Pandas
- NumPy
- Scikit-learn
- Random Forest Classifier

---

## 📁 Project Structure

```
Rising-Waters/
│
├── frontend/
│   ├── backend/
│   │   ├── app.py
│   │   ├── train_model.py
│   │   ├── model.pkl
│   │   ├── requirements.txt
│   │   └── dataset/
│   │       └── flood.csv
│   │
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── App.css
│   │
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
└── .gitignore
```

---

## 📊 Machine Learning Model

### Algorithm Used

Random Forest Classifier

### Input Features

- Rainfall
- River Level
- Humidity
- Temperature

### Target Variable

```
Flood

0 = No Flood
1 = Flood
```

---

## 📈 Model Performance

- Algorithm: Random Forest Classifier
- Accuracy: **99.8%**
- Dataset Source: Kaggle Flood Prediction Dataset

---

## ⚙ Installation

### 1. Clone Repository

```bash
git clone https://github.com/balalikitha1/Rising_water.git
```

```bash
cd Rising_water/frontend
```

---

## Backend Setup

Navigate to backend folder

```bash
cd backend
```

Create Virtual Environment

```bash
python -m venv venv
```

Activate

Windows

```bash
venv\Scripts\activate
```

Install Dependencies

```bash
pip install -r requirements.txt
```

Run Backend

```bash
python app.py
```

Backend URL

```
http://127.0.0.1:5000
```

---

## Frontend Setup

Open another terminal

```bash
cd frontend
```

Install Dependencies

```bash
npm install
```

Run React

```bash
npm run dev
```

Frontend URL

```
http://localhost:5173
```

or

```
http://localhost:5174
```

---

## 🔌 API Endpoint

### Home

```
GET /
```

Response

```
Rising Waters Backend is Running!
```

---

### Predict Flood

```
POST /predict
```

Sample Request

```json
{
  "rainfall": 250,
  "river_level": 9,
  "humidity": 85,
  "temperature": 28
}
```

Sample Response

```json
{
  "prediction": 1,
  "risk": "🔴 High Flood Risk",
  "confidence": 100,
  "advice": "Move to a safer location and follow emergency alerts."
}
```

---

## 🖥 Application Workflow

1. User enters rainfall, river level, humidity, and temperature.
2. React sends the data to the Flask API.
3. Flask loads the trained Random Forest model.
4. The model predicts flood risk.
5. The API returns:
   - Flood Risk
   - Confidence Score
   - Safety Advice
6. React displays the result to the user.

---

## 📸 Screenshots

Add screenshots of:

- Home Page
- Prediction Form
- Prediction Result
- Backend Running
- Model Accuracy

---

## 🌱 Future Enhancements

- Live Weather API Integration
- Interactive Flood Map
- Prediction History
- Dashboard with Charts
- SMS/Email Alerts
- PDF Report Generation
- Mobile Application

---

## 👩‍💻 Author

**Bala Likitha**

B.Tech – Artificial Intelligence & Machine Learning

---

## 📄 License

This project is developed for educational and academic purposes.

---

## ⭐ Acknowledgements

- Kaggle (Flood Prediction Dataset)
- Scikit-learn
- Flask
- React
- Bootstrap
- Vite

