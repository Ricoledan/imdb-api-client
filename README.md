# IMDb API Client

🎥 JavaScript Client for accessing imdb data

## Installation

```bash
npm install imdb-api-client
```

## API

```javascript
import {
  getImdbId, getNextEpisode
};

// Get the imdb id
const getImdbId = await getImdbId('atlanta');

// get latest episode information
const getNextEpisode = await getNextEpisode('tt4288182');
```
