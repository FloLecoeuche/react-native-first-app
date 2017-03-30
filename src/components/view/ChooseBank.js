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
    const { viewContainerStyle, viewContentStyle, imagesGridContainerStyle } = styles;
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
                imageOne={require('../../resources/images/Bank_Logo/Barclays.png')}
                imageTwo={require('../../resources/images/Bank_Logo/LogoNatwest.png')}
                imageThree={require('../../resources/images/Bank_Logo/LogoLloyds.png')}
                imageFour={require('../../resources/images/Bank_Logo/LogoHSBC.png')}
                imageFive={require('../../resources/images/Bank_Logo/LogoTSB.png')}
                imageSix={require('../../resources/images/Bank_Logo/LogoSantander.png')}
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
    justifyContent: 'flex-end'
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
    height: '68%'
  },
  headerContainerStyle: {
    height: '20%',
    justifyContent: 'center'
  },
  buttonContainerStyle: {
    height: '7%'
  }
};

const landscapeStyle = {
  imagesGridStyle: {
    height: '65%'
  },
  headerContainerStyle: {
    height: '14%',
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
