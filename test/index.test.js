import { getImdbId, getNextEpisode } from '../src/index'

test('finds the correct imdb id from the imdb api', async () => {
  const results = await getImdbId('p-valley')

  expect(results).toEqual('tt9340526')
})

test('gets the next episode information from the imdb api', async () => {
  const results = await getNextEpisode('tt9340526')

  expect(results).toEqual({
    name: 'P-Valley',
    type: 'tvSeries',
    nextEpisodeTitle: 'The Trap',
    releaseDate: '2020-08-02',
  })
})
