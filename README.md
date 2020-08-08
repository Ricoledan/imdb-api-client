# IMDb API Client

🎥 JavaScript Client for accessing imdb data

## Installation

```bash
npm install imdb-api-client
```

## Methods

```javascript
import {
  getImdbId, getNextEpisode
}

// request the imdb id
const getImdbId = await getImdbId('atlanta')

// request latest episode information
const getNextEpisode = await getNextEpisode('tt4288182')
```

## API

```
X_RAPIDAPI_HOST=
X_RAPIDAPI_KEY=
```

To obtain host and api key, reference documentation below.

[IMDb API Documentation](https://docs.rapidapi.com/docs/keys)
