import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import {
  barclaysSelected,
  natwestSelected,
  lloydsSelected,
  hsbcSelected,
  tsbSelected,
  santanderSelected
} from '../../actions';
import { BankTouchableImage } from '../common';

class ImagesGrid extends Component {
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

    if (width < height) {
      this.setState({
        imageStyle: {
          minWidth: '48%',
          height: '33.3%'
        }
      });
    } else {
      this.setState({
        imageStyle: {
          minWidth: '32%',
          height: '50%'
        }
      });
    }
  }

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
    const { 
      viewContainerStyle,
      bankTouchableImageContainerStyle,
    } = styles;
    
    const {
      imageOne,
      imageTwo,
      imageThree,
      imageFour,
      imageFive,
      imageSix
    } = this.props;
    
    return (
      <View 
        onLayout={this.orientationChange.bind(this)}
        style={viewContainerStyle}
      >
        <View style={[bankTouchableImageContainerStyle, this.state.imageStyle]}>
          <BankTouchableImage
            selectedStyle={this.selected('barclays')}
            onPress={() => this.props.barclaysSelected()}
            source={imageOne}
          />
        </View>

        <View style={[bankTouchableImageContainerStyle, this.state.imageStyle]}>
          <BankTouchableImage
            selectedStyle={this.selected('natwest')}
            onPress={() => this.props.natwestSelected()}
            source={imageTwo}
          />
        </View>

        <View style={[bankTouchableImageContainerStyle, this.state.imageStyle]}>
          <BankTouchableImage 
            selectedStyle={this.selected('lloyds')}
            onPress={() => this.props.lloydsSelected()}
            source={imageThree}
          />
        </View>

        <View style={[bankTouchableImageContainerStyle, this.state.imageStyle]}>
          <BankTouchableImage 
            selectedStyle={this.selected('hsbc')}
            onPress={() => this.props.hsbcSelected()}
            source={imageFour}
          />
        </View>

        <View style={[bankTouchableImageContainerStyle, this.state.imageStyle]}>
          <BankTouchableImage
            selectedStyle={this.selected('tsb')}
            onPress={() => this.props.tsbSelected()}
            source={imageFive}
          />
        </View>

        <View style={[bankTouchableImageContainerStyle, this.state.imageStyle]}>
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
    flexDirection: 'row',
    flex: 1,
    marginBottom: 20,
    marginTop: 20,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bankTouchableImageContainerStyle: {
    flex: 1,
    justifyContent: 'flex-end'
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
