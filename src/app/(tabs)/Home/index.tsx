import React from 'react'
import { 
  View, 
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native'
import { colors } from '@/styles/colors'
import Logo from '@/assets/logo.png'
import User from '@/assets/user.png'
import { useAuth } from '@/contexts/AuthContext'
import { Card } from '@/components/Card/Card'
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
        <Text style={styles.welcomeText}>Hello, {user?.user_metadata?.name}</Text>
      </View>

      <View style={styles.boxProjects}>
        <FlatList 
          data={projects}
          keyExtractor={(item) => item.id}
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