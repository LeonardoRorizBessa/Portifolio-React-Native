import React, { useState } from 'react'
import { 
  View, 
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { Link, useRouter } from 'expo-router'
import { colors } from '@/styles/colors'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'
import { BackButton } from '@/components/BackButton/BackButton'

const { width, height } = Dimensions.get('window')

export default function SignUp(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter();

  const handleSignUp = () => {
    setLoading(true);
    console.log({ name, email, password, confirmPassword });
    setLoading(false);
    router.push('/');
  }

  return (
    <View style={styles.container}>
      <View style={styles.boxTitle}>
        <BackButton 
          iconName='arrow-left'
          color={colors.white}
          size={30}
        />
        <Text style={styles.title}>Sign Up!</Text>
      </View>

      <View style={styles.boxSignUp}>
        <View style={styles.boxForm}>
          <Input 
            label='Full Name' 
            placeHolder='Full Name' 
            iconName='account'
            value={name}
            onChangeText={setName}
          />
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
          <Input 
            label='Confirm Password' 
            placeHolder='********' 
            iconName='eye-off'
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            password={true}
          />
        </View>

        <View style={styles.boxButton}>
          <Button 
            title="Sign Up" 
            variant="secundary"
            onPress={handleSignUp}
            disable={loading}
          />
        </View>

        <View style={styles.boxHasAccount}>
          <Text style={styles.textHasAccount}>Already have an account?</Text>
          <Link href='/(auth)/SignIn' style={styles.linkSignIn}>
            <Text style={styles.textSignIn}>Sign In</Text>
          </Link>
        </View>
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
  // Box Title
  boxTitle: {
    paddingVertical: width * 0.05,
    height: height * 0.25,
    width: width * 0.9,
  },
  title: {
    alignSelf: 'center',
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 32,
  },
  // Box Sign Up
  boxSignUp: {
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: height * 0.75,
    width: width * 1,
    paddingTop: width * 0.1,
    paddingBottom: width * 0.05,
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
    color: colors.gray,
    alignSelf: 'flex-end',
    fontSize: 12,
  },
  linkSignIn: {
    alignSelf: 'flex-end',
  },
  textSignIn: {
    color: colors.grayDark,
    fontWeight: 'bold',
    fontSize: 16,
  },
})