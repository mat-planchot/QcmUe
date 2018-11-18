import { createStackNavigator } from 'react-navigation'
import Qcm from '../Components/Qcm'
import QcmItem from '../Components/QcmItem'
import QcmRep from '../Components/QcmRep'

const QcmStackNavigator = createStackNavigator({
  Qcm: {
    screen: Qcm,
    navigationOptions: {
      title: 'Qcm UE2'
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
