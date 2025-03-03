import React from 'react'
import { 
  View, 
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { colors } from '@/styles/colors'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'

const { width, height } = Dimensions.get('window')

export default function SignIn(){

  return (
    <View style={styles.container}>
      <View style={styles.boxTitle}>
        <Text style={styles.title}>Sign in!</Text>
      </View>

      <View style={styles.boxSignIn}>
        <View style={styles.boxForm}>
          <Input 
            label='Email' 
            placeHolder='email@gmail.com' 
            iconName='email'
          />
          <Input 
            label='Password' 
            placeHolder='********' 
            iconName='eye-off'
          />
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </View>

        <View style={styles.boxButton}>
          <Button 
            title="Sign In"
            variant="secundary" 
            route='/Home'
          />
        </View>

        <View style={styles.boxHasAccount}>
          <Text style={styles.textHasAccount}>Don't have account?</Text>
          <Text style={styles.linkSignUp}>Sign Up</Text>
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
    paddingTop: width * 0.05,
    height: height * 0.25,
    width: width * 0.9,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 32,
  },
  // Box Sign In
  boxSignIn: {
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
  forgotPassword: {
    alignSelf: 'flex-end',
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
  linkSignUp: {
    color: colors.grayDark,
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    fontSize: 16,
  },
})