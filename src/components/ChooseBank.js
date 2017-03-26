import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
//import { Actions } from 'react-native-router-flux';
import { chooseBankPageUpdate } from '../actions';
import { Container, Section, Header, Button, ContentText, ImagesGrid } from './common';

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

          {/*<Section style={{ flex: 1 }}>
            <Header headerText={headerText} />
            <ContentText contentText={contentText} />
          </Section>*/}

          <Section>
            <ImagesGrid 
              leftImagePath={'../../resources/images/Barclays.png'}
              rightImagePath={'../../resources/images/LogoNatwest.png'}
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
  },
  logoStyle: {
    height: 20,
    marginBottom: 25,
    alignSelf: 'center'
  },
  buttonStyle: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  }
};

const mapStateToProps = (state) => {
  const { navBarText, headerText, contentText, buttonText } = state.stringsReducer.chooseBank;

  return { navBarText, headerText, contentText, buttonText };
};

export default connect(mapStateToProps, { chooseBankPageUpdate })(ChooseBank);
