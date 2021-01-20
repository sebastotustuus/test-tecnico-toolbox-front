import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reverseText } from '../redux/actions/words.actions';

const useTransform = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleFetch = async (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      dispatch(reverseText(text));
      setText('');
    }
  };

  const handleChange = {
    onChange: (e) => {
      const { value } = e.target;
      if (/([A-Za-z ]+$)/g.test(value)) {
        setText(value);
      }
    },
    value: text,
  };

  return [handleChange, handleFetch];
};

export default useTransform;
