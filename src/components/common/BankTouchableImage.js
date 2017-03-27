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
    flex: 0.9,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'transparent',
    justifyContent: 'space-between',
    padding: 15
  },
  imageStyle: {
    flex: 0.9,
    width: undefined,
    alignSelf: 'stretch',
    justifyContent: 'space-between'
  }
};

export { BankTouchableImage };
