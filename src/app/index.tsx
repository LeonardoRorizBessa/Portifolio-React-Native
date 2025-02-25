import React, { useState } from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
} from 'react-native'
import { Button } from '@/components/Button/Button'
import { Input } from '@/components/Input/Input'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Index() {
  const [isLoading, setIsLoading] = useState(false)

  function handleButton(){
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewLogo}>
        <MaterialCommunityIcons 
          name='react' 
          size={100} 
          color="blue"
        />
        <Text style={styles.titleLogo}>Welcome back</Text>
      </View>
      <Button 
        title='entrar'
        isLoading={isLoading}
        style={{ marginVertical: 20 }}
        routeName='signIn'
      />
      <Button 
        title='cadastrar'
        isLoading={isLoading}
        style={{ marginBottom: 20 }}
        routeName='signUp'
      />
      <Button 
        title='Home'
        isLoading={isLoading}
        style={{ marginBottom: 20 }}
        routeName='home'
        variant='outline'
      />
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
    padding: 32,
  },
  // View logo
  viewLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
  },
  logo: {
    width: 80,
    height: 80,
  },
  titleLogo: {
    color: '#f1f1f1',
    fontSize: 24,
  },
})