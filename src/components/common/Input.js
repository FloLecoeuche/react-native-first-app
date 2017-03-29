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
  const { inputStyle, inputContainerStyle, borderBottomStyle } = styles;

  return (
    <View style={inputContainerStyle}>
      <View style={borderBottomStyle}>
        <TextInput
          returnKeyType='done'
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
    </View>
  );
};

const styles = {
  inputContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center'
  },
  borderBottomStyle: {
    flex: 1,
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#1d3099'
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    fontSize: 17,
    fontWeight: '400'
  }
};

export { Input };
