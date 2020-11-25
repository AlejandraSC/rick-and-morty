const getDataFromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((result) => {
        //console.log(result);
        return {
          id: result.id,
          image: result.image,
          name: result.name,
          species: result.species,
          status: result.status,
          origin: result.origin.name,
          episodes: result.episode.length,
        };
      });
    });
};

export default getDataFromApi;
