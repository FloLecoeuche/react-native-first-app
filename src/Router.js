import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Welcome from './components/Welcome';
import ChooseBank from './components/ChooseBank';
//import ConnectBank from './components/ConnectBank';
//import BankTransactions from './components/BankTransactions';

const RouterComponent = () => {
  const { navBarStyle, titleStyle } = styles;

  return (
    <Router 
      navigationBarStyle={navBarStyle}
      titleStyle={titleStyle}
    >
      <Scene 
        hideNavBar={true}
        key='welcome'
        component={Welcome}
        initial
      />
      
      <Scene
        hideNavBar={false}
        onLeft={() => Actions.welcome()}
        key='chooseBank' 
        component={ChooseBank} 
        title='Choose bank' 
      />
      
      {/*<Scene
        key='connectBank'
        component={ConnectBank}
        title='Connect to bank account'
      />
      
      <Scene
        key='transactions'
        component={BankTransactions}
        title='Your transactions'
      />*/}
    </Router>
  );
};

const styles = {
  navBarStyle: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0
  },
  titleStyle: {
    marginLeft: 25,
    color: 'white',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    fontWeight: '600'
  }
};

export default RouterComponent;
