import React from 'react'
import { 
  View, 
  Text,
  StyleSheet,
  Dimensions,
  Button,
  Alert,
} from 'react-native'
import { colors } from '@/styles/colors'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/contexts/AuthContext'

const { width, height } = Dimensions.get('window')

export default function Home(){
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
      <View style={styles.boxHeader}>
        <Text style={styles.text}>Home Page</Text>
        <Text>Olá, {user?.email}</Text>
      </View>
      <View style={styles.boxProjects}>
        <Button 
          title='Sair'
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grayDark,
  },
  // Box Header
  boxHeader: {
    justifyContent: 'center',
    alignItems: 'center',
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