import React from 'react';
import { View, Text } from 'react-native';

const ContentText = ({ contentText }) => {
  return (
    <View>
      <Text style={styles.textStyle}>
        {contentText}
      </Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    paddingRight: 20,
    paddingLeft: 20
  }
};

export { ContentText };
