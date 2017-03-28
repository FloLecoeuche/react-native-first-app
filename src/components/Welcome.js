import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { welcomePageUpdate } from '../actions';
import { Container, Section, Header, Button, ContentText } from './common';

class Welcome extends Component {
  componentWillMount() {
    if (!this.props.headerText) {
      this.props.welcomePageUpdate();
    }
  }

  componentWillReceiveProps() {
    if (!this.props.headerText) {
      this.props.welcomePageUpdate();
    }
  }

  onButtonPress() {
    Actions.chooseBank();
  }

  render() {
    const { viewContainerStyle, logoStyle, logoSectionStyle } = styles;
    const { headerText, contentText, buttonText } = this.props;

    return (
      <View style={viewContainerStyle}>
        <Container>
          <Section style={logoSectionStyle}>
            <Image 
              style={logoStyle}
              resizeMode='contain'
              source={require('../resources/images/LogoNopa.png')}
            />
          </Section>

          <Section style={{ flex: 1 }}>
            <Header headerText={headerText} />
            <ContentText contentText={contentText} />
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
  logoSectionStyle: {
    flex: 0.7,
    justifyContent: 'flex-end'
  },
  logoStyle: {
    height: 20,
    marginBottom: 25,
    alignSelf: 'center'
  }
};

const mapStateToProps = (state) => {
  const { headerText, contentText, buttonText } = state.stringsReducer.welcome;

  return { headerText, contentText, buttonText };
};

export default connect(mapStateToProps, { welcomePageUpdate })(Welcome);
