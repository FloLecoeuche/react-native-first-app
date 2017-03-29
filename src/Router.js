import React from 'react'; 
import { Router, Scene } from 'react-native-router-flux'; 
import Welcome from './components/view/Welcome';
import ChooseBank from './components/view/ChooseBank';
import ConnectBank from './components/view/ConnectBank';
//import BankTransactions from './components/BankTransactions';

// TO DO: Add and push features needed in react-native-router-flux Github
// Issue : i18n doesn't work corectly when bakcButton is pressed

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
       
      {/*<Scene 
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
    marginLeft: 55,
    width: undefined,
    color: 'white',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    fontWeight: '600'
  }
};

export default RouterComponent;
