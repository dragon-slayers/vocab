import {
  FETCH_WORDS_FAILURE,
  FETCH_WORDS_START,
  FETCH_WORDS_SUCCESS
} from '../actions';

const initialState = {
  words: [],
  isLoading: false,
  error: ''
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
        words: [...action.payload, ...state.words]
      };
    case FETCH_WORDS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
