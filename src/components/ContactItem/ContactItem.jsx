import {
  ParagraphStyled,
  ButtonDeleteStyled,
  ListItem,
  CheckBoxInput,
} from 'components';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const ContactItem = ({ name, number, onBtnDelete }) => {
  const [agreement, setAgreement] = useState(false);

  return (
    <>
      <ListItem>
        <ParagraphStyled>Name: {name}</ParagraphStyled>
        <ParagraphStyled>Number: {number}</ParagraphStyled>
        <CheckBoxInput onChange={() => setAgreement(!agreement)} />
        <ButtonDeleteStyled
          disabled={!agreement}
          onClick={onBtnDelete}
          type="button"
        >
          Delete
        </ButtonDeleteStyled>
      </ListItem>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onBtnDelete: PropTypes.func,
};
