import React from 'react'
import { 
  View, 
  Text,
  StyleSheet,
  Button,
  Alert,
  Dimensions,
} from 'react-native'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/contexts/AuthContext'
import { colors } from '@/styles/colors'

const { width, height } = Dimensions.get('window')

export default function Settings(){
  const { setAuth, user } = useAuth()

  async function handleSignout(){
    const { error } = await supabase.auth.signOut()
    setAuth(null)
    
    if(error){
      Alert.alert('Error', 'Error ao sair da conta, tente mais tarde.')
      return
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Page</Text>
      <Button 
        title='Sair'
        onPress={handleSignout}
      />
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
  text: {
    color: colors.white,
  }
})