## Health App | HIGDA - [DHIS](https://dhis2.org)

### About the Hackathon
From a sponsorship from USAID, HIGDA organised a hackathon at JKUAT using the platform [dhis2](https://dhis2.org) api.
It was all about health information system to expose participants to the importance of knowing how to work with health data to build applications.

#### Task
Participants were given 4 data sets
  * [Organisation Units](https://play.dhis2.org/release1/api/organisationUnits.json?paging=false)
  * [Data Elements](https://play.dhis2.org/release1/api/dataElements.json?paging=false)
  * [Immunization Dataset](https://play.dhis2.org/release1/api/25/analytics.json?dimension=dx:YtbsuPPo010;l6byfWFUGaP;s46m5MS0hxu&dimension=pe:LAST_12_MONTHS&filter=ou:ImspTQPwCqd&displayProperty=NAME&skipMeta=true)

Requires authentication to access:
Basic auth
  * user - "admin"
  * password - "district"

##### Task 1
Generate tables out of the first 2 datasets and make them search-able.

##### Task 2
Using all the data generate charts and pictograms to explain trends in the data.

### About this app
Current commit only achieves task 1 successfully.
