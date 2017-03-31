import React from 'react';
import { View, Text } from 'react-native';

const Row = ({ creditor, amount }) => {
  const { rowContainerStyle, textStyle } = styles;

  return (
    <View style={rowContainerStyle}>
      <Text style={textStyle}>
        {creditor}
      </Text>
      <Text style={textStyle}>
        {amount}
      </Text>
    </View>
  );
};

const styles = {
  rowContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ededed'
  },
  textStyle: {
    fontSize: 16,
    padding: 15
  }
};

export { Row };
