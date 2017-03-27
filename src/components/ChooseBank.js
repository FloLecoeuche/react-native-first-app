import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
//import { Actions } from 'react-native-router-flux';
import { chooseBankPageUpdate } from '../actions';
import ImagesGrid from './ImagesGrid';
import { Container, Section, Header, Button, ContentText } from './common';

class ChooseBank extends Component {
  componentWillMount() {
    if (!this.props.headerText) {
      this.props.chooseBankPageUpdate();
    }
  }

  render() {
    const { viewContainerStyle, buttonStyle } = styles;
    const { navBarText, headerText, contentText, buttonText } = this.props;

    return (
      <View style={viewContainerStyle}>
        <Container>

          <Section style={{ flex: 0.6, justifyContent: 'center' }}>
            <Header headerText={headerText} />
            <ContentText contentText={contentText} />
          </Section>

          <Section style={{ flex: 1 }}>
            <ImagesGrid 
              imageOne={require('../resources/images/Barclays.png')}
              imageTwo={require('../resources/images/LogoNatwest.png')}
              imageThree={require('../resources/images/LogoLloyds.png')}
              imageFour={require('../resources/images/LogoHSBC.png')}
              imageFive={require('../resources/images/LogoTSB.png')}
              imageSix={require('../resources/images/LogoSantander.png')}
            />
          </Section>

          <Section>
            <Button
              style={buttonStyle}
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
  }
};

const mapStateToProps = (state) => {
  const { navBarText, headerText, contentText, buttonText } = state.stringsReducer.chooseBank;

  return { navBarText, headerText, contentText, buttonText };
};

export default connect(mapStateToProps, { chooseBankPageUpdate })(ChooseBank);
