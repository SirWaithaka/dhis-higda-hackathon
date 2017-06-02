from flask import abort, render_template

from . import home
from .data import auth, getJson


@home.route('/')
def index():
    """
    Render the homepage template on the / route
    """
    return render_template('home/index.html', title = "Welcome")

@home.route('/organisations')
def organisations():
    """
    Render the route for organisation units
    """
    # pull organisation units using requests
    organisationUnitsUrl = "https://play.dhis2.org/release1/api/organisationUnits.json?paging=false"
    orgUnits = getJson(organisationUnitsUrl, auth)['organisationUnits'] # get a list of dictionaries

    return render_template('home/organisations.html', title = "Organisation Units", organisation_units = orgUnits)

@home.route('/elements')
def elements():
    """
    Render the route for data elements
    """
    # pull data elements using requests
    dataElementsUrl = "https://play.dhis2.org/release1/api/dataElements.json?paging=false"
    dataElems = getJson(dataElementsUrl, auth)['dataElements'] # get a list of dictionaries

    return render_template('home/elements.html', title = "Data Elements", data_elements = dataElems)
