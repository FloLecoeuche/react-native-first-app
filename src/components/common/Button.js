import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, buttonText }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonStyle}
      activeOpacity={0.9}
    >
      <Text style={textStyle}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: 15,
    color: 'white'
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f97056',
    borderRadius: 2
  }
};

export { Button };
