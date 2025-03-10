import React from 'react'
import { Dimensions } from 'react-native'
import { Tabs } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { colors } from '@/styles/colors'

const { width, height } = Dimensions.get('window')


export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: colors.black,
        height: height * 0.07,
        borderColor: colors.black,
        shadowColor: colors.white,
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10,
      },
      tabBarIconStyle: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    }}>
      <Tabs.Screen 
        name='Home/index' 
        options={{ 
          tabBarIcon: () => (
            <MaterialCommunityIcons 
              name="home" 
              color={colors.orange} 
              size={30} 
            />
          ),
        }} 
      />
      <Tabs.Screen 
        name='Settings/index' 
        options={{ 
          tabBarIcon: () => (
            <MaterialCommunityIcons 
              name="cog" 
              color={colors.orange} 
              size={30}
            />
          ),
        }} 
      />
    </Tabs>
  )
}