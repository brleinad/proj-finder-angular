const fetch = require('fetch');
exports.handler = async (event, context, callback) => {
  const KEY = '200222284-dae8be573771fdff71e7b535b47b600d';
  const URL = `https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=40.03&lon=-105.25&maxDistance=10&minDiff=5.6&maxDiff=5.10&key=${KEY}`;

  const pass = (body) =>{
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body)
      })
  }

  try {
    let response = await fetch(URL,
      {
        method: event.httpMethod,
        headers: {
          "Authorization": `Bearer ${KEY}`,
          "Content-Type": "application/json"
        },
        body: event.body
      })
      let data = await response.json()
      await pass(data)
  } catch(err) {
    let error = {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({error: err.message})
    }
    await pass(error);
  }
}
