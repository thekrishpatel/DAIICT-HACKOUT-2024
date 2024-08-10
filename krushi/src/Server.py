from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import joblib
import pandas as pd
import lightgbm as lgb

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Setup MongoDB connection
client = MongoClient('mongodb://localhost:27017/')
db = client['krushi']
collection = db['products']

# Load the model, scaler, and column names
model = joblib.load('src/model/model.pkl')
scaler = joblib.load('src/model/scaler.pkl')
columns = joblib.load('src/model/columns.pkl')

@app.route('/store', methods=['POST'])
def store():
    data = request.json
    result = collection.insert_one(data)
    return jsonify({'_id': str(result.inserted_id)})

@app.route('/predict/<id>', methods=['GET'])
def predict(id):
    product = collection.find_one({'_id': id})
    if not product:
        return jsonify({'error': 'Product not found'}), 404

    # Convert product data into DataFrame
    user_df = pd.DataFrame([product])
    
    # Convert categorical variables to numerical using one-hot encoding
    user_df = pd.get_dummies(user_df, columns=['State', 'Product'])
    
    # Align with the training data
    user_df = user_df.reindex(columns=columns, fill_value=0)
    
    # Feature Scaling
    user_df_scaled = scaler.transform(user_df)
    
    # Predict the price
    predicted_price = model.predict(user_df_scaled)

    # Update the document with the predicted price
    collection.update_one({'_id': id}, {'$set': {'Predicted_Price': predicted_price[0]}})
    
    return jsonify({'predictedPrice': predicted_price[0]})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
