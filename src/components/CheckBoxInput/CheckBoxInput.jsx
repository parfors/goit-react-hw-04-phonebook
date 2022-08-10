import { Component } from 'react';
import { InputCheckStyled, LabelRadio } from 'components';
import PropTypes from 'prop-types';

export class CheckBoxInput extends Component {
  state = {
    agreement: false,
  };
  changeHandler = () => {
    this.setState(prevState => {
      return {
        agreement: !prevState.agreement,
      };
    });
    this.props.onChange();
  };

  static propTypes = {
    onChange: PropTypes.func,
  };

  render() {
    return (
      <>
        <LabelRadio>
          <InputCheckStyled
            onChange={this.changeHandler}
            type="checkBox"
            checked={this.state.agreement}
          />
          I agree
        </LabelRadio>
      </>
    );
  }
}
