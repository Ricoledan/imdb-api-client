const axios = require('axios')
require('dotenv').config()

const HTTPClient = axios.create({
  baseURL: 'https://imdb8.p.rapidapi.com/title/',
})

const formatDateString = (dateStr) => {
  dateStr.split('-')
  return `${dateStr[1]}-${dateStr[2]}-${dateStr[0]}`
}

const getImdbId = (name) =>
  HTTPClient({
    method: 'GET',
    url: 'auto-complete',
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-host': process.env.X_RAPIDAPI_HOST,
      'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
      useQueryString: true,
    },
    params: {
      q: `${name}`,
    },
  })
    .then((response) => response.data.d[0].id)
    .catch((error) => {
      return error.response
    })

const getNextEpisode = (imdbId) =>
  HTTPClient({
    method: 'GET',
    url: 'get-release-expectation-bundle',
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-host': process.env.X_RAPIDAPI_HOST,
      'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
      useQueryString: true,
    },
    params: {
      currentCountry: 'US',
      purchaseCountry: 'US',
      tconst: `${imdbId}`,
    },
  })
    .then((response) => ({
      name: response.data.base.title,
      type: response.data.base.titleType,
      nextEpisodeTitle: response.data.nextEpisode.nextEpisodeTitle,
      releaseDate: formatDateString(response.data.nextEpisode.nextEpisode.releaseDate),
    }))
    .catch((error) => {
      return error.response
    })

export { getImdbId, getNextEpisode }
