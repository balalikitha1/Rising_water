import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [formData, setFormData] = useState({
    rainfall: "",
    river_level: "",
    humidity: "",
    temperature: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const predictFlood = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        {
          rainfall: Number(formData.rainfall),
          river_level: Number(formData.river_level),
          humidity: Number(formData.humidity),
          temperature: Number(formData.temperature),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Prediction:", response.data);
      setResult(response.data);
    } catch (error) {
      console.error("Axios Error:", error);

      if (error.response) {
        console.log(error.response.data);
        alert("Server Error: " + error.response.status);
      } else if (error.request) {
        alert("No response from Flask Backend.");
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <span className="navbar-brand fw-bold fs-3">
            🌊 Rising Waters
          </span>
        </div>
      </nav>

      <div className="container mt-5">

        {/* Hero Section */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary">
            AI Flood Prediction & Monitoring
          </h1>

          <p className="lead">
            Predict flood risks using Machine Learning.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="row mb-4">

          <div className="col-md-4">
            <div className="card shadow text-center p-3">
              <h2>🌧</h2>
              <h5>Weather Monitoring</h5>
              <p>Monitor rainfall and humidity.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow text-center p-3">
              <h2>🤖</h2>
              <h5>AI Prediction</h5>
              <p>Random Forest predicts flood risk.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow text-center p-3">
              <h2>🚨</h2>
              <h5>Emergency Alerts</h5>
              <p>Receive safety recommendations.</p>
            </div>
          </div>

        </div>

        {/* Prediction Form */}
        <div className="card shadow">
          <div className="card-body">

            <h2 className="text-center mb-4">
              Flood Prediction Form
            </h2>

            <div className="row">

              <div className="col-md-6 mb-3">
                <input
                  type="number"
                  name="rainfall"
                  value={formData.rainfall}
                  className="form-control"
                  placeholder="Rainfall (mm)"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <input
                  type="number"
                  name="river_level"
                  value={formData.river_level}
                  className="form-control"
                  placeholder="River Level (m)"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <input
                  type="number"
                  name="humidity"
                  value={formData.humidity}
                  className="form-control"
                  placeholder="Humidity (%)"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <input
                  type="number"
                  name="temperature"
                  value={formData.temperature}
                  className="form-control"
                  placeholder="Temperature (°C)"
                  onChange={handleChange}
                />
              </div>

            </div>

            <div className="text-center">
              <button
                className="btn btn-success btn-lg"
                onClick={predictFlood}
              >
                Predict Flood Risk
              </button>
            </div>

            {/* Prediction Result */}
            {result && (
              <div className="alert alert-info text-center mt-4">

                <h4>Prediction Result</h4>

                <h2>{result.risk}</h2>

                <p>
                  <strong>Confidence:</strong> {result.confidence}%
                </p>

                <p>{result.advice}</p>

              </div>
            )}

          </div>
        </div>

      </div>
    </>
  );
}

export default App;