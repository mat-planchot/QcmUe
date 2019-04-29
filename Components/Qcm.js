import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, TouchableOpacity, SafeAreaView } from 'react-native'
import { Container, Header, Left, Body, Right, Icon, Title } from 'native-base'
import CheckboxFormX from 'react-native-checkbox-form';
import SafeViewAndroid from "./SafeViewAndroid"
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
      isLoading: false, score: 0, nbQcm: 0, message: null, favoritesQcm: [], isQcmFavorite: false
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
    this.state.isQcmFavorite ? this.setState({isQcmFavorite: false}) : this.setState({isQcmFavorite: true})
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
              <Text style={styles.button_text}>Réponse</Text>
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
      qcmVue = <QcmRepItem qcm={qcm} />
    } else {
      qcmVue = <QcmItem qcm={qcm} />
    }
    return (
      <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, { backgroundColor: '#FFF' }]}>
        <Container>
          <Header style={{backgroundColor: "#fff"}}>
            <Left>
              <Icon name='menu' style={{color:"black"}}
                onPress={()=>this.props.navigation.openDrawer()}/>
            </Left>
            <Body>
              <Text>{this.state.score} / {this.state.nbQcm} {this.state.message}</Text>
            </Body>
            <Right>
              <Icon name={this.state.isQcmFavorite ? 'md-star' : 'md-star-outline'}
                style={{color:"black"}}
                onPress={() => this._toggleFavorite()}/>
            </Right>
          </Header>
          {qcmVue}
          {this.button(qcmData)}
        </Container>
      </SafeAreaView>
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
    height: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "green",
  },
  touchableButtonBlue:{
    height: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "blue",
  },
})
const mapStateToProps = state => {
  return {
    favoritesQcm: state.favoritesQcm
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    favoritesQcm : dispatch(testAction.favoritesQcm)
  }
}

export default connect(mapStateToProps)(Qcm)
//export default Qcm
