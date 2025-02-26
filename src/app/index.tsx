import React, { useState } from 'react'
import { 
  View, 
  Text, 
  StyleSheet,
  Dimensions,
} from 'react-native'
import { router } from 'expo-router'
import { Button } from '@/components/Button/Button'
import { variants } from '../components/Button/variants';
import { Input } from '@/components/Input/Input'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function Index() {
  const [isLoading, setIsLoading] = useState(false)

  function handleNavigate(route: string){
    if(route === '/(tabs)/Home'){
      router.replace(route as any)
    } else {
      router.push(route as any)
    }
  }

  function handleButton(){
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <View style={styles.container}>
      <View style={styles.boxLogo}>
        <MaterialCommunityIcons 
          name='react' 
          size={120} 
          color="#50E3C2"
        />
        <Text style={styles.textWelcome}>Welcome Back</Text>
      </View>
      <View style={styles.boxButtons}>
        <Button 
          title='sign in'
          isLoading={isLoading}
          variant='outlinePrimary'
          onPress={() => handleNavigate('/SignIn')}
        />
        <Button 
          title='sign up'
          isLoading={isLoading}
          variant='secundary'
          onPress={() => handleNavigate('/SignUp')}
        />
      </View>
      <View style={styles.boxSocial}>
        <Text style={styles.textSocial}>Visit my Social Media</Text>
        <View style={styles.boxMedias}>
          <MaterialCommunityIcons 
            name='instagram' 
            size={30} 
            color="#50E3C2"
          />
          <MaterialCommunityIcons 
            name='linkedin' 
            size={30} 
            color="#50E3C2"
          />
          <MaterialCommunityIcons 
            name='github' 
            size={30} 
            color="#50E3C2"
          />
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
    backgroundColor: '#1c1c1c',
    paddingVertical: 32,
  },
  // Box Logo
  boxLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.45,
    width: width * 0.9,
    gap: 20,
  },
  textWelcome: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  // Box Buttons
  boxButtons: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.4,
    width: width * 0.9,
    padding: 20,
    gap: 30,
  },
  // Box Social Media
  boxSocial: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.15,
    width: width * 0.9,
    gap: 10,
  },
  textSocial: {
    color: '#fff',
    fontWeight: 'semibold',
    fontSize: 14,
  },
  boxMedias: {
    flexDirection: 'row',
    gap: 10,
  }
})