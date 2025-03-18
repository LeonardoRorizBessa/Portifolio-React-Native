import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { colors } from '@/styles/colors'

const { width } = Dimensions.get('window')

interface Props {
  title: string;
  description: string;
}

export function NotesCard({
  title,
  description,
}: Props) {
  return (
    <>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    padding: 10,
    margin: 8,
    width: width * 0.43,
    height: 180,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 12,
    color: colors.darkGray,
  },
})