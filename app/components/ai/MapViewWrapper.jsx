import { Platform} from 'react-native';

let MapViewComponent;

if (Platform.OS === 'web') {
  MapViewComponent = require('./MapViewWeb').default;
} else {
  MapViewComponent = require('./MapViewNative').default;
}

export default MapViewComponent;

