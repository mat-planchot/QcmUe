import React from 'react'
import { StyleSheet, View, Button, Text, ActivityIndicator } from 'react-native'
import QcmItem from './QcmItem'
import { getQCMue, getQCMueRep } from '../API/QCMue' // import { } from ... car c'est un export nommé dans QCMue.js

class Qcm extends React.Component {

  constructor(props) {
    super(props)
    this.state = { qcm: [], isLoading: false }
    getQCMue().then(data => this.setState({ qcm: data, isLoading: false }));
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

  _loadQcm(){
  	this.setState({ isLoading: true })
    getQCMue().then(data => this.setState({ qcm: data, isLoading: false }));
  }
  _displayQcmRep() {
  	this.setState({ isLoading: true })
    getQCMueRep(this.state.qcm.idUe).then(data => this.setState({ qcm: data, isLoading: false }) );
    this.props.navigation.navigate("QcmRep", { qcm: this.state.qcm })
  }

  render() {
      return (
        <View style={styles.main_container}>
	        {this._displayLoading()}
        	<QcmItem qcm={this.state.qcm}/>
          <Button buttonStyle={{ height: 70 }} titleStyle={{ fontSize: 25 }}
            title='Afficher la réponse' onPress={() => this._displayQcmRep()}
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

export default Qcm
