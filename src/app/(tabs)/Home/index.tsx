import React from 'react'
import { 
  View, 
  Text,
  StyleSheet,
  Dimensions,
  Button,
  Alert,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { colors } from '@/styles/colors'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'expo-router';

const projects = [
  { 
    id: '1', 
    name: 'To-Do List', 
    route: '/(projects)/ToDoList' 
  },
  { 
    id: '2', 
    name: 'E-commerce', 
    route: '/(projects)/Ecommerce' 
  },
]

const { width, height } = Dimensions.get('window')

export default function Home(){
  const { setAuth, user } = useAuth()
  const router = useRouter()

  async function handleSignout(){
    const { error } = await supabase.auth.signOut()
    setAuth(null)
    
    if(error){
      Alert.alert('Error', 'Error ao sair da conta, tente mais tarde.')
      return
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.boxHeader}>
        <Text style={styles.text}>Home Page</Text>
        <Text>Olá, {user?.email}</Text>
      </View>
      <View style={styles.boxProjects}>
        <Button 
          title='Sair'
          onPress={handleSignout}
        />
      </View>
      <View style={styles.boxList}>
        <FlatList 
          data={projects}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.card} 
              onPress={() => router.push(item.route as any)}
            >
              <Text style={styles.itemsTitle}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  // Container
  container: {
    flex: 1,
    backgroundColor: colors.grayDark,
  },
  // Box Header
  boxHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    height: height * 0.2,
    width: width,
    padding: 16,
  },
  text: {
    color: colors.grayDark,
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Box Projects
  boxProjects: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.menta,
    height: height * 0.1,
    width: width,
    padding: 16,
  },
  // Box List
  boxList: {
    flex: 1,
    width: width,
    padding: 16,
  },
  card: {
    backgroundColor: '#333',
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
  },
  itemsTitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
})