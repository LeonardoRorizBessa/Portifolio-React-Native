import React, { useState } from 'react'
import { 
  View,
  Text,
  Modal,
  StyleSheet,
  Dimensions,
  FlatList,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { colors, fontSize, radius } from '@/styles/global'
import { HeaderApps } from '@/components/HeaderApps/HeaderApps'
import { NotesCard } from '@/components/NotesCard/NotesCard'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const { width, height } = Dimensions.get('window')

const initialData = [
  {
    id: '1',
    title: 'Titulo',
    description: 'Frase completa para descrição.',
  },
  {
    id: '2',
    title: 'Titulo',
    description: 'Frase completa para descrição.',
  },
]

export default function Notes() {
  const [modalVisible, setModalVisible] = useState(false)
  const [data, setData] = useState(initialData)
  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')

  const handleAddNotes = () => {
    setModalVisible(true)
  }

  const handleCreateNote = () => {
    if (newTitle.trim() && newDescription.trim()) {
      const newNote = {
        id: (data.length + 1).toString(),
        title: newTitle,
        description: newDescription,
      }
      setData([...data, newNote])
      setNewTitle('')
      setNewDescription('')
      setModalVisible(false)
    }
  }

  return (
    <View style={styles.container}>
      <HeaderApps 
        title={'Notes App'}
        icon={true}
        description='Notes'
      />
      <View style={styles.boxApp}>
        <FlatList 
          data={data}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.row}
          renderItem={({ item }) =>(
            <NotesCard
              title={item.title}
              description={item.description}
            />
          )}
        />
        <Pressable 
          style={styles.addNotes}
          onPress={handleAddNotes}
        >
          <MaterialCommunityIcons 
            name='plus'
            size={28}
            color={colors.black}
          />
        </Pressable>
      </View>
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
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>NOVA NOTA</Text>
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
            <TextInput
              style={styles.input}
              placeholder="Titulo"
              placeholderTextColor={colors.darkGray}
              value={newTitle}
              onChangeText={setNewTitle}
            />
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Descrição"
              placeholderTextColor={colors.darkGray}
              value={newDescription}
              onChangeText={setNewDescription}
              multiline
            />
            <TouchableOpacity 
              style={styles.createButton} 
              activeOpacity={0.8}
              onPress={handleCreateNote}
            >
              <Text style={styles.createButtonText}>Criar</Text>
            </TouchableOpacity>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  // Container
  container: {
    flex: 1,
    width: width,
    height: height,
    paddingTop: 16,
    paddingHorizontal: 16,
    gap: 16,
    backgroundColor: colors.black,
  },
  // Box App
  boxApp: {
    flex: 1,
    position: 'relative',
  },
  row: {
    justifyContent: 'center',
  },
  addNotes: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 16,
    right: 8,
    borderRadius: radius.xxl,
    height: 60,
    width: 60,
    backgroundColor: colors.orange,
  },
  // Modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black50,
  },
  modalView: {
    width: width * 0.85,
    backgroundColor: colors.white,
    borderRadius: radius.medium,
    padding: 16,
    alignItems: 'center',
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
    fontSize: fontSize.large,
    fontWeight: 'bold',
    color: colors.black
  },
  closeButton: {
    backgroundColor: colors.orange,
    borderRadius: radius.small,
    padding: 4,
  },
  // Modal Body
  input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderColor: colors.darkGray,
    marginBottom: 16,
    fontSize: fontSize.small,
    color: colors.black,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  // Modal Button
  createButton: {
    marginTop: 16,
    backgroundColor: colors.orange,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: radius.xxs,
  },
  createButtonText: {
    color: colors.black,
    fontWeight: 'bold',
  },
})