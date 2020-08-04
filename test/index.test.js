const mockGetImdbId = jest.fn()
mockGetImdbId.mockReturnValueOnce('tt9340526')

const mockGetNextEpisode = jest.fn()
mockGetNextEpisode.mockReturnValueOnce({
  name: 'P-Valley',
  type: 'tvSeries',
  nextEpisodeTitle: 'The Trap',
  releaseDate: '2020-08-02',
})

test('finds the correct imdb id from the imdb api', async () => {
  const results = await mockGetImdbId('p-valley')

  expect(results).toEqual('tt9340526')
})

test('gets the next episode information from the imdb api', async () => {
  const results = await mockGetNextEpisode('tt9340526')

  expect(results).toEqual({
    name: 'P-Valley',
    type: 'tvSeries',
    nextEpisodeTitle: 'The Trap',
    releaseDate: '2020-08-02',
  })
})
