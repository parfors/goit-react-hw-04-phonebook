import { Component } from 'react';
import {
  Form,
  SectionStyled,
  ContactsList,
  Filter,
  TitleStyled,
  RadioInput,
} from 'components';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    color: '',
  };

  componentDidUpdate(prevProp, prevState) {
    if (
      prevState.contacts.length !== this.state.contacts.length ||
      prevState.color !== this.state.color
    ) {
      localStorage.setItem('contacts', JSON.stringify(this.state));
    }
  }

  componentDidMount() {
    const localStorageData = JSON.parse(localStorage.getItem('contacts'));
    if (localStorageData) {
      const localData = JSON.parse(localStorage.getItem('contacts'));
      this.setState({
        contacts: localData.contacts,
        color: localData.color,
      });
    }
  }

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(el => el.id !== id),
      };
    });
  };

  formSubmitHandler = data => {
    const normalizedData = data.name.toLowerCase();
    if (
      this.state.contacts.some(el => el.name.toLowerCase() === normalizedData)
    ) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    this.setState(prevState => {
      return { contacts: [data, ...prevState.contacts] };
    });
  };

  filterChangeHandler = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  radioBtnChangeHandler = data => {
    this.setState({ color: data });
  };

  render() {
    const { contacts, filter, color } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(el =>
      el.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <>
        <SectionStyled style={{ backgroundColor: color }}>
          <TitleStyled>Phonebook</TitleStyled>
          <Form onSubmit={this.formSubmitHandler} />
          <TitleStyled>Contacts</TitleStyled>
          <Filter value={filter} onChange={this.filterChangeHandler} />
          <ContactsList
            contacts={visibleContacts}
            onBtnDelete={this.deleteContact}
          />
          <RadioInput onChangeBtn={this.radioBtnChangeHandler} />
        </SectionStyled>
      </>
    );
  }
}
