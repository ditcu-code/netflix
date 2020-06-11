const initialState = {
    movies: [],
    movieId: {},
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
      case "GET_ID":
        return {
          ...state,
          movieId: payload
        };
      default:
        return { ...state };
    }
  };
  
  export default movies;
  