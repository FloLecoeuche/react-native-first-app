import React, { Component } from 'react';
import { View, Dimensions, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { connectBankPageUpdate } from '../../actions';
import { Container, Section, Header, Button, ContentText } from '../common';
import LoginForm from '../custom/LoginForm';

class ConnectBank extends Component {
  constructor(props) {
    super(props);

    this.state = portraitStyle;
  }

  componentWillMount() {
    if (!this.props.headerText) {
      this.props.connectBankPageUpdate();
    }
  }

  onButtonPress() {

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
    const { viewContainerStyle, viewContentStyle, loginFormContainer } = styles;
    const { navBarText, headerText, contentText, buttonText } = this.props;

    return (
      <View 
        onLayout={this.orientationChange.bind(this)}
        style={viewContainerStyle}
      >
        <Container>
          <Section style={viewContentStyle}>
            <KeyboardAvoidingView 
              style={{ flex: 1 }}
              behavior="padding"
            >
            <Section style={this.state.headerContainerStyle}>
              <Header headerText={headerText} />
              <ContentText contentText={contentText} />
            </Section>

            <Section style={[loginFormContainer, this.state.loginFormStyle]} >
              <LoginForm />
            </Section>

            <Section style={this.state.buttonContainerStyle}>
              <Button
                onPress={this.onButtonPress.bind(this)}
                buttonText={buttonText}
              />
            </Section>
            </KeyboardAvoidingView>
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
    justifyContent: 'space-between'
  },
  headerContainerStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    minHeight: '16.5%'
  },
  loginFormContainer: {
    width: '100%',
    minHeight: '76.5%'
  }
};

const portraitStyle = {
  loginFormStyle: {
    height: '30%',
    borderWidth: 1,
    borderColor: 'red'
  },
  headerContainerStyle: {
    height: '38%',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'red'
  },
  buttonContainerStyle: {
    height: '7%'
  }
};

const landscapeStyle = {
  loginFormStyle: {
    height: '45%',
    borderWidth: 1,
    borderColor: 'red'
  },
  headerContainerStyle: {
    height: '38%',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'red'
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
