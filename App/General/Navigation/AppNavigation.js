import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation'
import TimelineScreen from '../../Timeline/Containers/TimelineScreen'
import PostScreen from '../../Post/Containers/PostScreen'
import LoginScreen from '../../Login/Containers/LoginScreen'
import ProfileScreen from '../../Profile/Containers/ProfileScreen'

const appNavigation = createStackNavigator({
  TimelineScreen: {screen: TimelineScreen},
  PostScreen: {screen: PostScreen},
  LoginScreen: {screen: LoginScreen},
  Profile: ProfileScreen
}, {
  headerMode: 'none',
  initialRouteName: 'LoginScreen'
})

export default createAppContainer(appNavigation)