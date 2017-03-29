import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { chooseBankPageUpdate } from '../../actions';
import ImagesGrid from '../custom/ImagesGrid';
import { Container, Section, Header, Button, ContentText } from '../common';

class ChooseBank extends Component {
  constructor(props) {
    super(props);

    this.state = portraitStyle;
  }

  componentWillMount() {
    if (!this.props.headerText) {
      this.props.chooseBankPageUpdate();
    }
  }

  onButtonPress() {
    Actions.connectBank();
  }

  orientationChange() {
    const { height, width } = Dimensions.get('window');

    if (width < height) {
      this.setState(portraitStyle);
    } else {
      this.setState(landscapeStyle);
    }
  }

  render() {
    const { viewContainerStyle, viewContentStyle, headerContainerStyle, imagesGridContainerStyle } = styles;
    const { navBarText, headerText, contentText, buttonText } = this.props;

    return (
      <View
        onLayout={this.orientationChange.bind(this)}
        style={viewContainerStyle}
      >
        <Container>
          <Section style={viewContentStyle}>
            <Section style={this.state.headerContainerStyle}>
              <Header headerText={headerText} />
              <ContentText contentText={contentText} />
            </Section>

            <Section style={[imagesGridContainerStyle, this.state.imagesGridStyle]}>
              <ImagesGrid 
                imageOne={require('../../resources/images/Barclays.png')}
                imageTwo={require('../../resources/images/LogoNatwest.png')}
                imageThree={require('../../resources/images/LogoLloyds.png')}
                imageFour={require('../../resources/images/LogoHSBC.png')}
                imageFive={require('../../resources/images/LogoTSB.png')}
                imageSix={require('../../resources/images/LogoSantander.png')}
              />
            </Section>
          </Section>
          <Section style={this.state.buttonContainerStyle}>
            <Button
              onPress={this.onButtonPress.bind(this)}
              buttonText={buttonText}
            />
          </Section>
        </Container>
      </View>
    );
  }
}

const styles = {
  viewContainerStyle: {
    backgroundColor: '#304FFE',
    flex: 1
  },
  viewContentStyle: {
    flex: 1,
    justifyContent: 'space-around'
  },
  headerContainerStyle: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  imagesGridContainerStyle: {
    width: '100%'
  }
};

const portraitStyle = {
  imagesGridStyle: {
    height: '62%'
  },
  headerContainerStyle: {
    height: '38%',
    justifyContent: 'center'
  },
  buttonContainerStyle: {
    height: '7%'
  }
};

const landscapeStyle = {
  imagesGridStyle: {
    height: '50%'
  },
  headerContainerStyle: {
    height: '50%',
    justifyContent: 'center'
  },
  buttonContainerStyle: {
    height: '12%'
  }
};

const mapStateToProps = (state) => {
  const { navBarText, headerText, contentText, buttonText } = state.stringsReducer.chooseBank;

  return { navBarText, headerText, contentText, buttonText };
};

export default connect(mapStateToProps, { chooseBankPageUpdate })(ChooseBank);
