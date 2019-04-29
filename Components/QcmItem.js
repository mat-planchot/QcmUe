import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView } from 'react-native'
import CheckboxFormX from 'react-native-checkbox-form';

class QcmItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLoading: false, qcm:{ propositions: []} }
  }
  _onSelect = ( item ) => {
    console.log(item)
  };
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
      const qcmData = qcm.propositions
      return (
        <ScrollView style={styles.scroll_container}>
        {this._displayLoading()}
          <View style={styles.intitule}>
            <Text style={styles.intitule_text}>{qcm.intitule}</Text>
          </View>
          <View style={styles.propositions}>
            <CheckboxFormX
                  textStyle={{ fontSize: 20, marginRight: 30 }}
                  dataSource={qcmData}
                  itemShowKey="libelle"
                  itemCheckedKey="RNchecked"
                  onChecked={(item) => this._onSelect(item)}
              />
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
    marginVertical: 10,
  },
  scroll_container: {
    padding: 10,
  },

})

export default QcmItem
