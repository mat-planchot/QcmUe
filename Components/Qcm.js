import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import CheckboxFormX from 'react-native-checkbox-form';
import QcmItem from './QcmItem'
import QcmRepItem from './QcmRepItem'
import { getQCMue, getQCMueRep } from '../API/QCMue' // import { } from ... car c'est un export nommé dans QCMue.js

class Qcm extends React.Component {

  constructor(props) {
    super(props)
    this.compteRep = 0
    this.state = { qcm: [], isLoading: false, qcmRep: false, good: false, score: 0, nbQcm: 0  }
    getQCMue().then(data => this.setState({ qcm: data, isLoading: false }));
  }

  _loadQcm(){
    this.setState({ isLoading: true, qcmRep: false })
    getQCMue().then(data => this.setState({ qcm: data, isLoading: false, }));
    console.log(this.state.qcmRep);
  }
  _displayQcmRep() {
    this.setState({ qcmRep: true })
    console.log(this.state.qcmRep);
  }
  _Reponses(){
    this.setState({ nbQcm: this.state.nbQcm +1 })
    for (let q of qcmData) {
      this.setState({ good: false })
      if(q.RNchecked == q.value){
        this.setState({ good: true })
        this.compteRep++
      }
      if(this.state.good) { console.log("proposition juste") }
      else { console.log("proposition mauvaise") }
    }
    if(this.compteRep == 5){
      this.setState({ score: this.state.score +1 })
      console.log("qcm bon")
    }
    this.setState({ compteRep: 0 })
  }
  button(){
    if(this.state.qcmRep){
      return(
        <View style={styles.button_container}>
          <TouchableOpacity style={styles.touchableButtonGreen} onPress={() => this._loadQcm()}>
              <Text style={styles.button_text}>Suivant</Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      return(
        <View style={styles.button_container}>
          <TouchableOpacity style={styles.touchableButtonGreen} onPress={() => this._loadQcm()}>
              <Text style={styles.button_text}>Suivant</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableButtonBlue} onPress={() => this._displayQcmRep()}>
              <Text style={styles.button_text}>Afficher la réponse</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }
  render() {
    const qcm = this.state.qcm
    let qcmVue
    const qcmData = [
      {RNchecked: false, label: qcm.pa, value: qcm.ba == "1" ? true : false },
      {RNchecked: false, label: qcm.pb, value: qcm.bb == "1" ? true : false },
      {RNchecked: false, label: qcm.pc, value: qcm.bc == "1" ? true : false },
      {RNchecked: false, label: qcm.pd, value: qcm.bd == "1" ? true : false },
      {RNchecked: false, label: qcm.pe, value: qcm.be == "1" ? true : false },
    ]; 
    if(this.state.qcmRep){
      qcmVue = <QcmRepItem qcm={qcm} qcmData={qcmData} />
    } else {
      qcmVue = <QcmItem qcm={qcm} qcmData={qcmData} />
    }
    return (
      <View style={styles.main_container}>
      {qcmVue}
      {this.button()}
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
  },
  },
})

export default Qcm
