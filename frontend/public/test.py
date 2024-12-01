from flask import Flask, request, jsonify
import requests
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

def startup():

    url = 'https://general-runtime.voiceflow.com/state/674a9fcccf4ed271a39cf326/user/123456/interact'
    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {os.getenv("VOICEFLOW_API_KEY")}'
    }
    data = {
        'action': {
            'type': 'event',
            'payload': {
                'event': {
                    'name': 'web_visit'
                }
            }
        }
    }

    response = requests.post(url, json=data, headers=headers)

    # Print the response
#    print(response.status_code)
#    print(response.text)


@app.route('/save', methods=['POST'])
def save_request():
    try:
        # Get the form data
        data = request.form.get('data')
        
        if not data:
            return jsonify({"error": "No data received"}), 400

        # Save the data to a text file
        with open('api_response.json', 'w', encoding='utf-8') as file:
            file.write(data)

        # Respond to the client
        return jsonify({"message": "Data received and saved successfully", "data": data}), 200
    except Exception as e:
        # Handle any errors
        return jsonify({"error": "Internal Server Error", "details": str(e)}), 500

if __name__ == '__main__':
    startup()
    app.run(host='localhost', port=4080, debug=True)