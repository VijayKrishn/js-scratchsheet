import requests
import json

# Replace 'YOUR_API_KEY' with your actual Google API Key
api_key = 'AIzaSyAFxu7jkaS7964dSS8ZKNo2HctjqtOv8Fo'

# Define the base URL for the Google Places API Nearby Search
base_url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'

# Initialize an empty list to store all results
all_results = []

params = {
    'location': '17.385044,78.486671',  # Hyderabad, India coordinates
    'radius': 20000,  # 5 kilometers
    'type': 'lodging',
    'key': api_key
}

while True:
    # Send the request to the API
    response = requests.get(base_url, params=params)
    
    # Check if the request was successful
    if response.status_code == 200:
        # Parse the JSON response
        data = json.loads(response.text)
        
        # Check if the response contains results
        if 'results' in data:
            all_results.extend(data['results'])
        
        # Check if there is a next page token
        if 'next_page_token' in data:
            # Sleep briefly before making the next request
            import time
            time.sleep(2)  # Add a short delay to avoid OVER_QUERY_LIMIT errors
            params['pagetoken'] = data['next_page_token']
        else:
            # No more pages, break out of the loop
            break
    else:
        print(f'Error: {response.status_code}')
        break

# Save all results to a JSON file
with open('hotels.json', 'w', encoding='utf-8') as file:
    json.dump(all_results, file, ensure_ascii=False, indent=2)

print(f'Total results: {len(all_results)}')
print('Results saved to "hotels.json"')
