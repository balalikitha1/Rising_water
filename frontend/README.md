# 🌊 Rising Waters

> **AI-Based Flood Prediction & Monitoring System using Machine Learning**

![React](https://img.shields.io/badge/Frontend-React-61DAFB?logo=react)
![Flask](https://img.shields.io/badge/Backend-Flask-000000?logo=flask)
![Python](https://img.shields.io/badge/Python-3.12-blue?logo=python)
![Scikit-learn](https://img.shields.io/badge/Machine%20Learning-Random%20Forest-orange)
![Bootstrap](https://img.shields.io/badge/UI-Bootstrap-7952B3?logo=bootstrap)
![License](https://img.shields.io/badge/License-Educational-green)

---

## 📖 Project Overview

**Rising Waters** is an AI-powered Flood Prediction and Monitoring System developed using **React, Flask, and Machine Learning**.

The application predicts flood risk using environmental parameters such as:

- 🌧 Rainfall
- 🌊 River Level
- 💧 Humidity
- 🌡 Temperature

The prediction is generated using a **Random Forest Classifier** trained on a flood prediction dataset.

---

# 🎯 Objectives

- Predict flood risk accurately using Machine Learning.
- Provide early warning for flood-prone conditions.
- Display prediction confidence.
- Suggest safety recommendations.
- Build an easy-to-use web application.

---

# ✨ Features

✅ Flood Risk Prediction

✅ Machine Learning Integration

✅ Random Forest Classifier

✅ Confidence Score

✅ Safety Advice

✅ Responsive User Interface

✅ Flask REST API

✅ Kaggle Dataset Integration

---

# 🛠 Technology Stack

## Frontend

- React.js
- Vite
- Bootstrap 5
- Axios

## Backend

- Flask
- Flask-CORS
- Joblib

## Machine Learning

- Python
- Pandas
- NumPy
- Scikit-learn
- Random Forest Classifier

---

# 📂 Project Structure

```
Rising-Waters
│
├── frontend
│   │
│   ├── backend
│   │   ├── app.py
│   │   ├── train_model.py
│   │   ├── model.pkl
│   │   ├── requirements.txt
│   │   └── dataset
│   │        └── flood.csv
│   │
│   ├── src
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── App.css
│   │   └── index.css
│   │
│   ├── public
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
└── .gitignore
```

---

# 🧠 Machine Learning

## Algorithm

**Random Forest Classifier**

### Input Features

- Rainfall
- River Level
- Humidity
- Temperature

### Target

```
Flood

0 = No Flood

1 = Flood
```

---

# 📊 Model Performance

| Metric | Value |
|---------|-------|
| Algorithm | Random Forest |
| Accuracy | **99.8%** |
| Dataset | Kaggle Flood Dataset |

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/balalikitha1/Rising_water.git
```

```
cd Rising_water/frontend
```

---

## Backend

Go to backend

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

Install Packages

```bash
pip install -r requirements.txt
```

Run Backend

```bash
python app.py
```

Backend

```
http://127.0.0.1:5000
```

---

## Frontend

Open another terminal

```bash
cd frontend
```

Install Packages

```bash
npm install
```

Run

```bash
npm run dev
```

Frontend

```
http://localhost:5173
```

or

```
http://localhost:5174
```

---

# 🔌 API

## Home

```
GET /
```

Response

```
Rising Waters Backend is Running!
```

---

## Predict

```
POST /predict
```

Example

```json
{
  "rainfall":250,
  "river_level":9,
  "humidity":85,
  "temperature":30
}
```

Response

```json
{
  "prediction":1,
  "risk":"🔴 High Flood Risk",
  "confidence":100,
  "advice":"Move to a safer location and follow emergency alerts."
}
```

---

# 🔄 Workflow

```
User

↓

React Frontend

↓

Axios Request

↓

Flask API

↓

Random Forest Model

↓

Prediction

↓

Confidence Score

↓

Safety Advice

↓

Displayed to User
```

---

# 📸 Screenshots

## 🏠 Home Page

(Add Screenshot)

---

## 📝 Flood Prediction Form

(Add Screenshot)

---

## 📊 Prediction Result

(Add Screenshot)

---

## 🤖 Machine Learning Accuracy

(Add Screenshot)

---

# 🌱 Future Scope

- 🌦 Live Weather API
- 🗺 Interactive Flood Map
- 📈 Analytics Dashboard
- 📄 PDF Report Generation
- 📲 SMS Alerts
- 📧 Email Notifications
- ☁ Cloud Deployment

---

# 👩‍💻 Developer

**Bala Likitha**

B.Tech – Artificial Intelligence & Machine Learning

---

# 🙏 Acknowledgements

- Kaggle
- React
- Flask
- Bootstrap
- Scikit-learn
- NumPy
- Pandas

---

# 📄 License

This project is developed for educational and academic purposes.

---

⭐ **If you found this project useful, consider giving it a star on GitHub!**