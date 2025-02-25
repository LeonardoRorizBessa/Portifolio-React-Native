import React from 'react'
import { 
  View, 
  Text 
} from 'react-native'
import { styles } from './styles'
import { router } from 'expo-router'

export default function SignIn(){
  return (
    <View style={styles.container}>
      <Text>Sign In Page</Text>
    </View>
  )
}