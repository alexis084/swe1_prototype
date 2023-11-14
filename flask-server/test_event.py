from event import Event

event = Event("Red team attack", "10:30 pm", "Red team attacked")

print("Name:", event.get_event_name())
print("Timestamp:", event.get_event_time_stamp())
print("Decription:", event.get_event_description())