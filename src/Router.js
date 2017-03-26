import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Welcome from './components/Welcome';
import ChooseBank from './components/ChooseBank';
//import ConnectBank from './components/ConnectBank';
//import BankTransactions from './components/BankTransactions';

const RouterComponent = () => {
  return (
    <Router>
      <Scene 
        hideNavBar={true}
        key='welcome'
        component={Welcome}
        initial
      />
      
      <Scene
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

export default RouterComponent;
