import React from 'react'
import {
  Pressable,
  View,
  StyleSheet,
} from 'react-native'
import { router } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Props {
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  size: number;
  color: string;
}

export function BackButton({ 
  iconName,
  size,
  color,
}: Props){
  return (
    <View>
      <Pressable
        onPress={() => router.back()}
        style={styles.backButton}
      >
        <MaterialCommunityIcons 
          name={iconName} 
          size={size} 
          color={color}
        />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.55)',
    alignSelf: 'flex-start',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
})