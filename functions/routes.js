const fetch = require('node-fetch');
require('dotenv').config()
const KEY = process.env.MP_KEY;
const URL = `https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=40.03&lon=-105.25&maxDistance=10&minDiff=5.6&maxDiff=5.10&key=${KEY}`;

exports.handler = async (event, context) => {

  let response;
  let data;

  try {
    response = await fetch(URL)
    data = await response.json();
    console.log(data);
  } catch(err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({error: err.message})
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }

}
