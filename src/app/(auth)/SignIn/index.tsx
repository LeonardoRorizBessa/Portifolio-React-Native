import React, { useState } from 'react'
import { 
  View, 
  Text,
  StyleSheet,
  Dimensions,
  Alert,
  SafeAreaView,
  ScrollView,
} from 'react-native'
import { Link, useRouter } from 'expo-router'
import { colors } from '@/styles/colors'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'
import { BackButton } from '@/components/BackButton/BackButton'
import { supabase } from '@/lib/supabase'

const { width, height } = Dimensions.get('window')

export default function SignIn(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter();

  async function handleSignIn() {
    setLoading(true)

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if(error){
      Alert.alert('Error', error.message)
      setLoading(false)
      return
    }

    setLoading(false)
    router.replace('/(tabs)/Home');
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.boxTitle}>
            <BackButton 
              iconName='arrow-left'
              color={colors.black}
              size={30}
            />
            <Text style={styles.title}>Sign in!</Text>
          </View>

          <View style={styles.boxSignIn}>
            <View style={styles.boxForm}>
              <Input 
                label='Email' 
                placeHolder='email@gmail.com' 
                iconName='email'
                value={email}
                onChangeText={setEmail}
              />
              <Input 
                label='Password' 
                placeHolder='********' 
                iconName='eye-off'
                value={password}
                onChangeText={setPassword}
                password={true}
              />
              <Text style={styles.forgotPassword}>Forgot password?</Text>
            </View>

            <View style={styles.boxButton}>
              <Button 
                title="Sign In"
                variant="secundary"
                onPress={handleSignIn}
                loading={loading}
              />
            </View>

            <View style={styles.boxHasAccount}>
              <Text style={styles.textHasAccount}>Don't have account?</Text>
              <Link href='/(auth)/SignUp' style={styles.linkSignUp}>
                <Text style={styles.textSignUp}>Sign Up</Text>
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  // Container
  container: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'space-between',
    backgroundColor: colors.black,
  },
  // Box Title
  boxTitle: {
    height: height * 0.3,
    padding: 16,
  },
  title: {
    alignSelf: 'center',
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 32,
  },
  // Box Sign In
  boxSignIn: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 16,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  // Box Form
  boxForm: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.9,
    gap: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: colors.black,
  },
  // Box Button
  boxButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.9,
  },
  // Box Account
  boxHasAccount: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.9,
  },
  textHasAccount: {
    color: colors.darkGray,
    alignSelf: 'flex-end',
    fontSize: 12,
  },
  linkSignUp: {
    alignSelf: 'flex-end',
  },
  textSignUp: {
    color: colors.orange,
    fontWeight: 'bold',
    fontSize: 16,
  },
})