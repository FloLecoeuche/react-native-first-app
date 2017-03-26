import React from 'react';
import { View } from 'react-native';

const Section = (props) => {
  return (
    <View style={[styles.sectionStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  sectionStyle: {
    justifyContent: 'flex-start',
    position: 'relative'
  }
};

export { Section };
