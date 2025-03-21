import React from 'react'
import { 
  Dimensions, 
  Pressable,
} from 'react-native'
import { Tabs } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { colors } from '@/styles/global'

const { height } = Dimensions.get('window')

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
      tabBarButton: (props) => (
        <Pressable
          {...props}
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.7 : 1,
            },
            props.style,
          ]}
        />
      ),
      tabBarIcon: ({ focused }) => {
        let iconName;
        let color = focused ? colors.orange : colors.white;

        if (route.name === 'Home/index') {
          iconName = 'home';
        } else if (route.name === 'Resume/index') {
          iconName = 'account';
        } else if (route.name === 'Settings/index') {
          iconName = 'cog';
        }

        return <MaterialCommunityIcons name={iconName as any} color={color} size={30} />;
      },
    })}>
      <Tabs.Screen name='Home/index' />
      <Tabs.Screen name='Resume/index' />
      <Tabs.Screen name='Settings/index' />
    </Tabs>
  )
}