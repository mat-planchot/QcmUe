import React from 'react'
import { createAppContainer, DrawerItems, createDrawerNavigator } from 'react-navigation'
import Qcm from '../Components/Qcm'
import QcmFavorites from '../Components/QcmFavorites'
import SafeViewAndroid from "../Components/SafeViewAndroid"
import { View, Image, SafeAreaView } from "react-native";

const CustomDrawer = (props) => (
  <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
    <View style={{height: 100, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={require('../img/Livre_ouvert_caducee.png')}
        style={{height: 80, width: 105,}}
      />
    </View>
    <DrawerItems {...props} />
  </SafeAreaView>
)

const QcmDrawerNavigator = createDrawerNavigator({
  Qcm: {
    screen: Qcm
  },
  QcmFavorites: {
    screen: QcmFavorites
  },
}, {
  initialRouteName: 'Qcm',
  hideStatusBar: true,
  contentComponent: CustomDrawer
})

export default createAppContainer(QcmDrawerNavigator)
