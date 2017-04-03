import React, { Component } from 'react';
import { 
  View, 
  Dimensions, 
  Keyboard, 
  KeyboardAvoidingView, 
  ScrollView, 
  TouchableWithoutFeedback 
} from 'react-native';
import { connect } from 'react-redux';
import { 
  connectBankPageUpdate,
  loginUser
} from '../../actions';
import { 
  Container, 
  Section, 
  Header, 
  Button, 
  ContentText,
  Spinner
} from '../common';
import LoginForm from '../custom/LoginForm';


class ConnectBank extends Component {
  constructor(props) {
    super(props);

    this.state = { portraitStyle, scrollViewContainerStyle: { height: '70%' } };
  }

  componentWillMount() {
    /*if (!this.props.headerText) {
      this.props.connectBankPageUpdate();
    }*/
  }

  onButtonPress(surname, sortCode, accountNumber, passcode, memorableWord) {
    this.props.loginUser({ 
      surname, 
      sortCode, 
      accountNumber, 
      passcode, 
      memorableWord 
    });
  }

  orientationChange() {
    const { height, width } = Dimensions.get('window');

    if (width < height) {
      this.setState(portraitStyle);
      this.setState({ scrollViewContainerStyle: { height: height * 0.63 } });
    } else {
      this.setState(landscapeStyle);
      this.setState({ scrollViewContainerStyle: { height: height * 0.46 } });
    }
  }

  renderButton() {
      if (this.props.loading) {
          return <Spinner size='large' />;
      }

      return (
          <Button
            onPress={this.onButtonPress.bind(this)}
            buttonText={"Continue"}
          />
      );
  }

  render() {
    const { viewContainerStyle, scrollViewContainerStyle, viewContentStyle, loginFormContainer } = styles;
    //const { navBarText, headerText, contentText, buttonText } = this.props;

    return (
      <View 
        onLayout={this.orientationChange.bind(this)}
        style={viewContainerStyle}
      >
        <TouchableWithoutFeedback
          onPress={() => Keyboard.dismiss()}
        >
          <View style={{ flex: 1 }}>
            <Container>
              <KeyboardAvoidingView
                style={[{ flex: 1/*, borderWidth: 1, borderColor: 'red'*/ }, this.state.keyboardAvoidingViewStyle]}
                behavior='padding'
              >
              <Section style={viewContentStyle}>
                <Section style={this.state.headerContainerStyle}>
                  <Header 
                    headerText={"Log in to your online banking"}
                  />
                  <ContentText
                    contentText={"Enter the same details you use to login to your online banking"}
                  />
                </Section>

                <Section style={[loginFormContainer, this.state.loginFormStyle]} >
                  <ScrollView contentContainerStyle={[scrollViewContainerStyle, this.state.scrollViewContainerStyle]}>
                    <LoginForm />
                  </ScrollView>
                </Section>
              </Section>

              <Section style={this.state.buttonContainerStyle}>
                {/*<Button
                  onPress={this.onButtonPress.bind(this)}
                  buttonText={buttonText}
                />*/}
                {this.renderButton()}
              </Section>
            </KeyboardAvoidingView>
            </Container>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = {
  viewContainerStyle: {
    backgroundColor: '#304FFE',
    flex: 1,
  },
  scrollViewContainerStyle: {
    height: '70%'
  },
  viewContentStyle: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  headerContainerStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    minHeight: '16.5%'
  },
  loginFormContainer: {
    width: '100%'
  }
};

const portraitStyle = {
  headerContainerStyle: {
    height: '20%',
    justifyContent: 'center'
  },
  loginFormStyle: {
    height: '70%'
  },
  buttonContainerStyle: {
    height: '7%'
  }
};

const landscapeStyle = {
  headerContainerStyle: {
    minHeight: '24%',
    justifyContent: 'center'
  },
  loginFormStyle: {
    height: '55%'
  },
  buttonContainerStyle: {
    height: '12%'
  }
};

const mapStateToProps = ({ stringsReducer, auth }) => {
  const { navBarText, headerText, contentText, buttonText } = stringsReducer.connectBank;
  const { loading } = auth;

  return { navBarText, headerText, contentText, buttonText, loading };
};

export default connect(mapStateToProps, { connectBankPageUpdate, loginUser })(ConnectBank);
