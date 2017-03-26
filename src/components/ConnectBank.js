import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class ConnectBank extends Component {
  render() {
    return (
      <View>
        <Text>Connect Bank</Text>
      </View>
    );
  }
}

export default connect(null)(ConnectBank);
