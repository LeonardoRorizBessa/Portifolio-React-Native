import { Tabs } from 'expo-router'

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name='Home/index' options={{ title: 'Home' }} />
      <Tabs.Screen name='Settings/index' options={{ title: 'Settings' }} />
    </Tabs>
  )
}