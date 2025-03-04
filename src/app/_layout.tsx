import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='index' />
      <Stack.Screen name='(auth)/SignIn/index' />
      <Stack.Screen name='(auth)/SignUp/index' />
    </Stack>
  )
}