import React, { Component } from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Button from 'react-native-button';
import DateField from '../components/DateField';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
  },
});

export default class SearchTime extends Component {

  /**
   * Turns a YYYY-MM-DD date string into a URL-ready D-M-Y snippet.
   *
   * @param {string} piece
   * @returns {string}
   */
  static prepareDatePiece(piece) {
    return piece.replace(/([0-9]{4})-([0-9]{2})-([0-9]{2})/, '$3%2F$2%2F$1');
  }

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      startDate: '2016-09-07',
      endDate: '2016-09-16',
    };
  }

  /**
   * Opens a Google link based on the current state.
   */
  doSearch() {
    Linking.openURL(this.makeUrl())
      // eslint-disable-next-line no-console
      .catch(err => console.error('An error occurred', err));
  }

  /**
   * Creates a Google URL from the current state.
   *
   * @returns {string}
   */
  makeUrl() {
    return `https://www.google.com/search?q=${encodeURIComponent(this.state.searchQuery)}&tbs=cdr%3A1%2Ccd_min%3A${SearchTime.prepareDatePiece(this.state.startDate)}%2Ccd_max%3A${SearchTime.prepareDatePiece(this.state.endDate)}`;
  }

  render() {
    return (
      <View style={styles.container}>

        <Text>From:</Text>
        <DateField name="startDate" currentDate={this.state.startDate} />

        <Text>To:</Text>
        <DateField name="endDate" currentDate={this.state.endDate} />

        <Text>Search:</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={searchQuery => this.setState({ searchQuery })}
          value={this.state.searchQuery}
        />

        <Button
          containerStyle={{ padding: 10, height: 45, overflow: 'hidden', borderRadius: 4, backgroundColor: 'white' }}
          style={{ fontSize: 20, color: 'green' }}
          onPress={() => this.doSearch()}
        >
          Search Google
        </Button>
      </View>
    );
  }

}
