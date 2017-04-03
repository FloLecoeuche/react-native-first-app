import React, { Component } from 'react'; 
import { TouchableOpacity, Image, Dimensions, Platform } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux'; 

import Welcome from './components/view/Welcome';
import ChooseBank from './components/view/ChooseBank';
import ConnectBank from './components/view/ConnectBank';
import BankTransactions from './components/view/BankTransactions';

import leftArrow from './resources/images/System/left_arrow.png';

// Issue : i18n doesn't work corectly when bakcButton is pressed
// Use static text instead of time to find a solution

class RouterComponent extends Component { 
  backButtonPressed() {
    Actions.pop();
  }

  renderBackButton() {
    const { 
      backButtonStyle,
      backButtonImageStyle
    } = styles;

    return (
      <TouchableOpacity
        style={backButtonStyle}
        onPress={this.backButtonPressed.bind(this)}
      >
        <Image
          style={backButtonImageStyle}
          resizeMode='contain'
          source={leftArrow}
        />
      </TouchableOpacity>
    );
  }

  render() {
    const { 
      navBarStyle,
      titleStyle,
    } = styles;

    return ( 
      <Router
        navigationBarStyle={navBarStyle} 
        titleStyle={titleStyle}
        renderBackButton={this.renderBackButton.bind(this)}
      > 
        <Scene
          hideNavBar={true} 
          key='welcome' 
          component={Welcome}  
        /> 
        
        <Scene 
          hideNavBar={false} 
          key='chooseBank'  
          component={ChooseBank}  
          title='Choose bank'  
        /> 
        
        <Scene 
          hideNavBar={false} 
          key='connectBank' 
          component={ConnectBank} 
          title='Connect to bank account' 
        /> 
        
        <Scene 
          key='bankTransactions' 
          component={BankTransactions} 
          title='Your transactions' 
        /> 
      </Router> 
    ); 
  }
}

const styles = {
  navBarStyle: {
    backgroundColor: 'transparent',
    padding: 0,
    height: 50,
    borderBottomWidth: 0,
    margin: 0
  },
  backButtonStyle: {
    width: 30,
    height: 30,
    marginTop: -12
  },
  backButtonImageStyle: {
    height: '100%',
    width: '100%'
  },
  titleStyle: {
    marginLeft: 110,
    marginTop: -10,
    height: 30,
    width: '100%',
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto-Bold',
    color: 'white',
    textAlign: 'left'
  }
};

export default RouterComponent;
