class Event:
    def __init__(self, name, timestamp, description):
        self._name = name
        self._timestamp = timestamp
        self._description = description
 
    # Getter for name
    def get_name(self):
        return self._name
 
    # Setter for name
    def set_name(self, name):
        self._name = name
 
    # Getter for timestamp
    def get_timestamp(self):
        return self._timestamp
 
    # Setter for timestamp
    def set_timestamp(self, timestamp):
        self._timestamp = timestamp
 
    # Getter for description
    def get_description(self):
        return self._description
 
    # Setter for description
    def set_description(self, description):
        self._description = description
    



