/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  Linking,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Button from 'react-native-button';
import DatePicker from 'react-native-datepicker'

class SearchTime extends Component {
  state = {
    searchQuery: 'asdf',
    startDate: '2016-09-07',
    endDate: '2016-09-16',
  }

  doSearch() {
    Linking.openURL(this.makeUrl())
      .catch(err => console.error('An error occurred', err));
  }

  makeUrl() {
    var url = 'https://www.google.com/search?q=' +
      this.state.searchQuery +
      '&tbs=cdr%3A1%2Ccd_min%3A' +
      this.prepareDatePiece(this.state.startDate) +
      '%2Ccd_max%3A' +
      this.prepareDatePiece(this.state.endDate);

    console.log(url)

    return url
  }

  /**
   * @param {string} piece
   */
  prepareDatePiece(piece) {
    return piece.replace(/([0-9]{4})-([0-9]{2})-([0-9]{2})/, '$3%2F$2%2F$1')
  }

  render() {
      return (
          <View style={styles.container}> 
             
              <Text>From:</Text>
              <DatePicker
                confirmBtnText='OK'
                cancelBtnText='Cancel'
                date={this.state.startDate}
                onDateChange={(date) => {this.setState({startDate: date})}}
              />

              <Text>To:</Text>
              <DatePicker
                confirmBtnText='OK'
                cancelBtnText='Cancel'
                date={this.state.endDate}
                onDateChange={(date) => {this.setState({endDate: date})}}
              />

              <Text>Search:</Text>
              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(searchQuery) => this.setState({searchQuery: searchQuery})}
                value={this.state.searchQuery}
              />

              <Button
                containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
                style={{fontSize: 20, color: 'green'}}
                onPress={() => this.doSearch()}>
                Search Google
              </Button>
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop:20,
    },
});

AppRegistry.registerComponent('SearchTime', () => SearchTime);
