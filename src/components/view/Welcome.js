import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { welcomePageUpdate } from '../../actions';
import { Container, Section, Header, Button, ContentText } from '../common';

import nopaLogo from '../../resources/images/LogoNopa.png';

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = portraitStyle;
  }

  componentWillMount() {
    /*if (!this.props.headerText) {
      this.props.welcomePageUpdate();
    }*/
  }

  onButtonPress() {
    Actions.chooseBank();
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
    const { viewContainerStyle, viewContentStyle, logoStyle, logoSectionStyle, headerContainerStyle } = styles;
    //const { headerText, contentText, buttonText } = this.props;

    return (
      <View
        onLayout={this.orientationChange.bind(this)}
        style={viewContainerStyle}
      >
        <Container>
          <Section style={viewContentStyle}>
            <Section style={logoSectionStyle}>
              <Image 
                style={[logoStyle, this.state.logoStyle]}
                resizeMode='contain'
                source={nopaLogo}
              />
            </Section>

            <Section style={headerContainerStyle}>
              <Header 
                headerText={"Welcome to Nopa connect"} 
              />
              <ContentText 
                contentText={"Keep track of all your expenses by connecting as many bank accounts as you'd like to your Nopa app"}
              />
            </Section>

            <Section style={this.state.buttonContainerStyle}>
              <Button
                onPress={this.onButtonPress.bind(this)}
                buttonText={"Select your fake bank account"}
              />
            </Section>
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
    flex: 1
  },
  logoSectionStyle: {
    flex: 0.7,
    justifyContent: 'flex-end'
  },
  logoStyle: {
    marginBottom: 30,
    alignSelf: 'center'
  },
  headerContainerStyle: {
    flex: 1
  }
};

const portraitStyle = {
  logoStyle: {
    height: '10%'
  },
  buttonContainerStyle: {
    height: '7%'
  }
};

const landscapeStyle = {
  logoStyle: {
    height: '20%'
  },
  buttonContainerStyle: {
    height: '12%'
  }
};

const mapStateToProps = ({ stringsReducer }) => {
  const { headerText, contentText, buttonText } = stringsReducer.welcome;

  return { headerText, contentText, buttonText };
};

export default connect(mapStateToProps, { welcomePageUpdate })(Welcome);
