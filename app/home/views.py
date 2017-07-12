from flask import abort, render_template, redirect, request
from flask_paginate import Pagination, get_page_parameter

from . import home
from .data import auth, getJson


@home.route('/')
def index():
    """
    Render the homepage template on the / route
    """
    return render_template('home/index.html', title = "Welcome")

@home.route('/charts')
def charts():
    """
    Render the charts template
    """
    return render_template("home/charts.html", title = "Charts")

@home.route('/organisations')
def organisations():
    """
    Render the route for organisation units
    """
    # pull organisation units using requests
    organisationUnitsUrl = "https://play.dhis2.org/release1/api/organisationUnits.json?paging=false"
    orgUnits = getJson(organisationUnitsUrl, auth)['organisationUnits'] # get a list of dictionaries

    page = request.args.get(get_page_parameter(), type=int, default=1)

    pagination = Pagination(page=page, per_page=20, total=len(orgUnits), search=True, record_name="Organisation Units")

    return render_template('home/organisations.html', organisation_units=orgUnits, title="Organisation Units", pagination=pagination)

@home.route('/maps')
def maps():
    return redirect('/docs/python/workspace/safi_product/health.html')

@home.route('/elements')
def elements():
    """/docs/python/workspace/safi_product/health.html
    Render the route for data elements
    """
    # pull data elements using requests
    dataElementsUrl = "https://play.dhis2.org/release1/api/dataElements.json?paging=false"
    dataElems = getJson(dataElementsUrl, auth)['dataElements'] # get a list of dictionaries

    return render_template('home/elements.html', title = "Data Elements", data_elements = dataElems)
