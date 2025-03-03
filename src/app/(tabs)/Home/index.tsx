import React from 'react'
import { 
  View, 
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { colors } from '@/styles/colors'

const { width, height } = Dimensions.get('window')

export default function Home(){

  return (
    <View style={styles.container}>
      <View style={styles.boxHeader}>
        <Text style={styles.text}>Home Page</Text>
      </View>
      <View style={styles.boxProjects}>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  // Container
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grayDark,
  },
  // Box Header
  boxHeader: {
    backgroundColor: colors.white,
    height: height * 0.2,
    width: width * 1,
  },
  text: {
    color: colors.grayDark,
  },
  // Box Projects
  boxProjects: {
    backgroundColor: colors.menta,
    height: height * 0.73,
    width: width * 1,
  },
})