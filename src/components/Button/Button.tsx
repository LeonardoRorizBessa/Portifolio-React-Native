import React from 'react'
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet,
  ActivityIndicator,
  TouchableHighlightProps,
} from 'react-native'
import { variants } from './variants'

interface Props {
  title: string;
  disable?: boolean;
  isLoading?: boolean;
  variant?: 'primary' | 'secundary' | 'outlinePrimary' | 'outlineSecundary';
  style?: TouchableHighlightProps['style'];
  onPress?: () => void;
}

export function Button({ 
  title, 
  onPress, 
  disable, 
  style,
  isLoading = false,
  variant = 'primary',
}: Props){
  const ButtonVariant = variants[variant]
  const buttonStyle = disable ? ButtonVariant.disable : ButtonVariant.enable

  return (
    <TouchableOpacity 
      activeOpacity={0.8} 
      disabled={isLoading || disable}
      style={[styles.button, { ...buttonStyle.button }, style]} 
      onPress={onPress}
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
