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
    console.log('movielist', dataMovie)
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
    const res = await fetch(`${baseUrl}/movies/id?id=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    let data = await res.json();
    dispatch({
      type: "GET_ID",
      payload: data.data
    });
  } catch (error) {
    console.log(error);
  }
};
