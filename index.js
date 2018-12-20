
import { AppRegistry }    from 'react-native';
import ProfileScreen      from './app/screens/ProfileScreen'
import ConfirmationScreen from './app/screens/ConfirmationScreen'
import TitleComponent     from './app/components/titleComponent.js'
import Camera             from './app/containers/cameraComponent.js'
import TotalConfirmation  from './app/components/totalsConfirmation.js'
import TipComponent       from './app/components/tipComponent.js'
import TipScreen          from './app/screens/TipScreen'

AppRegistry.registerComponent('scanner', () => TipScreen)
