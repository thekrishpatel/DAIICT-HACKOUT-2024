from pymongo import MongoClient
import joblib
import pandas as pd
import lightgbm as lgb

# Load the model, scaler, and column names
model = joblib.load('src/model/model.pkl')
scaler = joblib.load('src/model/scaler.pkl')
columns = joblib.load('src/model/columns.pkl')

# Setup MongoDB connection
client = MongoClient('mongodb://localhost:27017/')
db = client['krushi']
collection = db['products']

def predict_price(data):
    # Convert data to DataFrame
    user_df = pd.DataFrame([data])

    # Convert categorical variables to numerical using one-hot encoding
    user_df = pd.get_dummies(user_df, columns=['State', 'Product'])

    # Align with the training data
    user_df = user_df.reindex(columns=columns, fill_value=0)

    # Feature Scaling
    user_df_scaled = scaler.transform(user_df)

    # Predict the price
    predicted_price = model.predict(user_df_scaled)
    return predicted_price[0]

def update_prices():
    products = collection.find({'Predicted_Price': {'$exists': False}})  # Fetch products without a predicted price
    for product in products:
        predicted_price = predict_price(product)
        collection.update_one({'_id': product['_id']}, {'$set': {'Predicted_Price': predicted_price}})

if __name__ == '__main__':
    update_prices()
