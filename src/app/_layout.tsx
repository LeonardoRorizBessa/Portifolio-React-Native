import { router, Stack } from 'expo-router'
import { AuthProvider, useAuth } from '@/contexts/AuthContext'
import { useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function RootLayout() {
  return(
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  )
}

function MainLayout() {
  const { setAuth } = useAuth()

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if(session){
        setAuth(session.user)
        router.replace('/(tabs)/Home')
        return
      }

      setAuth(null)
      router.replace('/(auth)/Welcome')
    })
  }, [])

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='index' />
      <Stack.Screen name='(auth)/Welcome/index' />
      <Stack.Screen name='(auth)/SignIn/index' />
      <Stack.Screen name='(auth)/SignUp/index' />
    </Stack>
  )
}