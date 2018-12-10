import React from 'react'
import { StyleSheet, View, Text, ScrollView, Checkbox} from 'react-native'
import CheckboxFormX from 'react-native-checkbox-form';

class QcmItem extends React.Component {
  _onSelect = ( item ) => {
        console.log(item);
      };

  render() {
      const qcm = this.props.qcm
      const qcmData = [
        {label: qcm.pa, value: qcm.ba},
        {label: qcm.pb, value: qcm.bb},
        {label: qcm.pc, value: qcm.bc},
        {label: qcm.pd, value: qcm.bd},
        {label: qcm.pe, value: qcm.be},
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
