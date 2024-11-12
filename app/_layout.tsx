// import { View, Text } from 'react-native'
// import React from 'react'
// import { Tabs } from 'expo-router'



// export default function _layout() {
//   return (
//     <Tabs>
//       <Tabs.Screen name="index" options={{ title: 'Home', headerShown: false }} />
//       <Tabs.Screen name="jadwal" options={{ title: 'Jadwal', headerShown: false }} />
//       <Tabs.Screen name="absensi" options={{ title: 'Absensi', headerShown: false }} />
//       <Tabs.Screen name="profile" options={{ title: 'Profile', headerShown: false }} />
//     </Tabs>
//   )
// }
















import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import TabBar from '../components/TabBar'
import Guru from '../components/navigation/Guru'


const _layout = () => {
  return (
    <Tabs 
    tabBar={props=> <TabBar {...props} />}
    screenOptions={
      {
        headerStyle: {
          backgroundColor: '#00c6ff',
        },
        headerRight: () => (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity>
            <Ionicons name="notifications" size={24} color="white" style={{marginRight: 16}} />
            </TouchableOpacity>
          </View>
        ),
        headerLeft: () => (
          <View 
          style={{
            flexDirection: 'row',
            alignItems: 'center', 
            marginLeft: 16,
            }}>
            <TouchableOpacity>
            <Ionicons name="menu" size={24} color="white" />
            </TouchableOpacity>
          </View>
        ),
        headerTitle : '',
        headerTransparent: false
      }
    }>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="jadwal" options={{ title: 'Jadwal' }} />
      <Tabs.Screen name="absensi" options={{ title: 'Absensi' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  )
}

export default _layout