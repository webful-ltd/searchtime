import {AppRegistry} from 'react-native';
import SearchTime from './app/components/SearchTime'

class SearchTimeAndroid extends SearchTime {
}

AppRegistry.registerComponent('SearchTime', () => SearchTimeAndroid);
