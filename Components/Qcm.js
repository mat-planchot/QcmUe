import React from 'react'
import { StyleSheet, View, Button, Text, FlatList } from 'react-native'
import QcmItem from './QcmItem'
import { getQCMue } from '../API/QCMue' // import { } from ... car c'est un export nommé dans QCMue.js
import { getQCMueRep } from '../API/QCMueRep'

class Qcm extends React.Component {

  constructor(props) {
    super(props)
    this.state = { qcm: [], isLoading: false }
    getQCMue().then(data => this.setState({ qcm: data }));
  }

  _loadQcm(){
  	this.setState({ isLoading: true }) // Lancement du chargement
  	getQCMue().then(data => this.setState({ qcm: data, isLoading: false }));
  }

  _loadQcmRep() {
  	this.setState({ isLoading: true })
    getQCMueRep(this.state.idUe).then(data => this.setState({ qcm: data, isLoading: false }));
  }
  render() {
      return (
        <View style={styles.main_container}>
	        { this.state.isLoading ?
	            <View style={styles.loading_container}>
	              <ActivityIndicator size='large' />
	            </View>
	            : null
        	}
        	<QcmItem qcm={this.state.qcm}/>
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