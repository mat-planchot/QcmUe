import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, SafeAreaView, FlatList } from 'react-native'
import { Container, Header, Left, Body, Right, Icon, Title } from 'native-base'
import SafeViewAndroid from "./SafeViewAndroid"
import QcmRepItem from './QcmRepItem'
import { connect } from 'react-redux'

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
    console.log(this.props)
      return (
        <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, { backgroundColor: '#FFF' }]}>
          <Container>
            <Header style={{backgroundColor: "#fff"}}>
              <Left>
                <Icon name='menu' style={{color:"black"}}
                  onPress={()=>this.props.navigation.openDrawer()}/>
              </Left>
              <Body>
                <Text>Qcm marqués</Text>
              </Body>
            </Header>
            <FlatList
              style={styles.list}
              data={this.props.favoritesQcm}
              keyExtractor={(item) => item.idUe.toString()}
              renderItem={({item}) => (
                <QcmRepItem qcm={item} />
              )}
            />
          </Container>
        </SafeAreaView>
      )
  }
}
const styles = StyleSheet.create({
  list: {
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
const mapStateToProps = (state) => {
  return {
    favoritesQcm: state.favoritesQcm
  }
}
export default connect(mapStateToProps)(QcmFavorites)
//export default QcmFavorites
