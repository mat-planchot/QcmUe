import { createAppContainer, createStackNavigator } from 'react-navigation'
import Login from '../Components/Login'
import Drawer from '../Navigation/Drawer'

const QcmStackNavigator = createStackNavigator({
    Login: { screen: Login },
    Drawer: { screen: Drawer },
  }, {
    headerMode: 'none'
  }
)

export default createAppContainer(QcmStackNavigator)
