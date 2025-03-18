import {  
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import { colors } from '@/styles/global'

export default function Loading(){
  <View style={styles.container}>
    <ActivityIndicator size={44} color={colors.orange}/>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  }
})