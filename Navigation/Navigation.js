import React from 'react'
import { createAppContainer, DrawerItems, createDrawerNavigator } from 'react-navigation'
import Qcm from '../Components/Qcm'
import QcmFavorites from '../Components/QcmFavorites'
import SafeViewAndroid from "../Components/SafeViewAndroid"
import { View, Image, SafeAreaView } from "react-native";

const CustomDrawer = (props) => (
  <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
    <View style={{height: 150, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={require('../img/Livre_ouvert_caducee.png')}
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
  contentComponent: CustomDrawer
})

export default createAppContainer(QcmDrawerNavigator)
