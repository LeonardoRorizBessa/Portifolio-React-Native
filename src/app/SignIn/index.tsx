import React from 'react'
import { 
  View, 
  Text,
  StyleSheet,
} from 'react-native'

export default function SignIn(){
  return (
    <View style={styles.container}>
      <Text>Sign In Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  // Container
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#129844',
    gap: 20,
  },
})