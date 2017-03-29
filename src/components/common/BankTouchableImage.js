import React, { Component } from 'react';
import { Image, TouchableOpacity, Dimensions } from 'react-native';

class BankTouchableImage extends Component {
  render() {
    const { imageContainer, imageStyle } = styles;

    return (
      <TouchableOpacity 
        onPress={this.props.onPress} 
        activeOpacity={0.9} 
        style={[imageContainer, this.props.selectedStyle/*, this.state.imageStyle*/]}
      >
        <Image
          style={imageStyle}
          resizeMode='contain'
          source={this.props.source}
        />
      </TouchableOpacity>
    );
  }
}

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
