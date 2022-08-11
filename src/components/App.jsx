import { useState, useEffect } from 'react';
import {
  Form,
  SectionStyled,
  ContactsList,
  Filter,
  TitleStyled,
  RadioInput,
} from 'components';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem('contacts'));
    if (localStorageData) {
      const localData = JSON.parse(localStorage.getItem('contacts'));
      setContacts(localData.contacts);
      setColor(localData.color);
    }
  }, []);

  useEffect(() => {
    if (color === '') {
      return;
    }
    const Item = { contacts, color };
    localStorage.setItem('contacts', JSON.stringify(Item));
  }, [contacts, color]);

  const formSubmitHandler = data => {
    const normalizedData = data.name.toLowerCase();
    if (contacts.some(el => el.name.toLowerCase() === normalizedData)) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    setContacts(prevState => [data, ...prevState]);
  };

  const radioBtnChangeHandler = data => {
    setColor(data);
  };

  const radioOptions = ['green', 'red', 'grey'];
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <SectionStyled style={{ backgroundColor: color }}>
        <TitleStyled>Phonebook</TitleStyled>
        <Form onSubmit={formSubmitHandler} />
        <TitleStyled>Contacts</TitleStyled>
        <Filter value={filter} onChange={e => setFilter(e.target.value)} />
        <ContactsList
          contacts={visibleContacts}
          onBtnDelete={id =>
            setContacts(prevState => prevState.filter(el => el.id !== id))
          }
        />
        <RadioInput
          radioOptions={radioOptions}
          onChangeBtn={radioBtnChangeHandler}
        />
      </SectionStyled>
    </>
  );
};
