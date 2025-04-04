import React from 'react'
import {
  Pressable,
  View,
  StyleSheet,
} from 'react-native'
import { router } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors, radius } from '@/styles/global';

interface Props {
  iconName?: keyof typeof MaterialCommunityIcons.glyphMap;
  size?: number;
  color?: string;
}

export function BackButton({ 
  iconName = 'arrow-left',
  size = 30,
  color = colors.orange,
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
    alignSelf: 'flex-start',
    padding: 4,
    borderRadius: radius.xxs,
  },
})