
import { AppRegistry }    from 'react-native';
import ProfileScreen      from './app/screens/ProfileScreen'
import ConfirmationScreen from './app/screens/ConfirmationScreen'
import TitleComponent     from './app/components/titleComponent.js'
import Camera             from './app/containers/cameraComponent.js'

AppRegistry.registerComponent('scanner', () => ConfirmationScreen)
