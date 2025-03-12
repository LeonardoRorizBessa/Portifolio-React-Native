import React from 'react'
import { 
  View, 
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  Pressable,
} from 'react-native'
import { colors } from '@/styles/colors'
import Logo from '@/assets/logo.png'
import User from '@/assets/user.png'
import { useAuth } from '@/contexts/AuthContext'
import { Card } from '@/components/Card/Card'
import { useRouter } from 'expo-router'
import ToDoListImage from '@/assets/list.png'
import EcommerceImage from '@/assets/commerce.png'
import CookingImage from '@/assets/cooking.png'
import NotesImage from '@/assets/notes.png'
import WeatherImage from '@/assets/weather.png'
import TimerImage from '@/assets/timer.png'

const projects = [
  { 
    id: '1', 
    name: 'Cooking', 
    route: '/(projects)/Cooking',
    image: CookingImage,
  },
  { 
    id: '2', 
    name: 'Timer', 
    route: '/(projects)/Timer',
    image: TimerImage,
  },
  { 
    id: '3', 
    name: 'Notes', 
    route: '/(projects)/Notes',
    image: NotesImage,
  },
  { 
    id: '4', 
    name: 'Weather', 
    route: '/(projects)/Weather',
    image: WeatherImage,
  },
  { 
    id: '5', 
    name: 'To-Do List', 
    route: '/(projects)/ToDoList',
    image: ToDoListImage,
  },
  { 
    id: '6', 
    name: 'E-commerce', 
    route: '/(projects)/Ecommerce',
    image: EcommerceImage,
  },
]

const { width, height } = Dimensions.get('window')

export default function Home() {
  const { user } = useAuth()
  const router = useRouter()

  return (
    <View style={styles.container}>
      <View style={styles.boxHeader}>
        <Image 
          source={Logo} 
          style={styles.logo} 
        />
        <Pressable onPress={() => router.push('/(tabs)/Settings')}>
          <Image 
            source={User} 
            style={styles.logo} 
          />
        </Pressable>
      </View>

      <View style={styles.boxWelcome}>
        <Text style={styles.welcomeText}>Olá, {user?.user_metadata?.name}</Text>
      </View>

      <View style={styles.boxProjects}>
        <FlatList 
          data={projects}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Card
              name={item.name} 
              route={item.route} 
              image={item.image} 
            />
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
})