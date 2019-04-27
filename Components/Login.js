import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'


class Login extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
      return (
        <View style={styles.main_container}>
          <View style={styles.input}>
            <TouchableOpacity style={styles.touchableButtonSubmit}
              onPress={() => this.props.navigation.navigate("Drawer")}>
                <Text style={styles.button_text}>Connexion</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
  }
}
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  touchableButtonSubmit:{
    justifyContent: 'center',
    padding: 10,
  },
})

export default Login
