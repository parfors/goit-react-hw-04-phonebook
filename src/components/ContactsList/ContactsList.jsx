import { ListStyled, ContactItem } from 'components';
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, onBtnDelete }) => {
  return (
    <>
      <ListStyled>
        {contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            onBtnDelete={() => onBtnDelete(id)}
          />
        ))}
      </ListStyled>
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array,
  onBtnDelete: PropTypes.func,
};
