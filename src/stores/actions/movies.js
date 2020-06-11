const baseUrl = "https://reviewmoviedatabase.herokuapp.com/api/v1";


export const movieList = () => async dispatch => {
  try {
    const getMovieRes = await fetch(
      `${baseUrl}/movies/searchall?limit=50&page=1`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      }
    );
    const dataMovie = await getMovieRes.json();
    dispatch({
      type: "GET_MOVIES",
      payload: dataMovie.data.docs
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
