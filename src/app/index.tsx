import {  
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import { colors } from '@/styles/colors'

export default function Loading(){
  <View style={styles.container}>
    <ActivityIndicator size={44} color={colors.menta}/>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  }
})