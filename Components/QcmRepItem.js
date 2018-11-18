import React from 'react'
import { StyleSheet, View, Text} from 'react-native'

class QcmRepItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = { qcm: [], isLoading: false }
  }

  render() {
      const qcm = this.props.qcm
      const ba = qcm.ba == "1" ? "VRAI" : qcm.ba == "0" ? "FAUX" : null
      return (
          <View style={styles.main_container}>

            <View style={styles.intitule}>
              <Text style={styles.intitule_text}>{qcm.intitule}</Text>
            </View>

            <View style={styles.propositions}>
              <View style={styles.proposition}>
                <Text style={styles.proposition_text}>A. {qcm.pa}</Text>
                <View style={styles.proposition_VF}><Text>{ba}</Text></View>
                <Text style={styles.proposition_text}>{qcm.ca}</Text>
              </View>
              <View style={styles.proposition}>
                <Text style={styles.proposition_text}>B. {qcm.pb}</Text>
                <View style={styles.proposition_VF}><Text>{qcm.bb}</Text></View>
                <Text style={styles.proposition_text}>{qcm.cb}</Text>
              </View>
              <View style={styles.proposition}>
                <Text style={styles.proposition_text}>C. {qcm.pc}</Text>
                <View style={styles.proposition_VF}><Text>{qcm.bc}</Text></View>
                <Text style={styles.proposition_text}>{qcm.cc}</Text>
              </View>
              <View style={styles.proposition}>
                <Text style={styles.proposition_text}>D. {qcm.pd}</Text>
                <View style={styles.proposition_VF}><Text>{qcm.bd}</Text></View>
                <Text style={styles.proposition_text}>{qcm.cd}</Text>
              </View>
              <View style={styles.proposition}>
                <Text style={styles.proposition_text}>E. {qcm.pe}</Text>
                <View style={styles.proposition_VF}><Text>{qcm.be}</Text></View>
                <Text style={styles.proposition_text}>{qcm.ce}</Text>
              </View>
            </View>

          </View>

      )
  }
}
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    margin: 10,
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
  proposition_VF: {
    alignItems: 'center',
  }
})

export default QcmRepItem
