import React from 'react'
import {
  TouchableOpacity,
  View,
  Linking,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Props {
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  size: number;
  color: string;
  url: string;
}

export function SocialButton({ 
  iconName,
  size,
  color,
  url,
}: Props){
  return (
    <View>
      <TouchableOpacity 
        activeOpacity={0.8} 
        onPress={() => Linking.openURL(url)}
      >
        <MaterialCommunityIcons 
          name={iconName} 
          size={size} 
          color={color}
        />
      </TouchableOpacity>
    </View>
  )
}