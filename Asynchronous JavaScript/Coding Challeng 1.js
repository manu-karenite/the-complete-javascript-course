'use strict';


function whereAmI(lat , long)
{
    //latitudes and longitudes are passed here
    //create a promise
    fetch(`https://geocode.xyz/${lat},${long}?geoit=json`).then(function(response)
    {
        if(response.ok===false)
        {
            throw new Error("too many requests at a time");
        }
        
        return response.json();
    }).then(function(data)
    {
        
        console.log(`You are in ${data.city}, ${data.country}`);
        console.log(data);
        return fetch(`https://restcountries.eu/rest/v2/name/${data.country}?fullText=true`);
    }).then (function(response)
    {
        if(response.ok==false)
        {
            throw new Error("Cannot get the country details!");
        }
        return response.json();
    }).then (function(data)
    {
        console.log(data);
    }).catch(function(e)
    {
        console.log(e.message);
    })
}

whereAmI(52.508, 13.381);

whereAmI(19.037, 72.873);

whereAmI(-33.933, 18.474);

/*output
You are in Mumbai, India
script.js:23 {statename: {…}, distance: "0.228", elevation: "1", osmtags: {…}, state: "Maharashtra", …}adminareas: {admin10: {…}, admin9: {…}, admin8: {…}, admin5: {…}}alt: {loc: Array(2)}altgeocode: "MARAOLI-PFSBO"city: "Mumbai"class: {}confidence: "0.9"country: "India"distance: "0.228"elevation: "1"geocode: "MUMBAI-PFSBO"geonumber: "8341386382408"inlatt: "19.03700"inlongt: "72.87300"latt: "19.03886"longt: "72.87392"osmtags: {boundary: "administrative", name: "F/N Ward", type: "boundary", admin_level: "10"}postal: "400022"prov: "IN"region: "Maharashtra"remaining_credits: {}staddress: "Wadala Depot"state: "Maharashtra"statename: {}stnumber: "1"timezone: "Asia/Kolkata"__proto__: Object
script.js:34 [{…}]0: {name: "India", topLevelDomain: Array(1), alpha2Code: "IN", alpha3Code: "IND", callingCodes: Array(1), …}length: 1__proto__: Array(0)

script.js:22 You are in Berlin, Germany
script.js:23 {statename: {…}, distance: "0.000", elevation: "39", osmtags: {…}, state: "Berlin", …}
script.js:34 [{…}]

script.js:22 You are in Cape Town, South Africa
script.js:23 {statename: {…}, distance: "0.000", elevation: "21", osmtags: {…}, state: "Western Cape", …}
script.js:34 [{…}]
*/
