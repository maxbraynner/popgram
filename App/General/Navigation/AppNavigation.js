import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation'
import TimelineScreen from '../../Timeline/Containers/TimelineScreen'
import PostScreen from '../../Post/Containers/PostScreen'
import LoginScreen from '../../Login/Containers/LoginScreen'

const appNavigation = createStackNavigator({
  TimelineScreen: {screen: TimelineScreen},
  PostScreen: {screen: PostScreen},
  LoginScreen: {screen: LoginScreen}
}, {
  headerMode: 'none',
  initialRouteName: 'LoginScreen'
})

export default createAppContainer(appNavigation)