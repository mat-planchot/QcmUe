import React from 'react'
import Navigation from './Navigation/Navigation'
import SafeViewAndroid from "./Components/SafeViewAndroid"
import { SafeAreaView } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <Navigation/>
      </SafeAreaView>
    )
  }
}
