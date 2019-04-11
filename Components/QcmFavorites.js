import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import { getQCMue } from '../API/QCMue'

class QcmFavorites extends React.Component {

  constructor(props) {
    super(props)
  }

  _displayLoading() {
      if (this.state.isLoading) {
        // Si isLoading vaut true, on affiche le chargement à l'écran
        return (
          <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
          </View>
        )
      }
    }

  render() {
      return (
        <View style={styles.main_container}>
        	<Text style={styles.title_text}>Qcm marqués</Text>
        </View>
      )
  }
}
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  title_text: {
    textAlign:'center',
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  touchableButtonGreen:{
    height: 70,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "green",
  },
})

export default QcmFavorites
