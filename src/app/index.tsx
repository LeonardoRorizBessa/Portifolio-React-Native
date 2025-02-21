import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Logo from '../assets/react.png'
import { Link } from 'expo-router'

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.viewLogo}>
        <Image 
          source={Logo}
          style={styles.logo}
          resizeMode='contain'
        />
        <Text style={styles.titleLogo}>Welcome back</Text>
      </View>

      <Link href='/(tabs)/Home/home' asChild>
        <TouchableOpacity activeOpacity={0.7} style={styles.button}>
          <Text style={styles.title}>
            Entrar
          </Text>
        </TouchableOpacity>
      </Link>
      <Link href={{ pathname: '/SignIn/signIn', params: { name: 'Notebook', id: 11 } }} asChild>
        <TouchableOpacity activeOpacity={0.7} style={styles.button}>
          <Text style={styles.title}>
            Sign In
          </Text>
        </TouchableOpacity>
      </Link>
      <Link href={{ pathname: '/SignUp/signUp', params: { name: 'Notebook', id: 11 } }} asChild>
        <TouchableOpacity activeOpacity={0.7} style={styles.button}>
          <Text style={styles.title}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  // Container
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
    gap: 20,
  },
  // View logo
  viewLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
  },
  logo: {
    width: 80,
    height: 80,
  },
  titleLogo: {
    color: '#f1f1f1',
    fontSize: 24,
  },
  title: {
    color: '#f1f1f1',
    fontSize: 24,
  },
  button: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
  parametro: {
    color: 'white',
  },
})