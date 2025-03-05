import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet,
  TouchableHighlightProps,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import { variants } from './variants';
import { colors } from '@/styles/colors';

interface Props {
  title: string;
  route?: string;
  disable?: boolean;
  variant?: 'primary' | 'secundary' | 'outlinePrimary' | 'outlineSecundary';
  style?: TouchableHighlightProps['style'];
  onPress?: () => void;
  loading?: boolean;
}

export function Button({ 
  title, 
  route, 
  disable, 
  style,
  variant = 'primary',
  onPress,
  loading = false,
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
      disabled={disable || loading}
      style={[styles.button, { ...buttonStyle.button }, style]} 
      onPress={handleNavigate}
    >
      {loading ? (
        <ActivityIndicator color={buttonStyle.title.color} />
      ) : (
        <Text style={[styles.buttonText, { color: buttonStyle.title.color }]}>{title}</Text>
      )}
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