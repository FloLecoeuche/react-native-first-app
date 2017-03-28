import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { connectBankPageUpdate } from '../actions';
import { Container, Section, Header, Button, ContentText } from './common';
import LoginForm from './LoginForm';

class ConnectBank extends Component {
  componentWillMount() {
    if (!this.props.headerText) {
      this.props.connectBankPageUpdate();
    }
  }

  onButtonPress() {

  }

  render() {
    const { viewContainerStyle } = styles;
    const { navBarText, headerText, contentText, buttonText } = this.props;

    return (
      <View style={viewContainerStyle}>
        <Container>
          <Section style={{ flex: 0.6, justifyContent: 'center' }}>
            <Header headerText={headerText} />
            <ContentText contentText={contentText} />
          </Section>

          <Section style={{ flex: 1 }} >
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
    paddingTop: 20,
    backgroundColor: '#304FFE',
    flex: 1
  }
};

const mapStateToProps = (state) => {
  const { navBarText, headerText, contentText, buttonText } = state.stringsReducer.connectBank;

  return { navBarText, headerText, contentText, buttonText };
};

export default connect(mapStateToProps, { connectBankPageUpdate })(ConnectBank);
