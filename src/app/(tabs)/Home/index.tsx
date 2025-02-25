import React from 'react'
import { 
  View, 
  Text,
  StyleSheet,
} from 'react-native'
import { Redirect, useLocalSearchParams } from 'expo-router'

export default function Home(){
  // const { id, name } = useLocalSearchParams()

  // if(!id) {
  //   return <Redirect href='/' />
  // }

  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      {/* <Text style={styles.title}>ID do produto: {id}</Text>
      <Text style={styles.title}>Nome do produto: {name}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a94323',
  },
})