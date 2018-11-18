import React from 'react'
import { StyleSheet, View, Button, Text, ActivityIndicator } from 'react-native'
import QcmRepItem from './QcmRepItem'
import { getQCMue, getQCMueRep } from '../API/QCMue'

class QcmRep extends React.Component {

  constructor(props) {
    super(props)
    this.state = { qcm: [], isLoading: false }
  }

  _displayQcm(){
  	this.setState({ isLoading: true }) // Lancement du chargement
  	getQCMue().then(data => this.setState({ qcm: data, isLoading: false }));
    this.props.navigation.navigate("Qcm", { qcm: this.state.qcm })
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
      const qcm  = this.props.navigation.state.params.qcm
      return (
        <View style={styles.main_container}>
	        {this._displayLoading()}
        	<QcmRepItem qcm={qcm}/>
          <Button buttonStyle={{ height: 70 }} titleStyle={{ fontSize: 25 }}
            title='Suivant' onPress={() => this._displayQcm()}
          />
        </View>
      )
  }
}
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
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

})

export default QcmRep
