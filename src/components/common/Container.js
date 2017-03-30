import React from 'react';
import { View } from 'react-native';

const Container = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    //flex: 1,
    alignSelf: 'center',
    width: '92%',
    height: '97%',
    //marginLeft: 15,
    //marginRight: 15,
    //marginBottom: 20,
    borderWidth: 1,
    borderColor: 'yellow'
  }
};

export { Container };
