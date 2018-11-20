import { createStackNavigator } from 'react-navigation'
import Qcm from '../Components/Qcm'
import QcmRep from '../Components/QcmRep'

const QcmStackNavigator = createStackNavigator({
  Qcm: {
    screen: Qcm,
    navigationOptions: {
      title: 'Qcm'
    }
  },
  QcmRep: {
    screen: QcmRep,
    navigationOptions: {
      title: 'Réponse'
    }
  },
})

export default QcmStackNavigator
