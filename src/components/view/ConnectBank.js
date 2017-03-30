import React, { Component } from 'react';
import { View, Dimensions, Keyboard, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { connectBankPageUpdate } from '../../actions';
import { Container, Section, Header, Button, ContentText } from '../common';
import LoginForm from '../custom/LoginForm';

class ConnectBank extends Component {
  constructor(props) {
    super(props);

    var _keyboardWillShowSubscription;
    var _keyboardWillHideSubscription;
    this.state = { portraitStyle, scrollViewContainerStyle: { height: '70%' }, keyboardAvoidingViewStyle: { flex: 1, height: '100%' } };
  }

  componentWillMount() {
    if (!this.props.headerText) {
      this.props.connectBankPageUpdate();
    }
  }

  componentDidMount() {
		this._keyboardWillShowSubscription = Keyboard.addListener('keyboardDidShow', (e) => this._keyboardWillShow(e));
		this._keyboardWillHideSubscription = Keyboard.addListener('keyboardDidHide', (e) => this._keyboardWillHide(e));
	}
	componentWillUnmount() {
		this._keyboardWillShowSubscription.remove();
		this._keyboardWillHideSubscription.remove();
	}

  onButtonPress() {
    console.log('Button pressed');
  }

  getContainerHeight() {
    const containerHeight = Dimensions.get('window').height - 20;

    return containerHeight;
  }

  orientationChange() {
    const { height, width } = Dimensions.get('window');
    const containerHeight = this.getContainerHeight();

    Keyboard.dismiss();

    if (width < height) {
      this.setState(portraitStyle);
      this.setState({ scrollViewContainerStyle: { height: containerHeight * 0.63 } });
    } else {
      this.setState(landscapeStyle);
      this.setState({ scrollViewContainerStyle: { height: containerHeight * 0.46 } });
    }
  }

	_keyboardWillShow(e) {
    console.log('Keyboard will show');
		//this.setState({height: height - e.endCoordinates.height});
	}
	_keyboardWillHide(e) {
		console.log('Keyboard will hide');
    this.setState({ keyboardAvoidingViewStyle: { flex: 1, height: '100%' } });
    //this.setState({height: height});
	}

  render() {
    const { viewContainerStyle, scrollViewContainerStyle, viewContentStyle, loginFormContainer } = styles;
    const { navBarText, headerText, contentText, buttonText } = this.props;

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
                keyboardVerticalOffset={0}
                style={[{ flex: 1, borderWidth: 1, borderColor: 'red' }, this.state.keyboardAvoidingViewStyle]}
                behavior='height'
              >
              <Section style={viewContentStyle}>
                <Section style={this.state.headerContainerStyle}>
                  <Header headerText={headerText} />
                  <ContentText contentText={contentText} />
                </Section>

                <Section style={[loginFormContainer, this.state.loginFormStyle]} >
                  <ScrollView contentContainerStyle={[scrollViewContainerStyle, this.state.scrollViewContainerStyle]}>
                    <LoginForm />
                  </ScrollView>
                </Section>
              </Section>

              <Section style={this.state.buttonContainerStyle}>
                <Button
                  onPress={this.onButtonPress.bind(this)}
                  buttonText={buttonText}
                />
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

const mapStateToProps = (state) => {
  const { navBarText, headerText, contentText, buttonText } = state.stringsReducer.connectBank;

  return { navBarText, headerText, contentText, buttonText };
};

export default connect(mapStateToProps, { connectBankPageUpdate })(ConnectBank);
