import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class BankTransactions extends Component {
  render() {
    return (
      <View>
        <Text>Bank Transactions</Text>
      </View>
    );
  }
}

export default connect(null)(BankTransactions);
