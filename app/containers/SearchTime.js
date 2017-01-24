import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Linking,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Button from 'react-native-button';
import DateField from '../components/DateField';
import setDate from '../actions/setDate';
import setSearchQuery from '../actions/setSearchQuery';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
  },
});

class SearchTime extends Component
{
  /**
   * Turns a YYYY-MM-DD date string into a URL-ready D-M-Y snippet.
   *
   * @param {string} piece
   * @returns {string}
   */
  static prepareDatePiece(piece) {
    return piece.replace(/([0-9]{4})-([0-9]{2})-([0-9]{2})/, '$3%2F$2%2F$1');
  }

  /**
   * Creates a Google URL from the current state.
   *
   * @returns {string}
   */
  makeUrl() {
    return `https://www.google.com/search?q=${encodeURIComponent(this.props.search.query)}&tbs=cdr%3A1%2Ccd_min%3A` +
      `${SearchTime.prepareDatePiece(this.props.dates.end)}%2Ccd_max%3A` +
      `${SearchTime.prepareDatePiece(this.props.dates.end)}`;
  }

  /**
   * Opens a Google link based on the current state.
   */
  doSearch() {
    Linking.openURL(this.makeUrl())
    // eslint-disable-next-line no-console
      .catch(err => console.error('An error occurred', err));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>From:</Text>
        <DateField
          onChange={newDate => this.props.setDate('startDate', newDate)}
          currentDate={this.props.dates.start}
        />

        <Text>To:</Text>
        <DateField
          onChange={newDate => this.props.setDate('endDate', newDate)}
          currentDate={this.props.dates.end}
        />

        <Text>Search:</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={searchQuery => this.props.setSearchQuery(searchQuery)}
          value={this.props.search.query}
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

SearchTime.propTypes = {
  dates: PropTypes.object.isRequired,
  search: PropTypes.object.isRequired,
  setDate: PropTypes.func.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

// Props will mirror the shape of our state, with keys 'dates' and 'search'
const mapStateToProps = state => state;

const mapDispatchToProps = {
  setDate,
  setSearchQuery,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchTime);
