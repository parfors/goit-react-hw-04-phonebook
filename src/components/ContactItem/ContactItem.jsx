import {
  ParagraphStyled,
  ButtonDeleteStyled,
  ListItem,
  CheckBoxInput,
} from 'components';
import PropTypes from 'prop-types';
import { Component } from 'react';

export class ContactItem extends Component {
  state = {
    agreement: false,
  };

  onChangeBox = () => {
    this.setState({
      agreement: !this.state.agreement,
    });
  };

  render() {
    const { name, number, onBtnDelete } = this.props;
    return (
      <>
        <ListItem>
          <ParagraphStyled>Name: {name}</ParagraphStyled>
          <ParagraphStyled>Number: {number}</ParagraphStyled>
          <CheckBoxInput onChange={this.onChangeBox} />
          <ButtonDeleteStyled
            disabled={!this.state.agreement}
            onClick={onBtnDelete}
            type="button"
          >
            Delete
          </ButtonDeleteStyled>
        </ListItem>
      </>
    );
  }
}

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onBtnDelete: PropTypes.func,
};
