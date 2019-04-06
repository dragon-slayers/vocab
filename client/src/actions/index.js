import axios from 'axios';

export const FETCH_WORDS_START = 'FETCH_WORDS_START';
export const FETCH_WORDS_SUCCESS = 'FETCH_WORDS_SUCCESS';
export const FETCH_WORDS_FAILURE = 'FETCH_WORDS_FAILURE';

export const ADD_WORDS_START = 'ADD_WORDS_START';
export const ADD_WORDS_SUCCESS = 'ADD_WORDS_SUCCESS';
export const ADD_WORDS_FAILURE = 'ADD_WORDS_FAILURE';

export const addWords = word => dispatch => {
  dispatch({ type: ADD_WORDS_START });
  axios
    .post('http://localhost:5000/api/', word)
    .then(res => {
      // console.log(res);
      dispatch({
        type: ADD_WORDS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: ADD_WORDS_FAILURE,
        payload: err
      });
    });
};

export const getWords = () => dispatch => {
  dispatch({ type: FETCH_WORDS_START });
  axios
    .get('http://localhost:5000/api/')
    .then(res => {
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
