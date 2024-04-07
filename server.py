import os

pokemon_api_key = os.environ.get("POKEMON_API_KEY") 

from flask_app import app
from flask_app.controllers import pokies



if __name__=="__main__":
    app.run(debug=True)