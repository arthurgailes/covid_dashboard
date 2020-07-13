// Retreive and process covid data
/* global jquery */

var covid_data
// this returns a promise for the data object.
$.get('https://covidtracking.com/api/v1/states/daily.json', d => covid_data = d);