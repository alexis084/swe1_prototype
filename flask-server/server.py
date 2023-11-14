from flask import Flask, request, jsonify
from flask_cors import CORS
from event import Event

app = Flask(__name__)
CORS(app)

# Events API route
@app.route("/events", methods=['POST'])
def handle_incoming_events():
    data = request.get_json()

    event_name = data.get("eventName")
    event_time_stamp = data.get("eventTimeStamp")
    event_description = data.get("eventDescription")

    event = Event(event_name, event_time_stamp, event_description)

    event_data = {
        "eventName": event.get_name(),
        "eventTimeStamp": event.get_timestamp(),
        "eventDescription": event.get_description()
    }

    return jsonify(event_data)

if __name__ == "__main__":
    app.run(debug=True)