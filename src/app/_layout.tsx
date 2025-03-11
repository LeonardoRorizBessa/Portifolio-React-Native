import React, { useEffect } from 'react'
import { 
  StatusBar,
} from 'react-native'
import { router, Stack } from 'expo-router'
import { AuthProvider, useAuth } from '@/contexts/AuthContext'
import { supabase } from '@/lib/supabase'
import { colors } from '@/styles/colors'

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
    <>
      <StatusBar 
        barStyle="light-content"
        backgroundColor={colors.black}
      />
      <Stack screenOptions={{ headerShown: false, gestureEnabled: false }}>
        <Stack.Screen name='index' />
        <Stack.Screen name='(auth)/Welcome/index' />
        <Stack.Screen name='(auth)/SignIn/index' />
        <Stack.Screen name='(auth)/SignUp/index' />
      </Stack>
    </>
  )
}