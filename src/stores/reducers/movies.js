const initialState = {
    movies: [],
    movieId: {},
    genres: [],
    moviebygenre: [],
    error: null
};
  
  const movies = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case "GET_MOVIES":
        return {
          ...state,
          movies: payload
        };
      case "GET_GENRES":
        return {
          ...state,
          genres: payload
        };
      case "GET_MOVIEBYGENRE":
        return {
          ...state,
          moviebygenre: payload
        };  
      default:
        return { ...state };
    }
  };
  
  export default movies;
  
