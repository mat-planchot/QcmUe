import React from 'react'
import { StyleSheet, View, Text, Button} from 'react-native'

class QcmItem extends React.Component {

  render() {
      const qcm = this.props.qcm
      tab = [qcm.ba, qcm.bb, qcm.bc, qcm.bd, qcm.be]
      for (var i = 0 ; i < tab.length; i++) {
          tab[i] = tab[i] == "1" ? "VRAI" : "FAUX"
      }
      return (
        <View>
          <View style={styles.main_container}>
            <View style={styles.intitule}>
              <Text style={styles.intitule_text}>{qcm.intitule}</Text>
            </View>
            <View style={styles.propositions}>
              <View style={styles.proposition}>
                <Text style={styles.proposition_text}>A. {qcm.pa}</Text>
                <Text style={styles.proposition_VF}>{tab[0]}</Text>
                <Text style={styles.proposition_text}>{qcm.ca}</Text>
              </View>
              <View style={styles.proposition}>
                <Text style={styles.proposition_text}>B. {qcm.pb}</Text>
                <Text style={styles.proposition_VF}>{tab[1]}</Text>
                <Text style={styles.proposition_text}>{qcm.ca}</Text>
              </View>
              <View style={styles.proposition}>
                <Text style={styles.proposition_text}>C. {qcm.pc}</Text>
                <Text style={styles.proposition_VF}>{tab[2]}</Text>
                <Text style={styles.proposition_text}>{qcm.ca}</Text>
              </View>
              <View style={styles.proposition}>
                <Text style={styles.proposition_text}>D. {qcm.pd}</Text>
                <Text style={styles.proposition_VF}>{tab[3]}</Text>
                <Text style={styles.proposition_text}>{qcm.ca}</Text>
              </View>
              <View style={styles.proposition}>
                <Text style={styles.proposition_text}>E. {qcm.pe}</Text>
                <Text style={styles.proposition_VF}>{tab[4]}</Text>
                <Text style={styles.proposition_text}>{qcm.ca}</Text>
              </View>
            </View>
          </View>
          <View>
              <Button style={{ height: 50 }} title='Suivant' onPress={() => this._loadQcm()}/>
          </View>
        </View>
      )
  }
}
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    margin: 10,
    paddingTop: 25,
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

})

export default QcmItem