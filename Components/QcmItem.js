import React from 'react'
import { StyleSheet, View, Text, ScrollView} from 'react-native'
import CheckboxFormX from 'react-native-checkbox-form';

class QcmItem extends React.Component {
  constructor(props) {
    super(props)
    this.compteRep = 0
    this.state = { qcmData: [], good: false, score: 0, nbQcm: 0  }
  }
  _onSelect = ( item ) => {
        console.log(item)
  };

  _Reponses(){
    this.setState({ nbQcm: this.state.nbQcm +1 })
    for (let q of this.state.qcmData) {
      this.setState({ good: false })
      if(q.RNchecked == q.value){
        this.setState({ good: true })
        this.compteRep++
      } else { console.log("pas de réponse") }
      if(this.state.good) { console.log("bien") }
      else { console.log("mauvais") }
    }
    if(this.compteRep == 5){
      this.setState({ score: this.state.score +1, compteRep: 0 })
    }
  }

  render() {
      const qcm = this.props.qcm
      const qcmData = [
        {label: qcm.pa, value: qcm.ba == "1" ? true : false },
        {label: qcm.pb, value: qcm.bb == "1" ? true : false },
        {label: qcm.pc, value: qcm.bc == "1" ? true : false },
        {label: qcm.pd, value: qcm.bd == "1" ? true : false },
        {label: qcm.pe, value: qcm.be == "1" ? true : false },
      ];
      return (
        <ScrollView style={styles.main_container}>
          <View style={styles.intitule}>
            <Text style={styles.intitule_text}>{qcm.intitule}</Text>
          </View>
          <View style={styles.propositions}>
            <CheckboxFormX
                  textStyle={{ fontSize: 20, marginRight: 30 }}
                  dataSource={qcmData}
                  itemShowKey="label"
                  itemCheckedKey="RNchecked"
                  onChecked={(item) => this._onSelect(item)}
              />
          </View>
        </ScrollView>
      )
  }
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  main_container: {
    flex: 1,
    padding: 10,
  },
  intitule: {
    alignItems: 'center',
  },
  intitule_text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  propositions: {
    marginVertical: 10,
  },
  proposition_text: {
    fontSize: 20,
  },

})

export default QcmItem
