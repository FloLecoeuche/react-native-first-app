import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import {
  barclaysSelected,
  natwestSelected,
  lloydsSelected,
  hsbcSelected,
  tsbSelected,
  santanderSelected
} from '../actions';
import { BankTouchableImage } from './common';

class ImagesGrid extends Component {

  selected(sender) {
    console.log(sender);
    console.log(this.props.imageId);
    switch (this.props.imageId) {
      case sender:
        return {
          borderColor: 'red'
        };
    
      default:
        return {};
    }
  }

  render() {
    const { viewContainerStyle, viewImageContainer } = styles;
    const {
      imageOne,
      imageTwo,
      imageThree,
      imageFour,
      imageFive,
      imageSix
    } = this.props;
    
    return (
      <View style={viewContainerStyle}>
        <View style={viewImageContainer}>
          <BankTouchableImage
            selectedStyle={this.selected('barclays')}
            onPress={() => this.props.barclaysSelected()}
            source={imageOne}
          />
          <BankTouchableImage
            selectedStyle={this.selected('natwest')}
            onPress={() => this.props.natwestSelected()}
            source={imageTwo}
          />
        </View>

        <View style={viewImageContainer}>
          <BankTouchableImage 
            selectedStyle={this.selected('lloyds')}
            onPress={() => this.props.lloydsSelected()}
            source={imageThree}
          />
          <BankTouchableImage 
            selectedStyle={this.selected('hsbc')}
            onPress={() => this.props.hsbcSelected()}
            source={imageFour}
          />
        </View>

        <View style={viewImageContainer}>
          <BankTouchableImage
            selectedStyle={this.selected('tsb')}
            onPress={() => this.props.tsbSelected()}
            source={imageFive}
          />
          <BankTouchableImage
            selectedStyle={this.selected('santander')}
            onPress={() => this.props.santanderSelected()}
            source={imageSix}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  viewContainerStyle: {
    flexDirection: 'column',
    flex: 1,
    marginBottom: 20,
    marginTop: 20
  },
  viewImageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  imageStyle: {
    flex: 0.9,
    width: undefined,
    alignSelf: 'stretch',
    justifyContent: 'space-between'
  },
  imageRowStyle: {
    flex: 1
  }
};

const mapStateToProps = (state) => {
  const { imageId } = state.bankImageSelectionReducer;
  console.log(state.bankImageSelectionReducer);
  return { imageId };
};

export default connect(mapStateToProps, {
  barclaysSelected,
  natwestSelected,
  lloydsSelected,
  hsbcSelected,
  tsbSelected,
  santanderSelected
})(ImagesGrid);
