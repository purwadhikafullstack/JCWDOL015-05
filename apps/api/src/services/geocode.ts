import axios from "axios"

export const geocodeAddress = async (address: string) => {
  try {
  
    const res = await axios.get(`https://api.opencagedata.com/geocode/v1/json`, {
      params: {
        key: process.env.OPENCAGE_API_KEY,
        q: address,
        pretty: 1,
        no_annotation: 1
      }
    })
    if (res.data.results[0].length > 0) {
      // const { lat, lang } = res.data.results[0].geometry
      // return { latitude: lat, longitude: lang }
      return res
    } else {
      throw 'no result found'
    }
  } catch (err) {
    console.log(err);
    throw err
  }
}