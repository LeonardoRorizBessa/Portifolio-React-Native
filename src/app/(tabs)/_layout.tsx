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
        backgroundColor: colors.grayDark,
        height: height * 0.07,
        borderColor: colors.grayDark,
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
              color={colors.menta} 
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
              color={colors.menta} 
              size={30}
            />
          ),
        }} 
      />
    </Tabs>
  )
}