import React from 'react'
import { StyleSheet, View, Text, ScrollView, ActivityIndicator} from 'react-native'

class QcmRepItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = { qcm: [], isLoading: false, qcmRep: false, score: 0, nbQcm: 0  }
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
  vf(i){
    const qcmData = this.props.qcm
    return(
      <Text style={styles.VF_text}>
        {qcm.propositions[i].booleen = "1" ? "VRAI" : "FAUX"}
      </Text>
    )
  }
  proposition(i){
    const qcm = this.props.qcm
    const qcmData = this.props.qcmData
    console.log(qcmData[i].RNchecked);
    if(qcmData[i].RNchecked == qcm.propositions[i].booleen == "1" ? true : false){
      return(
        <View style={styles.proposition_green}>
          <Text style={styles.proposition_text}>{qcm.propositions[i].libelle}</Text>
          {this.vf(i)}
          <Text style={styles.corrige_text}>{qcm.corrections[i].libelle}</Text>
        </View>
      )
    }
    else {
      return(
        <View style={styles.proposition_red}>
          <Text style={styles.proposition_text}>{qcm.propositions[i].libelle}</Text>
          {this.vf(i)}
          <Text style={styles.corrige_text}>{qcm.corrections[i].libelle}</Text>
        </View>
      )
    }
  }
  render() {
      return (
          <ScrollView style={styles.main_container}>
            {this._displayLoading()}
            <View style={styles.intitule}>
              <Text style={styles.intitule_text}>{this.props.qcm.intitule}</Text>
            </View>

            <View style={styles.propositions}>
              {this.proposition(0)}
              {this.proposition(1)}
              {this.proposition(2)}
              {this.proposition(3)}
              {this.proposition(4)}
            </View>

          </ScrollView>

      )
  }
}
const styles = StyleSheet.create({
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  intitule: {
    alignItems: 'center',
  },
  intitule_text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  propositions: {
    flex: 1,
    alignContent: 'center',
  },
  proposition_red: {
    margin: 5,
    backgroundColor: "#FEC8C8",
  },
  proposition_green: {
    margin: 5,
    backgroundColor: "#CAFAD0",
  },
  proposition_text: {
    fontSize: 20,
  },
  corrige_text:{
    fontSize: 20,
  },
  VF_text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  }
})

export default QcmRepItem
