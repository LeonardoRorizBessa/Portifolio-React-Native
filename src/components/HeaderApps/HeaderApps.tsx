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

const { width } = Dimensions.get('window')

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
        return 'O Cooking App é um aplicativo que ajuda os usuários a encontrar e seguir receitas de forma simples e intuitiva. Ele apresenta uma lista de pratos, cada um com sua imagem, ingredientes e modo de preparo detalhado. Ao selecionar uma receita, o usuário pode visualizar as informações completas sobre como preparar o prato.';
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
            <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <MaterialCommunityIcons 
                name="close" 
                size={24} 
                color={colors.black} 
              />
            </Pressable>
            <Text style={styles.modalText}>Como funciona!</Text>
            <Text style={styles.modalDescription}>{getDescription()}</Text>
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
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalText: {
    marginBottom: 16,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalDescription: {
    marginBottom: 16,
    textAlign: 'center',
    fontSize: 16,
  },
})