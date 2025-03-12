import React, { useState } from 'react'
import { 
  View, 
  Text, 
  StyleSheet,
  Modal,
  Pressable,
  Dimensions,
} from 'react-native'
import { colors } from '@/styles/colors'
import { BackButton } from '@/components/BackButton/BackButton'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const { width, height } = Dimensions.get('window')

interface Props {
  title: string;
  icon: boolean;
  description: string;
}

export function HeaderApps({ 
  title, 
  icon = false,
  description,
}: Props) {
  const [modalVisible, setModalVisible] = useState(false)

  const getDescription = () => {
    switch (description) {
      case 'Cooking':
        return 'Descrição Cooking App';
      case 'Timer':
        return 'Descrição Timer App';
      case 'Notes':
        return 'Descrição Notes App';
      case 'Weather':
        return 'Descrição Weather App';
      case 'ToDoList':
        return 'Descrição To-Do List App';
      case 'Ecommerce':
        return 'Descrição E-commerce App';
      default:
        return 'Descrição do App';
    }
  }

  return (
    <>
      <View style={styles.boxHeader}>
        <BackButton />
        <Text style={styles.title}>{title}</Text>
        {icon && (
          <Pressable onPress={() => setModalVisible(true)}>
            <MaterialCommunityIcons 
              name='chat-question'
              size={35}
              color={colors.orange}
            />
          </Pressable>
        )}
      </View>

      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable style={styles.modalContainer} onPress={() => setModalVisible(false)}>
          <Pressable style={styles.modalView} onPress={(e) => e.stopPropagation()}>
            <Text style={styles.modalText}>Como funciona!</Text>
            <Text style={styles.modalDescription}>{getDescription()}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textClose}>Fechar</Text>
            </Pressable>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  // Box Header
  boxHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },
  // Modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: width * 0.8,
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 16,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalDescription: {
    marginBottom: 16,
    textAlign: 'center',
    fontSize: 12,
  },
  button: {
    borderRadius: 10,
    padding: 12,
    elevation: 3,
  },
  buttonClose: {
    backgroundColor: colors.orange,
  },
  textClose: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})