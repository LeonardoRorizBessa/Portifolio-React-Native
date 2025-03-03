import React, { useState } from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet,
  ActivityIndicator,
  TouchableHighlightProps,
} from 'react-native';
import { useRouter } from 'expo-router';
import { variants } from './variants';

interface Props {
  title: string;
  route: string;
  disable?: boolean;
  variant?: 'primary' | 'secundary' | 'outlinePrimary' | 'outlineSecundary';
  style?: TouchableHighlightProps['style'];
}

export function Button({ 
  title, 
  route, 
  disable, 
  style,
  variant = 'primary',
}: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  
  const handleNavigate = () => {
    setIsLoading(true);
    setTimeout(() => {
      if(route === '/Home'){
        router.replace(route as any)
      } else {
        router.push(route as any)
      }
      setIsLoading(false)
    }, 300)
  };

  const ButtonVariant = variants[variant];
  const buttonStyle = disable ? ButtonVariant.disable : ButtonVariant.enable;

  return (
    <TouchableOpacity 
      activeOpacity={0.8} 
      disabled={isLoading || disable}
      style={[styles.button, { ...buttonStyle.button }, style]} 
      onPress={handleNavigate}
    >
      {isLoading ? 
        <ActivityIndicator color={buttonStyle.title.color}/> 
        : 
        <Text style={[styles.buttonText, { color: buttonStyle.title.color }]}>{title}</Text>
      }
    </TouchableOpacity>
  );
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
});
