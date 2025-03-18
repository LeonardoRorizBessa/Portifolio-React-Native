import React, { useState } from 'react'
import { 
  View, 
  Text, 
  StyleSheet,
  Modal,
  Pressable,
  Dimensions,
} from 'react-native'
import { colors, fontSize, radius } from '@/styles/global'
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
              size={32}
              color={colors.orange}
            />
          </Pressable>
        )}
      </View>
      <Modal
        animationType='fade'
        statusBarTranslucent={true}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable style={styles.modalContainer} onPress={() => setModalVisible(false)}>
          <Pressable style={styles.modalView} onPress={(e) => e.stopPropagation()}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Como funciona!</Text>
              <Pressable 
                style={styles.closeButton} 
                onPress={() => setModalVisible(false)}
              >
                <MaterialCommunityIcons 
                  name="close" 
                  size={24} 
                  color={colors.black} 
                />
              </Pressable>
            </View>
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
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: fontSize.large,
    color: colors.white,
  },
  // Modal
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black50,
  },
  modalView: {
    width: width * 0.85,
    backgroundColor: colors.white,
    borderRadius: radius.medium,
    padding: 16,
  },
  // Modal Header
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 16,
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: fontSize.large,
    color: colors.black
  },
  closeButton: {
    backgroundColor: colors.orange,
    borderRadius: radius.small,
    padding: 4,
  },
  // Modal Body
  modalDescription: {
    fontSize: fontSize.small,
  },
})