import React, { Component } from 'react';
import { TouchableOpacity, Image, Dimensions } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Welcome from './components/view/Welcome';
import ChooseBank from './components/view/ChooseBank';
import ConnectBank from './components/view/ConnectBank';
//import BankTransactions from './components/BankTransactions';

class RouterComponent extends Component {

  // Totaly UGLY... but needed for i18n! Don't loose time on this look below TO DO
  // TO DO: 
  //  - Remove orientation logic and backButton logic and styles = 80% of the file
  //  - Add and push features needed on Github repo

  constructor(props) {
    super(props);

    const { height, width } = Dimensions.get('window');

    if (width < height) {
      this.state = portraitStyle;
    } else {
      this.state = landscapeStyle;
    }
  }

  backToWelcome() {
    Actions.welcome();
  }

  backToChooseBank() {
    Actions.chooseBank();
  }

  backButtonChooseBank() {
    return (
        <TouchableOpacity
          onLayout={this.orientationChange.bind(this)}
          style={[styles.backButtonStyle, this.state.backButtonStyle]}
          onPress={this.backToWelcome.bind(this)}
        >
            <Image 
              resizeMode='contain'
              style={styles.backImageStyle}
              source={require('./resources/images/System/left_arrow.png')}
            />
        </TouchableOpacity>
    );
  }

  backButtonConnectBank() {
    return (
        <TouchableOpacity
          onLayout={this.orientationChange.bind(this)}
          style={[styles.backButtonStyle, this.state.backButtonStyle]}
          onPress={this.backToChooseBank.bind(this)}
        >
            <Image 
              resizeMode='contain'
              style={styles.backImageStyle}
              source={require('./resources/images/System/left_arrow.png')}
            />
        </TouchableOpacity>
    );
  }

  orientationChange() {
    const { height, width } = Dimensions.get('window');

    if (width < height) {
      console.log('portrait');
      this.setState(portraitStyle);
    } else {
      console.log('landscape');
      this.setState(landscapeStyle);
    }
  }

  render() {
    const { navBarStyle, titleStyle } = styles;
    
    return (
      <Router 
        navigationBarStyle={navBarStyle}
        leftButtonStyle={{ backgroundColor: 'red', width: '10%', alignSelf: 'flex-end', justifyContent: 'flex-end' }}
        titleStyle={titleStyle}
      >
        <Scene
          hideNavBar={true}
          key='welcome'
          component={Welcome}
          initial
        />
        
        <Scene
          renderBackButton={this.backButtonChooseBank.bind(this)}
          hideNavBar={false}
          key='chooseBank' 
          component={ChooseBank} 
          title='Choose bank' 
        />
        
        <Scene
          renderBackButton={this.backButtonConnectBank.bind(this)}
          hideNavBar={false}
          key='connectBank'
          component={ConnectBank}
          title='Connect to bank account'
        />
        
        {/*<Scene
          key='transactions'
          component={BankTransactions}
          title='Your transactions'
        />*/}
      </Router>
    );
  }
}

const styles = {
  navBarStyle: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0
  },
  titleStyle: {
    marginLeft: 55,
    width: undefined,
    color: 'white',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    fontWeight: '600'
  },
  backButtonStyle: {
    height: '100%'
  },
  backImageStyle: {
    height: '120%',
    width: '100%',
    borderWidth: 1,
    borderColor: 'yellow'
  }
};

const portraitStyle = {
  backButtonStyle: {
    width: '28%',
    borderWidth: 1,
    borderColor: 'red'
  }
};

const landscapeStyle = {
  backButtonStyle: {
    width: '22%',
    borderWidth: 1,
    borderColor: 'red'
  }
};

export default RouterComponent;
