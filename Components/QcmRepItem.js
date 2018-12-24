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
  render() {
      const qcm = this.props.qcm
      const ba = qcm.ba == "1" ? "VRAI" : qcm.ba == "0" ? "FAUX" : null
      const bb = qcm.bb == "1" ? "VRAI" : qcm.bb == "0" ? "FAUX" : null
      const bc = qcm.bc == "1" ? "VRAI" : qcm.bc == "0" ? "FAUX" : null
      const bd = qcm.bd == "1" ? "VRAI" : qcm.bd == "0" ? "FAUX" : null
      const be = qcm.be == "1" ? "VRAI" : qcm.be == "0" ? "FAUX" : null
      return (
          <ScrollView style={styles.main_container}>
            {this._displayLoading()}
            <View style={styles.intitule}>
              <Text style={styles.intitule_text}>{qcm.intitule}</Text>
            </View>

            <View style={styles.propositions}>
              <View style={styles.proposition}>
                <Text style={styles.proposition_text}>A. {qcm.pa}</Text>
                <Text style={styles.VF_text}>{ba}</Text>
                <Text style={styles.corrige_text}>{qcm.ca}</Text>
              </View>
              <View style={styles.proposition}>
                <Text style={styles.proposition_text}>B. {qcm.pb}</Text>
                <Text style={styles.VF_text}>{bb}</Text>
                <Text style={styles.corrige_text}>{qcm.cb}</Text>
              </View>
              <View style={styles.proposition}>
                <Text style={styles.proposition_text}>C. {qcm.pc}</Text>
                <Text style={styles.VF_text}>{bc}</Text>
                <Text style={styles.corrige_text}>{qcm.cc}</Text>
              </View>
              <View style={styles.proposition}>
                <Text style={styles.proposition_text}>D. {qcm.pd}</Text>
                <Text style={styles.VF_text}>{bd}</Text>
                <Text style={styles.corrige_text}>{qcm.cd}</Text>
              </View>
              <View style={styles.proposition}>
                <Text style={styles.proposition_text}>E. {qcm.pe}</Text>
                <Text style={styles.VF_text}>{be}</Text>
                <Text style={styles.corrige_text}>{qcm.ce}</Text>
              </View>
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
    color: 'red',
  },
  VF_text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  }
})

export default QcmRepItem
