import React from 'react'
import { 
  View, 
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { colors, fontSize } from '@/styles/global'

const { width, height } = Dimensions.get('window')

export default function Resume(){

  return (
    <View style={styles.container}>
      <View style={styles.boxTitle}>
        <Text style={styles.title}>Resume</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  // Container
  container: {
    flex: 1,
    width: width,
    height: height,
    padding: 16,
    backgroundColor: colors.black,
  },
  // Box Title
  boxTitle: {
    marginBottom: 16,
  },
  title: {
    color: colors.white,
    fontSize: fontSize.large,
    fontWeight: 'bold',
  },
})