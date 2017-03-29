import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { connectBankPageUpdate } from '../../actions';
import { Container, Section, Header, Button, ContentText } from '../common';
import LoginForm from '../custom/LoginForm';

class ConnectBank extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginFormStyle: {
        height: '65%'
      }
    };
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
      this.setState({
        loginFormStyle: {
          height: '65%'
        }
      });
    } else {
      this.setState({
        loginFormStyle: {
          height: '45%'
        }
      });
    }
  }

  render() {
    const { viewContainerStyle, headerContainerStyle, loginFormContainer } = styles;
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

          <Section style={[loginFormContainer, this.state.loginFormStyle]} >
            <LoginForm />
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
  loginFormContainer: {
    width: '100%'
  }
};

const mapStateToProps = (state) => {
  const { navBarText, headerText, contentText, buttonText } = state.stringsReducer.connectBank;

  return { navBarText, headerText, contentText, buttonText };
};

export default connect(mapStateToProps, { connectBankPageUpdate })(ConnectBank);
