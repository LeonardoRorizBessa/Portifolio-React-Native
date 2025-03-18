import React from 'react'
import { 
  Text, 
  Image, 
  StyleSheet, 
  TouchableOpacity,
} from 'react-native'
import { useRouter } from 'expo-router'
import { colors, fontSize, radius } from '@/styles/global';

interface Props {
  name: string;
  route: string;
  image: any;
}

export function ProjectsCard({ 
  name, 
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
        style={styles.iconsList}
      />
      <Text style={styles.itemsTitle}>{name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 16,
    marginVertical: 8,
    borderRadius: radius.xs,
  },
  iconsList: {
    width: 30,
    height: 30,
  },
  itemsTitle: {
    fontSize: fontSize.medium,
    color: colors.black,
  },
})