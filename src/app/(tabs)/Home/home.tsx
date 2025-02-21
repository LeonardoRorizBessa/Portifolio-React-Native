import { View, Text, StyleSheet } from 'react-native'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { styles } from './styles'

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