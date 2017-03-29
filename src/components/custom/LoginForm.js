import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import {
  surnameChanged,
  sortCodeChanged,
  accountNumberChanged,
  passcodeChanged,
  memorableWordChanged
} from '../../actions';
import { Input } from '../common';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageStyle: {
        maxWidth: 50,
        minWidth: '48%',
        height: '30%'
      }
    };
  }

  onSurnameChange(text) {
    this.props.surnameChanged(text);
  }

  onSortCodeChange(text) {
    this.props.sortCodeChanged(text);
  }

  onAccountNumberChange(text) {
    this.props.accountNumberChanged(text);
  }

  onPasscodeChange(text) {
    this.props.passcodeChanged(text);
  }

  onMemorableWordChange(text) {
    this.props.memorableWordChanged(text);
  }

  orientationChange() {
    const { height, width } = Dimensions.get('window');

    if (width < height) {
      this.setState({
        inputStyle: {
          height: '20%',
          minWidth: '100%'
        }
      });
    } else {
      this.setState({
        inputStyle: {
          height: '33.3%',
          minWidth: '45%'
        }
      });
    }
  }

  render() {
    const { viewContainer, inputContainer, placeholderTextColor } = styles;

    return (
      <View 
        onLayout={this.orientationChange.bind(this)}
        style={viewContainer}
      >
        <View style={[inputContainer, this.state.inputStyle]}>
          <Input
            placeholder='Surname'
            placeholderTextColor={placeholderTextColor}
            onChangeText={this.onSurnameChange.bind(this)}
            value={this.props.surname}
            maxLength={30}
          />
        </View>

        <View style={[inputContainer, this.state.inputStyle]}>
          <Input
            placeholder='Sort code'
            keyboardType='number-pad'
            placeholderTextColor={placeholderTextColor}
            onChangeText={this.onSortCodeChange.bind(this)}
            value={this.props.sortCode}
            maxLength={6}
          />
        </View>

        <View style={[inputContainer, this.state.inputStyle]}>
          <Input
            placeholder='Account number'
            keyboardType='number-pad'
            placeholderTextColor={placeholderTextColor}
            onChangeText={this.onAccountNumberChange.bind(this)}
            value={this.props.accountNumber}
            maxLength={8}
          />
        </View>

        <View style={[inputContainer, this.state.inputStyle]}>
          <Input
            placeholder='Passcode'
            placeholderTextColor={placeholderTextColor}
            onChangeText={this.onPasscodeChange.bind(this)}
            value={this.props.passcode}
            secureTextEntry={true}
          />
        </View>

        <View style={[inputContainer, this.state.inputStyle]}>
          <Input
            placeholder='Memorable word'
            placeholderTextColor={placeholderTextColor}
            onChangeText={this.onMemorableWordChange.bind(this)}
            value={this.props.memorableWord}
            maxLength={30}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  viewContainer: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 20,
    marginTop: 20,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputContainer: {
    height: '20%',
    minWidth: '100%'
  },
  placeholderTextColor: 'rgba(255, 255, 255, 0.8)'
};

const mapStatetoProps = ({ auth }) => {
  const { surname, sortCode, accountNumber, passcode, memorableWord } = auth;

  return { surname, sortCode, accountNumber, passcode, memorableWord };
};

export default connect(mapStatetoProps, {
  surnameChanged,
  sortCodeChanged,
  accountNumberChanged,
  passcodeChanged,
  memorableWordChanged
})(LoginForm);