import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import { Container, Header, Left, Body, Right, Icon, Title } from 'native-base'
import CheckboxFormX from 'react-native-checkbox-form';
import QcmItem from './QcmItem'
import QcmRepItem from './QcmRepItem'
import { getQCMue } from '../API/QCMue' // import { } from ... car c'est un export nommé dans QCMue.js
import { connect } from 'react-redux'

class Qcm extends React.Component {

  constructor(props) {
    super(props)
    this.compteRep = 0
    this.good = false
    this.state = { qcm: {intitule: "null", propositions: [{libelle: "A", correction: "", booleen:"0"}] },
      isLoading: false, score: 0, nbQcm: 0, message: null
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
  _toggleFavorite() {
    const action = { type: "TOGGLE_FAVORITE", value: this.state.qcm }
    this.props.dispatch(action)
  }
  _Reponses(qcmData){
    this.setState({ nbQcm: this.state.nbQcm +1 })
    for (let q of qcmData) {
      if(q.RNchecked == undefined){
        q.RNchecked = false
      }
      this.good = false
      if(q.RNchecked == q.booleen == "1" ? true : false){
        this.good = true
        this.compteRep++
      }
    }
    if(this.compteRep == 5){
      this.setState({ score: this.state.score +1, message: "qcm bon" })
      console.log("qcm bon")
    }
    else {
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
    const qcmData = this.state.qcm.propositions
    let qcmVue
    if(this.state.qcmRep){
      qcmVue = <QcmRepItem qcm={qcm} qcmData={qcmData} />
    } else {
      qcmVue = <QcmItem qcm={qcm} qcmData={qcmData} />
    }
    return (
      <Container>
        <Header style={{backgroundColor: "#fff"}}>
          <Body><Text>{this.state.score} / {this.state.nbQcm} {this.state.message}</Text></Body>
          <Right>
            <Icon name='md-star-outline' style={{color:"black"}}
              onPress={() => this._toggleFavorite()}/>
            <Icon name='menu' style={{color:"black"}}
              onPress={()=>this.props.navigation.openDrawer()}/>
          </Right>
        </Header>
        {qcmVue}
        {this.button(qcmData)}
      </Container>
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
const mapStateToProps = (state) => {
  return {state: {
    favoritesQcm: state.favoritesQcm
  }}
}
const mapDispatchToProps = (dispatch) => {
  return {
    favoritesQcm : dispatch(testAction.favoritesQcm)
  }
}

//export default connect(mapStateToProps)(Qcm)
export default Qcm
