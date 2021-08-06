from covid_crawler import getTodayCovid
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.post("/covidData")
def covid():
    data = getTodayCovid()
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)