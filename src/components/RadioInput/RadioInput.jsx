import { useState, useEffect } from 'react';
import { InputRadioStyled, LabelRadio } from 'components';
import PropTypes from 'prop-types';

export const RadioInput = ({ onChangeBtn, radioOptions }) => {
  const [color, setColor] = useState('');

  const onChange = e => {
    setColor(e.target.value);
    onChangeBtn(e.currentTarget.value);
  };

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem('contacts'));
    if (localStorageData) {
      const localData = JSON.parse(localStorage.getItem('contacts'));
      setColor(localData.color);
    }
  }, []);

  return (
    <>
      {radioOptions.map(el => (
        <LabelRadio key={el}>
          <InputRadioStyled
            name="color"
            type="radio"
            checked={color === { el }}
            onChange={onChange}
            value={el}
          />
          {el}
        </LabelRadio>
      ))}
      {/* <LabelRadio>
        <InputRadioStyled
          name="color"
          type="radio"
          checked={color === { el }}
          onChange={onChange}
          value={el}
        />
        {el}{' '}
      </LabelRadio>
      <LabelRadio>
        <InputRadioStyled
          name="color"
          type="radio"
          checked={color === 'red'}
          onChange={onChange}
          value="red"
        />
        Red
      </LabelRadio>
      <LabelRadio>
        <InputRadioStyled
          name="color"
          type="radio"
          checked={color === 'grey'}
          onChange={onChange}
          value="grey"
        />
        Grey
      </LabelRadio> */}
    </>
  );
};

RadioInput.propTypes = {
  onChange: PropTypes.func,
};
