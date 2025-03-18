import React from 'react'
import { 
  View,
  Text,
  StyleSheet, 
  TouchableOpacity,
} from 'react-native'
import { useRouter } from 'expo-router'
import { colors, fontSize, radius } from '@/styles/global';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

interface Props {
  name: string;
  route?: string;
  iconLeft?: keyof typeof MaterialCommunityIcons.glyphMap;
  iconRight?: keyof typeof MaterialIcons.glyphMap;
  onPress?: () => void;
}

export function SettingsOptions({ 
  name, 
  route, 
  iconLeft, 
  iconRight,
  onPress,
}: Props) {
  const router = useRouter()

  return (
    <TouchableOpacity 
      style={styles.button} 
      activeOpacity={0.8}
      onPress={onPress ? onPress : () => router.push(route as any)}
    >
      <View style={styles.boxText}>
        {iconLeft && (
          <MaterialCommunityIcons 
            name={iconLeft}
            size={24}
            color={colors.white}
          />
        )}
        <Text style={styles.itemsTitle}>{name}</Text>
      </View>
      {iconRight && (
        <MaterialIcons 
          name={iconRight}
          size={24}
          color={colors.white}
        />
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    marginVertical: 4,
    borderRadius: radius.xs,
  },
  boxText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  itemsTitle: {
    fontSize: fontSize.medium,
    color: colors.white,
  },
})