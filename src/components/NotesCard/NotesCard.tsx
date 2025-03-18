import React, { useState } from 'react'
import {
  Text,
  Modal,
  Pressable,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import { colors, fontSize, radius } from '@/styles/global';

const { width } = Dimensions.get('window')

interface Props {
  title: string;
  description: string;
}

export function NotesCard({
  title,
  description,
}: Props) {
  const [modalVisible, setModalVisible] = useState(false)
  
  const handleEditNotes = () => {
    setModalVisible(true)
  }

  return (
    <>
      <TouchableOpacity 
        style={styles.card} 
        activeOpacity={0.8}
        onPress={handleEditNotes}
      >
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </TouchableOpacity>
      <Modal
        animationType='fade'
        statusBarTranslucent={true}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable 
          style={styles.modalContainer} 
          onPress={() => setModalVisible(false)}
        >
          <Pressable 
            style={styles.modalView} 
            onPress={(e) => e.stopPropagation()}
          >
            
          </Pressable>
        </Pressable>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: radius.xs,
    padding: 10,
    margin: 8,
    width: width * 0.43,
    height: 180,
  },
  cardTitle: {
    fontSize: fontSize.small,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: fontSize.xs,
    color: colors.darkGray,
  },
  // Modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black50,
  },
  modalView: {
    width: width * 0.9,
    backgroundColor: colors.white,
    borderRadius: radius.medium,
    alignItems: 'center',
  },
})