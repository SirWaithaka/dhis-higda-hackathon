from flask import Flask
from flask_bootstrap import Bootstrap


# local imports
from config import app_config


def create_app(config_name):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_pyfile('config.py')
    app.config["FLASK_CONFIG"]="development"
    app.config["FLASK_APP"]="run.py"

    Bootstrap(app)

    # from .home import home as home_blueprint
    # app.register_blueprint(home_blueprint)


    return app
