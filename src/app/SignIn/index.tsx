import React, { useContext } from 'react'
import { 
  View, 
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { colors } from '@/styles/colors'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'

const { width, height } = Dimensions.get('window');

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
          
        </View>
        <View style={styles.boxHasAccount}>

        </View>
      </View>
    </View>


    // <View>
    //   <View style={styles.viewLogo}>
    //     <MaterialCommunityIcons 
    //       name='react' 
    //       size={100} 
    //       color="blue"
    //     />
    //     <Text style={styles.titleLogo}>Welcome back</Text>
    //   </View>
    //   <Button 
    //     title='entrar'
    //     isLoading={isLoading}
    //     style={{ marginVertical: 20 }}
    //     onPress={() => handleNavigate('/SignIn')}
    //   />
    //   <Button 
    //     title='cadastrar'
    //     isLoading={isLoading}
    //     style={{ marginBottom: 20 }}
    //     onPress={() => handleNavigate('/SignUp')}
    //   />
    //   <Button 
    //     title='Home'
    //     isLoading={isLoading}
    //     style={{ marginBottom: 20 }}
    //     onPress={() => handleNavigate('/(tabs)/Home')}
    //     variant='outline'
    //   />
    // </View>
  )
}

const styles = StyleSheet.create({
  // Container
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grayDark,
    paddingVertical: 32,
  },
  // Box Title
  boxTitle: {
    paddingTop: 32,
    height: height * 0.2,
    width: width * 0.9,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 32,
  },
  // Box Sign In
  boxSignIn: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.8,
    width: width * 1,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  // Box Form
  boxForm: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.4,
    width: width * 0.9,
    gap: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
  },
  // Box Form
  boxButton: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.3,
    width: width * 0.9,
  },
  // Box Form
  boxHasAccount: {
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.1,
    width: width * 0.9,
  },
})