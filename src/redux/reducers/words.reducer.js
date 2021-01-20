/* eslint-disable func-names */
import wordsTypes from '../types/wordsTypes';

const INITIAL_STATE = {
  words: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case wordsTypes.GET_REVERSE_WORD:
      return {
        words: [...state.words, action.payload],
      };
    default:
      return state;
  }
}
