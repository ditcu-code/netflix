const baseUrl = 'https://ga-moviereview.herokuapp.com/api/v1';

export const movieList = () => async dispatch => {
  try {
    const getMovieRes = await fetch(
      `${baseUrl}/movie/?limit=5&page=1`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      }
    );
    const dataMovie = await getMovieRes.json();
    // console.log('movielist', dataMovie)
    dispatch({
      type: "GET_MOVIES",
      payload: dataMovie.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const getMovieById = id => async dispatch => {
  try {
    const res = await fetch(`${baseUrl}/movie/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    let data = await res.json();
    // console.log('getMovieId', data.data)
    dispatch({
      type: "GET_ID",
      payload: data.data
    });
    const cast = await fetch(`${baseUrl}/movie/${id}/actor`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    let castdata = await cast.json();
    // console.log('getMovieId', data.data)
    dispatch({
      type: "GET_ACTORS",
      payload: castdata.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const getGenres = id => async dispatch => {
  try {
    const res = await fetch(`${baseUrl}/movie/genre`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    let data = await res.json();
    // console.log(data)
    dispatch({
      type: "GET_GENRES",
      payload: data.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const getMoviesByGenre = genreId => async dispatch => {
  try {
    const res = await fetch(`${baseUrl}/movie/genre/${genreId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    let data = await res.json();
    // console.log('moviebygenre', data.data.Movies, genreId)
    dispatch({
      type: "GET_MOVIEBYGENRE",
      payload: data.data.Movies
    });
  } catch (error) {
    console.log(error);
  }
};