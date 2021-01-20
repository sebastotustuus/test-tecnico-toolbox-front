/* eslint-disable import/prefer-default-export */
import getReverseText from '../../services/reverse.services';
import wordsTypes from '../types/wordsTypes';

export const reverseText = (text) => async (dispatch) => {
  const payload = await getReverseText(`/iecho?text=${text}`);
  dispatch({
    type: wordsTypes.GET_REVERSE_WORD,
    payload,
  });
};
