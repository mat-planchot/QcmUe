import React from 'react'
import { StyleSheet, View, Text, Button} from 'react-native'

class QcmItem extends React.Component {

  render() {
      const qcm = this.props.qcm
      return (
        <View style={styles.main_container}>
          <View style={styles.intitule}>
            <Text style={styles.intitule_text}>{qcm.intitule}</Text>
          </View>
          <View style={styles.propositions}>
            <View style={styles.proposition}>
              <Text style={styles.proposition_text}>A. {qcm.pa}</Text>
            </View>
            <View style={styles.proposition}>
              <Text style={styles.proposition_text}>B. {qcm.pb}</Text>
            </View>
            <View style={styles.proposition}>
              <Text style={styles.proposition_text}>C. {qcm.pc}</Text>
            </View>
            <View style={styles.proposition}>
              <Text style={styles.proposition_text}>D. {qcm.pd}</Text>
            </View>
            <View style={styles.proposition}>
              <Text style={styles.proposition_text}>E. {qcm.pe}</Text>
            </View>
          </View>
        </View>
      )
  }
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  main_container: {
    flex: 1,
    margin: 10,
  },
  intitule: {
    alignItems: 'center',
  },
  intitule_text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  propositions: {
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
