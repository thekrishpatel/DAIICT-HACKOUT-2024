import pandas as pd
import lightgbm as lgb
from sklearn.preprocessing import StandardScaler
import joblib

# Load the model, scaler, and column names
model = joblib.load('src/model/model.pkl')
scaler = joblib.load('src/model/scaler.pkl')
columns = joblib.load('src/model/columns.pkl')

# Function to predict price based on user input
def predict_price(user_input):
    # Convert user input into a DataFrame
    user_df = pd.DataFrame([user_input])

    # Convert categorical variables to numerical using one-hot encoding
    user_df = pd.get_dummies(user_df, columns=['State', 'Product'])

    # Align with the training data (this ensures all columns match)
    user_df = user_df.reindex(columns=columns, fill_value=0)

    # Feature Scaling
    user_df_scaled = scaler.transform(user_df)

    # Predict the price
    predicted_price = model.predict(user_df_scaled)

    return predicted_price[0]

# Example user input for predicting the price in 2024
user_input = {
    'State': 'Karnataka',
    'Product': 'Rice',
    'Year': 2024,
    'Production': 3200,
    'Consumption': 2700,
    'Expected_Price': 88.0,
    'Rainfall': 1100,
    'Temperature': 28,
    'Fertilizer_Usage': 210,
    'Irrigated_Area': 65,
    'Pesticide_Usage': 22,
    'Soil_Quality': 7.5,
    'Market_Demand': 115,
    'Government_Support': 3500,
    'Farm_Size': 22
}

# Predict price based on user input for 2024
predicted_price = predict_price(user_input)
print(f'Predicted Price for 2024: {predicted_price}')
