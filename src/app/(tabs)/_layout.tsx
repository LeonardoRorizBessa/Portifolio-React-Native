import { Tabs } from 'expo-router'

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name='Home' />
      <Tabs.Screen name='Settings' />
    </Tabs>
  )
}