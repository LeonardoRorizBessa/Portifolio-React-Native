import React from 'react'
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet,
  ActivityIndicator,
  TouchableHighlightProps,
} from 'react-native'
import { router } from 'expo-router'
import { variants } from './variants'

interface Props {
  title: string;
  disable?: boolean;
  isLoading?: boolean;
  variant?: 'primary' | 'outline';
  style?: TouchableHighlightProps['style'];
  routeName?: 'signIn' | 'signUp' | 'home';
  onPress?: () => void;
}

const routeMap = {
  signIn: '/SignIn/signIn',
  signUp: '/SignUp/signUp',
  home: '/(tabs)/Home/home',
}

export function Button({ 
  title, 
  onPress, 
  disable, 
  style,
  routeName,
  isLoading = false,
  variant = 'primary',
}: Props){
  const ButtonVariant = variants[variant]
  const buttonStyle = disable ? ButtonVariant.disable : ButtonVariant.enable

  function handlePress(){
    if (routeName) {
      const route = routeMap[routeName]
      router.push(route as any)
    } else if (onPress) {
      onPress()
    }
  }

  return (
    <TouchableOpacity 
      activeOpacity={0.8} 
      disabled={isLoading || disable}
      style={[styles.button, { ...buttonStyle.button }, style]} 
      onPress={handlePress}
    >
      {isLoading? 
        <ActivityIndicator color={buttonStyle.title.color}/> 
        : 
        <Text style={[styles.buttonText, { color: buttonStyle.title.color }]}>{title}</Text>
      }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 24,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
  }
})
