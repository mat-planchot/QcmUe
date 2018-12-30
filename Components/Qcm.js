import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import CheckboxFormX from 'react-native-checkbox-form';
import QcmItem from './QcmItem'
import QcmRepItem from './QcmRepItem'
import { getQCMue } from '../API/QCMue' // import { } from ... car c'est un export nommé dans QCMue.js

class Qcm extends React.Component {

  constructor(props) {
    super(props)
    this.compteRep = 0
    this.good = false
    this.state = { qcm: {intitule: "null", propositions: ["A", "B", "C", "D", "E"], booleens: ["0", "0", "0", "0", "0"]},
      isLoading: false, vraiFaux: [], score: 0, nbQcm: 0, message: null
    }
    getQCMue().then(data => this.setState({ qcm: data, isLoading: false, }) )
  }

  _loadQcm(){
    this.setState({ isLoading: true, qcmRep: false })
    getQCMue().then(data => this.setState({ qcm: data, isLoading: false, }));
  }
  _displayQcmRep(qcmData) {
    this.setState({ qcmRep: true })
    this._Reponses(qcmData)
  }
  _Reponses(qcmData){
    this.setState({ nbQcm: this.state.nbQcm +1 })
    for (let q of qcmData) {
      this.good = false
      if(q.RNchecked == q.value){
        this.good = true
        //this.setState({ vraiFaux: [...this.state.vraiFaux, this.good] })
        this.compteRep++
      }
      if(this.good) { console.log("juste") }
      else { console.log("mauvais") }
    }
    if(this.compteRep == 5){
      this.setState({ score: this.state.score +1, message: "qcm bon" })
      console.log("qcm bon")
    }
    else { console.log("Vous vous êtes trompés")
      this.setState({ message: "Vous vous êtes trompés" })
    }
    this.compteRep = 0
  }
  button(qcmData){
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
          <TouchableOpacity style={styles.touchableButtonBlue} onPress={() => this._displayQcmRep(qcmData)}>
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
      {RNchecked: false, label: qcm.propositions[0], value: qcm.booleens[0] == "1" ? true : false },
      {RNchecked: false, label: qcm.propositions[1], value: qcm.booleens[1] == "1" ? true : false },
      {RNchecked: false, label: qcm.propositions[2], value: qcm.booleens[2] == "1" ? true : false },
      {RNchecked: false, label: qcm.propositions[3], value: qcm.booleens[3] == "1" ? true : false },
      {RNchecked: false, label: qcm.propositions[4], value: qcm.booleens[4] == "1" ? true : false }
    ];
    if(this.state.qcmRep){
      qcmVue = <QcmRepItem qcm={qcm} qcmData={qcmData} />
    } else {
      qcmVue = <QcmItem qcm={qcm} qcmData={qcmData} />
    }
    return (
      <View style={styles.main_container}>
        <View style={styles.score}>
          <Text>{this.state.score} / {this.state.nbQcm} {this.state.message}</Text>
        </View>
        {qcmVue}
        {this.button(qcmData)}
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
})

export default Qcm
