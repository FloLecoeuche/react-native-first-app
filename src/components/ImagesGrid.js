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
    switch (this.props.imageId) {
      case sender:
        return {
          borderColor: '#f97056'
        };
    
      default:
        return {};
    }
  }

  render() {
    const { viewContainerStyle, viewImageContainer, imageStyle } = styles;
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
        {/*<View style={viewImageContainer}>
          <BankTouchableImage
            selectedStyle={this.selected('barclays')}
            onPress={() => this.props.barclaysSelected()}
            source={imageOne}
          />

          <FlexSeparator flex={0.1} />

          <BankTouchableImage
            selectedStyle={this.selected('natwest')}
            onPress={() => this.props.natwestSelected()}
            source={imageTwo}
          />
        </View>

        <FlexSeparator flex={0.1} />

        <View style={viewImageContainer}>
          <BankTouchableImage 
            selectedStyle={this.selected('lloyds')}
            onPress={() => this.props.lloydsSelected()}
            source={imageThree}
          />

          <FlexSeparator flex={0.1} />

          <BankTouchableImage 
            selectedStyle={this.selected('hsbc')}
            onPress={() => this.props.hsbcSelected()}
            source={imageFour}
          />
        </View>

        <FlexSeparator flex={0.1} />

        <View style={viewImageContainer}>
          <BankTouchableImage
            selectedStyle={this.selected('tsb')}
            onPress={() => this.props.tsbSelected()}
            source={imageFive}
          />

          <FlexSeparator flex={0.1} />

          <BankTouchableImage
            selectedStyle={this.selected('santander')}
            onPress={() => this.props.santanderSelected()}
            source={imageSix}
          />
        </View>*/}
      </View>
    );
  }
}

const styles = {
  viewContainerStyle: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 20,
    marginTop: 20,
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  viewImageContainer: {
    flex: 1,
    flexDirection: 'row',
    //justifyContent: 'space-between',
    alignItems: 'center'
  },
  imageStyle: {
    minWidth: 150,
    flex: 1,
    //alignSelf: 'stretch',
    //justifyContent: 'space-between'
  },
  imageRowStyle: {
    flex: 1
  }
};

const mapStateToProps = (state) => {
  const { imageId } = state.bankImageSelectionReducer;
  console.log(imageId);
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