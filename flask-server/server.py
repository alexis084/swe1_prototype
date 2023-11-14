from flask import Flask

app = Flask(__name__)

# Events API route
@app.route("/events")
def get_events():
    return {"events" : ["Event1", "Event2",  "Event3"]}


if __name__ == "__main__":
    app.run(debug=True)