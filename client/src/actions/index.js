import axios from 'axios';

export const FETCH_WORDS_START = 'FETCH_WORDS_START';
export const FETCH_WORDS_SUCCESS = 'FETCH_WORDS_SUCCESS';
export const FETCH_WORDS_FAILURE = 'FETCH_WORDS_FAILURE';

export const fetchWords = () => dispatch => {
  dispatch({ type: FETCH_WORDS_START });
  axios
    .get('http://localhost:5000/api/')
    .then(res => {
      console.log('fetch finished');
      dispatch({
        type: FETCH_WORDS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_WORDS_FAILURE,
        payload: err
      });
    });
};
