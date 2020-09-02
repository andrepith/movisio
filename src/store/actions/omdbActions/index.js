import { GET_MOVIE_LIST_BY_TITLE, GET_MOVIE_DETAIL } from "store/types";
import { omdbService } from "services/omdbServices";

export const getMovieListByTitle = ({ search, page }) => async dispatch => {
  const payload = await omdbService({ search: { s: search, page } });

  dispatch({
    type: GET_MOVIE_LIST_BY_TITLE,
    payload
  });
};

export const getMovieDetail = ({ search }) => async dispatch => {
  const payload = await omdbService({ search: { i: search } });

  dispatch({
    type: GET_MOVIE_DETAIL,
    payload
  });
};