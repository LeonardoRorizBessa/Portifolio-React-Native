import React from 'react'
import { Dimensions } from 'react-native'
import { Tabs } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { colors } from '@/styles/colors'

const { width, height } = Dimensions.get('window')

export default function TabsLayout() {
  return (
    <Tabs screenOptions={({ route }) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: colors.black,
        height: height * 0.07,
        borderColor: colors.black,
        shadowColor: colors.white,
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 0.9,
        shadowRadius: 10,
        elevation: 10,
      },
      tabBarIconStyle: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      tabBarIcon: ({ focused }) => {
        let iconName;
        let color = focused ? colors.orange : colors.white;

        if (route.name === 'Home/index') {
          iconName = 'home';
        } else if (route.name === 'Settings/index') {
          iconName = 'cog';
        }

        return <MaterialCommunityIcons name={iconName as any} color={color} size={30} />;
      },
    })}>
      <Tabs.Screen name='Home/index' />
      <Tabs.Screen name='Settings/index' />
    </Tabs>
  )
}