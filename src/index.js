const axios = require('axios')
require('dotenv').config()

const HTTPClient = axios.create({
  method: 'GET',
  baseURL: 'https://imdb8.p.rapidapi.com/title/',
  headers: {
    'content-type': 'application/json',
    'x-rapidapi-host': process.env.X_RAPIDAPI_HOST,
    'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
    useQueryString: true,
  },
})

const formatDateString = (dateStr) => {
  return dateStr.replace(/(\d{4})-(\d{2})-(\d{2})/, '$2-$3-$1')
}

const getImdbId = (name) =>
  HTTPClient({
    url: 'auto-complete',
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
    url: 'get-release-expectation-bundle',
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
