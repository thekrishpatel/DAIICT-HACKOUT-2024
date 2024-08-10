import pandas as pd
import random
import joblib

# Load the trained model
model = joblib.load('src/model/polynomial_price_predictor.pkl')

def predict_price(state, product, year):
    # Generate random data for the other features
    production = random.randint(500, 5000)
    consumption = random.randint(300, 4500)
    rainfall = round(random.uniform(500, 1500), 2)
    temperature = round(random.uniform(15, 35), 2)
    fertilizer_usage = round(random.uniform(50, 300), 2)
    irrigated_area = round(random.uniform(10, 90), 2)
    pesticide_usage = round(random.uniform(5, 50), 2)
    soil_quality = round(random.uniform(1, 10), 2)
    market_demand = round(random.uniform(50, 150), 2)
    government_support = round(random.uniform(0, 5000), 2)
    farm_size = round(random.uniform(1, 100), 2)

    # Prepare the input data as a DataFrame
    input_data = pd.DataFrame({
        'Production': [production],
        'Consumption': [consumption],
        'Rainfall': [rainfall],
        'Temperature': [temperature],
        'Fertilizer_Usage': [fertilizer_usage],
        'Irrigated_Area': [irrigated_area],
        'Pesticide_Usage': [pesticide_usage],
        'Soil_Quality': [soil_quality],
        'Market_Demand': [market_demand],
        'Government_Support': [government_support],
        'Farm_Size': [farm_size]
    })
    
    # Predict the price using the loaded model
    predicted_price = model.predict(input_data)
    
    return round(predicted_price[0], 2)

# Example usage
if __name__ == "__main__":
    state = 'Punjab'
    product = 'Wheat'
    year = 2024
    
    predicted_price = predict_price(state, product, year)
    print(f"Predicted Price for {product} in {state} for the year {year}: {predicted_price}")
