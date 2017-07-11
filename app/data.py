import requests
# import pandas as pd

# dhis authentication
auth = {
    "user": "admin",
    "passwd": "district"
}


# uses requests to get and return json
def getJson(url, auth):
    user = auth['user']
    passwd = auth['passwd']

    # get document
    r = requests.get(url, auth=(user, passwd))

    return r.json()

# pull organisation units using requests
organisationUnitsUrl = "https://play.dhis2.org/release1/api/organisationUnits.json?paging=false"
orgUnits = getJson(organisationUnitsUrl, auth)['organisationUnits'] # get a list of dictionaries

# pull data elements using requests
dataElementsUrl = "https://play.dhis2.org/release1/api/dataElements.json?paging=false"
dataElems = getJson(dataElementsUrl, auth)['dataElements'] # get a list of dictionaries

# pull immunization
immunizationUrl = "https://play.dhis2.org/release1/api/25/analytics.json?dimension=dx:YtbsuPPo010;l6byfWFUGaP;s46m5MS0hxu&dimension=pe:LAST_12_MONTHS&filter=ou:ImspTQPwCqd&displayProperty=NAME&skipMeta=true"
immunization_headers = getJson(immunizationUrl, auth)['headers']
immunization_rows = getJson(immunizationUrl, auth)['rows']
