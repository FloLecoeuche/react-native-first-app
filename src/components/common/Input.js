import React from 'react';
import { TextInput, View } from 'react-native';

const Input = ({ 
  keyboardType,
  value,
  onChangeText, 
  placeholder, 
  secureTextEntry, 
  placeholderTextColor,
  maxLength
 }) => {
  const { inputStyle, inputContainerStyle } = styles;

  return (
    <View style={inputContainerStyle}>
      <TextInput
        clearButtonMode='while-editing'
        underlineColorAndroid='transparent'
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={inputStyle}
        autoCorrect={false}
        autoCapitalize='none'
        value={value}
        onChangeText={onChangeText}
        maxLength={maxLength}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    flex: 1,
    color: 'white',
    fontSize: 17,
    fontWeight: '400',
    //borderWidth: 1,
    //borderColor: 'black'
  },
  inputContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    minHeight: 35,
    marginBottom: 45,
    borderBottomWidth: 1,
    borderBottomColor: '#1d3099'
  }
};

export { Input };
