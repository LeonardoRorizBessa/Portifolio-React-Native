import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='index' />
      <Stack.Screen name='SignIn/signIn' />
      <Stack.Screen name='SignUp/SignUp' />
      <Stack.Screen name='(tabs)/Home/home' />
    </Stack>
  )
}