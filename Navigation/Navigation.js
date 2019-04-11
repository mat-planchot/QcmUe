import { createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation'
import Qcm from '../Components/Qcm'
import QcmFavorites from '../Components/QcmFavorites'

const QcmStackNavigator = createStackNavigator({
  Qcm: {
    screen: Qcm,
    navigationOptions: {
      title: 'Qcm'
    }
  },
  QcmFavorites: {
    screen: QcmFavorites
  },
})

const QcmDrawerNavigator = createDrawerNavigator({
  Qcm: {
    screen: Qcm
  },
  QcmFavorites: {
    screen: QcmFavorites
  },
})

export default createAppContainer(QcmDrawerNavigator)
