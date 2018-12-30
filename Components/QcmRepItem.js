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
    const qcmData = this.props.qcmData // c'est un tableau d'objet
    return(
      <Text style={styles.VF_text}>
        {qcmData[i].value ? "VRAI" : "FAUX"}
      </Text>
    )
  }
  proposition(i){
    const qcm = this.props.qcm
    return(
      <View style={styles.proposition}>
        <Text style={styles.proposition_text}>{qcm.propositions[i]}</Text>
        {this.vf(i)}
        <Text style={styles.corrige_text}>{qcm.corrections[i]}</Text>
      </View>
    )
  }
  render() {
      const qcm = this.props.qcm
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
  proposition: {
    margin: 5,
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
