import React from 'react'
import { 
  Text, 
  Image, 
  StyleSheet, 
  TouchableOpacity,
  View,
} from 'react-native'
import { useRouter } from 'expo-router'
import { colors } from '@/styles/colors'

interface Props {
  title: string;
  route?: string;
  image: any;
}

export function CookingCard({ 
  title, 
  route, 
  image,
}: Props) {
  const router = useRouter()

  return (
    <TouchableOpacity 
      style={styles.card} 
      activeOpacity={0.8}
      onPress={() => router.push(route as any)}
    >
      <Image 
        source={image}
        style={styles.image}
      />
      <View style={styles.boxTitle}>
        <Text style={styles.itemsTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    marginVertical: 8,
    borderRadius: 12, 
    overflow: 'hidden',
    width: '100%',
    height: 160,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  boxTitle: {
    position: 'absolute',
    top: 8,
    left: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 6,
  },
  itemsTitle: {
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
  },
})
