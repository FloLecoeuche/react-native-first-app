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
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20
  }
};

export { Container };
