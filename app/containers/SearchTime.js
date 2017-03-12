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
import store from 'react-native-simple-store';
import DateField from '../components/DateField';
import setDate from '../actions/setDate';
import setSearchQuery from '../actions/setSearchQuery';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  textInput: {
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
  },
  buttonContainer: {
    marginTop: 10,
    padding: 10,
    height: 45,
    overflow: 'hidden',
    borderColor: '#cccccc',
    borderWidth: 1,
    backgroundColor: '#ffffff',
  },
  button: {
    fontSize: 20,
    color: '#0c00ff',
  },
});

class SearchTime extends Component
{
  /**
   * Turns a YYYY-MM-DD date string into a URL-ready M-D-Y snippet.
   *
   * @param {string} piece
   * @returns {string}
   */
  static prepareDatePiece(piece) {
    return piece.replace(/([0-9]{4})-([0-9]{2})-([0-9]{2})/, '$2%2F$3%2F$1');
  }

  componentWillMount() {
    const st = this;
    store.get('dates').then((dates) => {
      if (dates === null) {
        store.save('dates', { start: '2010-02-02', end: '2011-02-02' });
      } else {
        st.props.setDate('startDate', dates.start);
        st.props.setDate('endDate', dates.end);
      }
    });
  }

  /**
   * Creates a Google URL from the current state.
   *
   * @returns {string}
   */
  makeUrl() {
    return `https://www.google.com/search?q=${encodeURIComponent(this.props.search.query)}&tbs=cdr%3A1%2Ccd_min%3A` +
      `${SearchTime.prepareDatePiece(this.props.dates.start)}%2Ccd_max%3A` +
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
          style={styles.textInput}
          onChangeText={searchQuery => this.props.setSearchQuery(searchQuery)}
          value={this.props.search.query}
        />

        <Button
          containerStyle={styles.buttonContainer}
          style={styles.button}
          onPress={() => this.doSearch()}
        >
          Search Google
        </Button>
      </View>
    );
  }
}

SearchTime.propTypes = {
  dates: PropTypes.shape({
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
  }).isRequired,
  search: PropTypes.shape({
    query: PropTypes.string.isRequired,
  }).isRequired,
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
