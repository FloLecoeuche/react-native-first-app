import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

const BankTouchableImage = (props) => {
  const { imageContainer, imageStyle } = styles;

  return (
    <TouchableOpacity 
      onPress={props.onPress} 
      activeOpacity={0.9} 
      style={[imageContainer, props.selectedStyle]}
    >
      <Image
        style={imageStyle}
        resizeMode='contain'
        source={props.source}
      />
    </TouchableOpacity>
  );
}; 

const styles = {
  imageContainer: {
    width: '100%',
    height: '89%',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageStyle: {
    height: '80%',
    width: '90%'
  }
};

export { BankTouchableImage };
