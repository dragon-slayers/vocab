import {
  FETCH_WORDS_FAILURE,
  FETCH_WORDS_SUCCESS,
  FETCH_WORDS_START,
  ADD_WORDS_START,
  ADD_WORDS_SUCCESS,
  ADD_WORDS_FAILURE
} from '../actions';

const initialState = {
  words: [],
  isLoading: false,
  fetchingSmurfs: false,
  error: null,
  editing: false
};

export const wordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WORDS_START:
      console.log(action.payload);
      return {
        ...state,
        error: '',
        isLoading: true
      };
    case FETCH_WORDS_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false,
        words: action.payload
      };
    case FETCH_WORDS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case ADD_WORDS_START:
      return {
        ...state,
        fetchingWords: true
      };
    case ADD_WORDS_SUCCESS:
      return {
        ...state,
        fetchingWords: false,
        words: action.payload
      };
    case ADD_WORDS_FAILURE:
      return {
        ...state,
        fetchingWords: false,
        error: action.payload
      };
    default:
      return state;
  }
};
export default wordsReducer;
