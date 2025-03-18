import React from 'react'
import { 
  View, 
  Text,
  StyleSheet,
  Alert,
  Dimensions,
} from 'react-native'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/contexts/AuthContext'
import { colors, fontSize } from '@/styles/global'
import { SettingsOptions } from '@/components/SettingsOptions/SettingsOptions'

const { width, height } = Dimensions.get('window')

export default function Settings(){
  const { setAuth } = useAuth()

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
      <View style={styles.boxTitle}>
        <Text style={styles.title}>Settings</Text>
      </View>
      <View>
        <SettingsOptions 
          name='Account'
          iconLeft='account'
          iconRight='keyboard-arrow-right'
        />
        <SettingsOptions 
          name='Notifications'
          iconLeft='bell-outline'
          iconRight='keyboard-arrow-right'
        />
        <SettingsOptions 
          name='Logout'
          iconLeft='logout'
          iconRight='keyboard-arrow-right'
          onPress={handleSignout}
        />
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