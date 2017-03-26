import React from 'react';
import { View, Image } from 'react-native';

const ImagesGrid = ({ leftImagePath, rightImagePath }) => {
  const { viewContainerStyle, imageContainer, imageStyle } = styles;

  return (
    <View style={viewContainerStyle}>
      <View style={imageContainer}>
        <Image style={imageStyle} resizeMode='contain' source={require('../../resources/images/Barclays.png')} />
      </View>

      <View style={imageContainer}>
        <Image style={imageStyle} resizeMode='contain' source={require('../../resources/images/LogoNatwest.png')} />
      </View>
    </View>
  );
};

const styles = {
  viewContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageContainer: {
    backgroundColor: 'red',
    padding: 10
  },
  imageStyle: {
    alignSelf: 'center',
    padding: 10,
    width: 150,
    backgroundColor: 'white'
  }
};

export { ImagesGrid };
