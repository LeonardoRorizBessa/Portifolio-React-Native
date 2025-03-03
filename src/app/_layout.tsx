import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='index' />
      <Stack.Screen name='SignIn/index' />
      <Stack.Screen name='SignUp/index' />
      <Stack.Screen name='(tabs)' />
    </Stack>
  )
}