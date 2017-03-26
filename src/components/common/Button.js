import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, buttonText }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle} activeOpacity={0.7}>
      <Text style={textStyle}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    //fontFamily: 'montserra',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '700',
    color: 'white',
    paddingTop: 20,
    paddingBottom: 20
  },
  buttonStyle: {
    backgroundColor: '#f97056',
    borderRadius: 2
  }
};

export { Button };
