import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { welcomePageUpdate } from '../../actions';
import { Container, Section, Header, Button, ContentText } from '../common';

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logoStyle: {
        height: '10%'
      }
    };
  }

  componentWillMount() {
    if (!this.props.headerText) {
      this.props.welcomePageUpdate();
    }
  }

  onButtonPress() {
    Actions.chooseBank();
  }

  orientationChange() {
    const { height, width } = Dimensions.get('window');

    if (width < height) {
      this.setState({
        logoStyle: {
          height: '10%'
        }
      });
    } else {
      this.setState({
        logoStyle: {
          height: '20%'
        }
      });
    }
  }

  render() {
    const { viewContainerStyle, logoStyle, logoSectionStyle } = styles;
    const { headerText, contentText, buttonText } = this.props;

    return (
      <View 
        onLayout={this.orientationChange.bind(this)}
        style={viewContainerStyle}
      >
        <Container>
          <Section style={logoSectionStyle}>
            <Image 
              style={[logoStyle, this.state.logoStyle]}
              resizeMode='contain'
              source={require('../../resources/images/LogoNopa.png')}
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
    marginBottom: 30,
    alignSelf: 'center'
  }
};

const mapStateToProps = (state) => {
  const { headerText, contentText, buttonText } = state.stringsReducer.welcome;

  return { headerText, contentText, buttonText };
};

export default connect(mapStateToProps, { welcomePageUpdate })(Welcome);
