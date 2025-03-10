import React from 'react'
import { 
  View, 
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { colors } from '@/styles/colors'
import Logo from '@/assets/logo.png'
import User from '@/assets/user.png'
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
  const router = useRouter()

  return (
    <View style={styles.container}>
      <View style={styles.boxHeader}>
        <Image 
          source={Logo} 
          style={styles.logo} 
        />
        <Image 
          source={User} 
          style={styles.logo} 
        />
      </View>
      <View style={styles.boxWelcome}>
        <Text style={styles.welcomeText}>Olá, Leonardo</Text>
      </View>
      <View style={styles.boxProjects}>
        <FlatList 
          data={projects}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.card} 
              activeOpacity={0.8}
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
    width: width,
    height: height,
    padding: 16,
    backgroundColor: colors.black,
  },
  // Box Header
  boxHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 38,
    height: 38,
  },
  // Box Welcome
  boxWelcome: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 24,
  },
  welcomeText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Box Projects
  boxProjects: {
    flex: 1,
  },
  card: {
    backgroundColor: colors.white,
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
  },
  itemsTitle: {
    fontSize: 18,
    color: colors.black,
    textAlign: 'center',
    fontWeight: 'bold',
  },
})