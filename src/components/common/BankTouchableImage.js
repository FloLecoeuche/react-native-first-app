import React, { Component } from 'react';
import { Image, TouchableOpacity, Dimensions } from 'react-native';

class BankTouchableImage extends Component {
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

  orientationChange() {
    const { height, width } = Dimensions.get('window');
    console.log('OrientationChange');
    console.log('Width :' + width);
    console.log('Height :' + height);

    if (width < height) {
      this.setState({
        imageStyle: {
          maxWidth: 50,
          minWidth: '48%',
          height: '32%'
        }
      });
    } else {
      this.setState({
        imageStyle: {
          maxWidth: 50,
          minWidth: '32%',
          height: '48%'
        }
      });
    }
  }

  orientationStyle() {
    console.log('COIN');
  }

  render() {
    const { imageContainer, imageStyle } = styles;

    return (
      <TouchableOpacity 
        onPress={this.props.onPress} 
        activeOpacity={0.9} 
        style={[imageContainer, this.props.selectedStyle, this.state.imageStyle]}
      >
        <Image
          onLayout={this.orientationChange.bind(this)}
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
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'transparent',
    paddingRight: 15,
    paddingLeft: 15,
    maxWidth: 50,
    minWidth: '48%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageStyle: {
    height: '80%',
    width: '90%'
  }
};

export { BankTouchableImage };
