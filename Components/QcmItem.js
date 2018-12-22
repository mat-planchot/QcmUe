import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView } from 'react-native'
import CheckboxFormX from 'react-native-checkbox-form';
import { getQCMue, getQCMueRep } from '../API/QCMue'

class QcmItem extends React.Component {
  constructor(props) {
    super(props)
    this.compteRep = 0
    this.state = { qcm: [], isLoading: false, qcmRep: false, good: false, score: 0, nbQcm: 0  }
    getQCMue().then(data => this.setState({ qcm: data, isLoading: false }));
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
  _loadQcm(){
  	this.setState({ isLoading: true, qcmRep: false })
    getQCMue().then(data => this.setState({ qcm: data, isLoading: false, }));
    console.log(this.state.qcmRep);
  }
  _displayQcmRep() {
    this.setState({ qcmRep: true })
    console.log(this.state.qcmRep);
  }
  render() {
      const qcm = this.props.qcm
      const qcmData = this.props.qcmData
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
