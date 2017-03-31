import React from 'react';
import { View, Text } from 'react-native';

const SectionListView = ({ date }) => {
  const { dateContainerStyle, dateTextStyle } = styles;

  return (
    <View style={dateContainerStyle}>
      <Text style={dateTextStyle}>{date}</Text>
    </View>
  );
};

const styles = {
  dateContainerStyle: {
    backgroundColor: '#ededed',
  },
  dateTextStyle: {
    padding: 15,
    color: '#646464'
  }
};

export { SectionListView };
