import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Linking,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Button from 'react-native-button';
import DateField from '../components/DateField';
import setDate from '../actions/dates';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
  },
});

class SearchTime extends Component {

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
    };
  }

  // const mapDispatchToProps = (dispatch) => {
  //   return {
  //     onDateChange: (id) => {
  //       dispatch(toggleTodo(id))
  //     }
  //   }
  // }

  // const mapDispatchToProps = (dispatch) => {
  //   return {
  //     onTodoClick: (id) => {
  //       dispatch(toggleTodo(id))
  //     }
  //   }
  // }

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
        <DateField name="startDate" currentDate={this.props.startDate} />

        <Text>To:</Text>
        <DateField name="endDate" currentDate={this.props.endDate} />

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

SearchTime.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  // searchQuery: PropTypes.string.isRequired,
};

SearchTime.defaultProps = {
  startDate: '2015-01-01',
  endDate: '2015-01-02',
};

// todo replace this with something more sensible?
const mapStateToProps = state => ({
  startDate: state.startDate,
  endDate: state.endDate,
  searchQuery: state.searchQuery,
});

const boundActionCreators = bindActionCreators({
  setDate,
}, SearchTime.dispatch);

console.log(boundActionCreators);

// const mapDispatchToProps = (SearchTime.dispatch) => ({
//   actions: boundActionCreators,
// });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Object.assign({}, setDate), dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchTime);
