import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { styles } from './styles'
import { router } from 'expo-router'

export default function SignUp(){
  // function signUp() {
  //   router.navigate('/(app)/home')
  // }

  // function back() {
  //   if(!router.canGoBack()) {
  //     return Alert.alert('Alert', 'Não é possível voltar!')
  //   }
  //   router.back()
  // }

  return (
    <View style={styles.container}>
      <Text>Sign Up Page</Text>
      {/* <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={signUp}>
        <Text style={styles.title}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={back}>
        <Text style={styles.title}>
          Voltar
        </Text>
      </TouchableOpacity> */}
    </View>
  )
}