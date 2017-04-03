import React, { Component } from 'react';
import { View, Text, ListView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { bankTransactionPageUpdate } from '../../actions';
import { Section, SectionListView, Row } from '../common';
import accountData from '../../resources/mock/AccountData';

class BankTransaction extends Component {
  constructor(props) {
    super(props);

    this.state = portraitStyle;

    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });

    this.state.dataSource = ds.cloneWithRowsAndSections(this.convertAccountDataArrayToMap());
  }

  componentWillMount() {
    if (!this.props.headerText) {
      this.props.bankTransactionPageUpdate();
    }
  }

  onButtonPress() {
    Actions.chooseBank();
  }

  orientationChange() {
    const { height, width } = Dimensions.get('window');

    if (width < height) {
      this.setState(portraitStyle);
    } else {
      this.setState(landscapeStyle);
    }
  }

  convertAccountDataArrayToMap() {
    var accountDataByDate = {};
    
    accountData.forEach(accountDataItem => {
      if (!accountDataByDate[accountDataItem.date]) {
        accountDataByDate[accountDataItem.date] = [];
      }
      accountDataByDate[accountDataItem.date].push(accountDataItem);
    });

    return accountDataByDate;
  }

  renderRow(accountDataItem) {
    return (
      <Row 
        creditor={accountDataItem.creditor}
        amount={accountDataItem.amount}
      />
    );
  }

  renderSectionHeader(sectionData, date) {
    return (
      <SectionListView
        date={date}
      />
    );
  }

  render() {
    const { 
      viewContainerStyle, 
      headerSectionStyle,
      headerContainerStyle,
      listViewSectionStyle, 
      accountInformationsContainerStyle,
      textHelpContainerStyle,
      textUserInfoStyle,
      accountInfoBlockStyle,
      accountInfoRightBlockStyle,
      textHelpStyle,
      listViewStyle
    } = styles;
    const { headerText, contentText, buttonText } = this.props;

    return (
      <View 
        onLayout={this.orientationChange.bind(this)}
        style={viewContainerStyle}
      >
        <Section style={[headerSectionStyle, this.state.headerSectionStyle]}>
          <View style={headerContainerStyle}>
            <View style={accountInformationsContainerStyle}>

              <View style={accountInfoBlockStyle}>
                <Text style={textUserInfoStyle}>
                  NATWEST
                </Text>
                <Text style={textUserInfoStyle}>
                  DOE J.
                </Text>
              </View>

              <View style={[accountInfoBlockStyle, accountInfoRightBlockStyle]}>
                <Text style={textUserInfoStyle}>
                  CURRENT ACCOUNT
                </Text>
                <Text style={textUserInfoStyle}>
                  12345698
                </Text>
                <Text style={textUserInfoStyle}>
                  600268
                </Text>
              </View>

            </View>

            <View style={textHelpContainerStyle}>
              <Text style={textHelpStyle}>
                Your transactions for the last 30 days
                </Text>
            </View>
          </View>

        </Section>

        <Section style={listViewSectionStyle}>
          <ListView
            style={listViewStyle}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            renderSectionHeader={this.renderSectionHeader}
          />
        </Section>
      </View>
    );
  }
}

const styles = {
  viewContainerStyle: {
    backgroundColor: '#304FFE',
    flex: 1
  },
  headerSectionStyle: {
    flex: 0.20,
    padding: 15,
    justifyContent: 'flex-end'
  },
  headerContainerStyle: {
    height: '65%'
  },
  accountInformationsContainerStyle: {
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  accountInfoRightBlockStyle: {
    alignItems: 'flex-end'
  },
  textUserInfoStyle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    color: 'white'
  },
  textHelpContainerStyle: {
    flex: 0.3,
    justifyContent: 'flex-end'
  },
  textHelpStyle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 12,
    color: 'white'
  },
  listViewSectionStyle: {
    flex: 0.7
  },
  listViewStyle: {
    backgroundColor: 'white'
  }
};

const portraitStyle = {
  logoStyle: {
    height: '10%'
  },
  buttonContainerStyle: {
    height: '7%'
  },
  headerSectionStyle: {
    flex: 0.20,
  }
};

const landscapeStyle = {
  logoStyle: {
    height: '20%'
  },
  buttonContainerStyle: {
    height: '12%'
  },
  headerSectionStyle: {
    flex: 0.30,
  }
};

const mapStateToProps = (state) => {
  const { headerText, contentText, buttonText } = state.stringsReducer.welcome;

  return { headerText, contentText, buttonText };
};

export default connect(mapStateToProps, { bankTransactionPageUpdate })(BankTransaction);
