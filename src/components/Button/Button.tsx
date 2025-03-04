import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet,
  TouchableHighlightProps,
} from 'react-native';
import { useRouter } from 'expo-router';
import { variants } from './variants';

interface Props {
  title: string;
  route?: string;
  disable?: boolean;
  variant?: 'primary' | 'secundary' | 'outlinePrimary' | 'outlineSecundary';
  style?: TouchableHighlightProps['style'];
  onPress?: () => void;
}

export function Button({ 
  title, 
  route, 
  disable, 
  style,
  variant = 'primary',
  onPress,
}: Props) {
  const router = useRouter();
  
  const handleNavigate = () => {
    if (onPress) {
      onPress();
    } else if (route) {
      router.push(route as any);
    }
  };

  const ButtonVariant = variants[variant];
  const buttonStyle = disable ? ButtonVariant.disable : ButtonVariant.enable;

  return (
    <TouchableOpacity 
      activeOpacity={0.8} 
      disabled={disable}
      style={[styles.button, { ...buttonStyle.button }, style]} 
      onPress={handleNavigate}
    >
      <Text style={[styles.buttonText, { color: buttonStyle.title.color }]}>{title}</Text>
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