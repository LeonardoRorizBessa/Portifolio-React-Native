import React from 'react'
import { 
  View, 
  Text, 
  Image,
  StyleSheet, 
  Dimensions,
} from 'react-native'
import { Button } from '@/components/Button/Button'
import { colors, fontSize } from '@/styles/global'
import Logo from '@/assets/logo.png'
import { SocialButton } from '@/components/SocialButton/SocialButton'

const { width, height } = Dimensions.get('window')

export default function Index() {

  return (
    <View style={styles.container}>
      <View style={styles.boxLogo}>
        <Image 
          source={Logo} 
          style={styles.logo} 
        />
        <Text style={styles.textWelcome}>Welcome Back</Text>
      </View>

      <View style={styles.boxButtons}>
        <Button 
          title="Sign In"
          variant="outlinePrimary" 
          route='/(auth)/SignIn'
        />
        <Button 
          title="Sign Up"
          variant="secundary"
          route='/(auth)/SignUp'
        />
      </View>

      <View style={styles.boxSocial}>
        <Text style={styles.textSocial}>Visit my Social Media</Text>
        <View style={styles.boxMedias}>
          <SocialButton 
            iconName='instagram'
            size={30}
            color={colors.orange}
            url='https://www.instagram.com/leonardororiz/'
          />
          <SocialButton 
            iconName='linkedin'
            size={30}
            color={colors.orange}
            url='https://www.linkedin.com/in/leonardorbessa/'
          />
          <SocialButton 
            iconName='github'
            size={30}
            color={colors.orange}
            url='https://github.com/LeonardoRorizBessa'
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Container
  container: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: colors.black,
  },
  //Box Logo
  boxLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: width * 0.25,
    gap: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  textWelcome: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSize.xl,
  },
  // Box Buttons
  boxButtons: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  // Box Social Media
  boxSocial: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  textSocial: {
    color: colors.white,
    fontWeight: '600',
    fontSize: fontSize.small,
  },
  boxMedias: {
    flexDirection: 'row',
    gap: 15,
  },
});