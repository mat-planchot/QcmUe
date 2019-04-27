import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, SafeAreaView } from 'react-native'
import { getQCMue } from '../API/QCMue'
import { Container, Header, Left, Body, Right, Icon, Title } from 'native-base'
import SafeViewAndroid from "./SafeViewAndroid"

class QcmFavorites extends React.Component {

  constructor(props) {
    super(props)
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
      return (
        <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, { backgroundColor: '#FFF' }]}>
          <Container>
            <Header style={{backgroundColor: "#fff"}}>
              <Right>
                <Icon name='menu' style={{color:"black"}}
                  onPress={()=>this.props.navigation.openDrawer()}/>
              </Right>
            </Header>
          	<Text style={styles.title_text}>Qcm marqués</Text>
          </Container>
        </SafeAreaView>
      )
  }
}
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  title_text: {
    textAlign:'center',
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
  touchableButtonGreen:{
    height: 70,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "green",
  },
})

export default QcmFavorites
