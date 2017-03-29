import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { chooseBankPageUpdate } from '../../actions';
import ImagesGrid from '../custom/ImagesGrid';
import { Container, Section, Header, Button, ContentText } from '../common';

class ChooseBank extends Component {
  componentWillMount() {
    if (!this.props.headerText) {
      this.props.chooseBankPageUpdate();
    }
  }

  onButtonPress() {
    Actions.connectBank();
  }

  render() {
    const { viewContainerStyle, headerContainerStyle, imagesGridContainerStyle } = styles;
    const { navBarText, headerText, contentText, buttonText } = this.props;

    return (
      <View style={viewContainerStyle}>
        <Container>

          <Section style={headerContainerStyle}>
            <Header headerText={headerText} />
            <ContentText contentText={contentText} />
          </Section>

          <Section style={imagesGridContainerStyle}>
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
    paddingTop: 40,
    backgroundColor: '#304FFE',
    flex: 1
  },
  headerContainerStyle: {
    flex: 1,
    justifyContent: 'center'
  },
  imagesGridContainerStyle: {
    height: '60%',
    width: '100%'
  }
};

const mapStateToProps = (state) => {
  const { navBarText, headerText, contentText, buttonText } = state.stringsReducer.chooseBank;

  return { navBarText, headerText, contentText, buttonText };
};

export default connect(mapStateToProps, { chooseBankPageUpdate })(ChooseBank);
