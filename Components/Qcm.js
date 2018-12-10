import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
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
    getQCMue().then(data => this.setState({ qcm: data, isLoading: false, isChecked: false  }));
  }
  _displayQcmRep() {
  	this.setState({ isLoading: true })
    getQCMueRep(this.state.qcm.idUe).then(data => this.setState({ qcm: data, isLoading: false, isChecked: false }) );
    this.props.navigation.navigate("QcmRep", { qcm: this.state.qcm })
  }

  render() {
      let { qcmData, checked } = this.state;
      return (
        <View style={styles.main_container}>
	        {this._displayLoading()}
        	<QcmItem qcm={this.state.qcm} />
          <View style={styles.button_container}>
            <TouchableOpacity style={styles.touchableButtonGreen} onPress={() => this._loadQcm()}>
                <Text style={styles.button_text}>Suivant</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableButtonBlue} onPress={() => this._displayQcmRep()}>
                <Text style={styles.button_text}>Afficher la réponse</Text>
            </TouchableOpacity>
          </View>
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
  button_container: {
    flexDirection: 'row',
  },
  button_text: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
  },
  touchableButtonGreen:{
    height: 70,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "green",
  },
  touchableButtonBlue:{
    height: 70,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "blue",
  }

})

export default Qcm
