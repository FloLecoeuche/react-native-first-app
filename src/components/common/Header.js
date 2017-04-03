import React from 'react';
import { View, Text } from 'react-native';

const Header = ({ headerText }) => {
  return (
    <View>
      <Text style={styles.textStyle}>
        {headerText}
      </Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    padding: 10
  }
};

export { Header };
