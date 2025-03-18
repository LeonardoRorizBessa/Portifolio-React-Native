import React from 'react'
import { 
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Pressable,
} from 'react-native'
import { colors } from '@/styles/colors'
import { HeaderApps } from '@/components/HeaderApps/HeaderApps'
import { NotesCard } from '@/components/NotesCard/NotesCard'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const { width, height } = Dimensions.get('window')

const notes = [
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
  {
    id: '3',
    title: 'Titulo',
    description: 'Frase completa para descrição.',
  },
  {
    id: '4',
    title: 'Titulo',
    description: 'Frase completa para descrição.',
  },
  {
    id: '5',
    title: 'Titulo',
    description: 'Frase completa para descrição.',
  },
  {
    id: '6',
    title: 'Titulo',
    description: 'Frase completa para descrição.',
  },
  {
    id: '7',
    title: 'Titulo',
    description: 'Frase completa para descrição.',
  },
  {
    id: '8',
    title: 'Titulo',
    description: 'Frase completa para descrição.',
  },
  {
    id: '9',
    title: 'Titulo',
    description: 'Frase completa para descrição.',
  },
  {
    id: '10',
    title: 'Titulo',
    description: 'Frase completa para descrição.',
  },
  {
    id: '11',
    title: 'Titulo',
    description: 'Frase completa para descrição.',
  },
  {
    id: '12',
    title: 'Titulo',
    description: 'Frase completa para descrição.',
  },
]

export default function Notes() {
  return (
    <View style={styles.container}>
      <HeaderApps 
        title={'Notes App'}
        icon={true}
        description='Notes'
      />
      <View style={styles.boxApp}>
        <FlatList 
          data={notes}
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
        <Pressable style={styles.addNotes}>
          <MaterialCommunityIcons 
            name='plus'
            size={28}
            color={colors.black}
          />
        </Pressable>
      </View>
    </View>
  );
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
    borderRadius: 40,
    height: 60,
    width: 60,
    backgroundColor: colors.orange,
  },
});
