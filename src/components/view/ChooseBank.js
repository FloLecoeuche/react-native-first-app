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

    this.state = {
      imagesGridStyle: {
        height: '62%'
      }
    };
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
      this.setState({
        imagesGridStyle: {
          height: '62%'
        }
      });
    } else {
      this.setState({
        imagesGridStyle: {
          height: '50%'
        }
      });
    }
  }

  render() {
    const { viewContainerStyle, headerContainerStyle, imagesGridContainerStyle } = styles;
    const { navBarText, headerText, contentText, buttonText } = this.props;

    return (
      <View
        onLayout={this.orientationChange.bind(this)}
        style={viewContainerStyle}
      >
        <Container>

          <Section style={headerContainerStyle}>
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

          <Section>
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
  headerContainerStyle: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  imagesGridContainerStyle: {
    width: '100%'
  }
};

const mapStateToProps = (state) => {
  const { navBarText, headerText, contentText, buttonText } = state.stringsReducer.chooseBank;

  return { navBarText, headerText, contentText, buttonText };
};

export default connect(mapStateToProps, { chooseBankPageUpdate })(ChooseBank);
