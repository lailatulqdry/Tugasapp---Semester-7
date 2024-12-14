

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import TabBar from '../components/TabBar'

const _layout = () => {
  return (
    <Tabs 
    tabBar={props => <TabBar {...props} />}
    screenOptions={{
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
        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 16}}>
          <TouchableOpacity>
            <Ionicons name="menu" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ),
      headerTitle: '',
      headerTransparent: false
    }}>
    <Tabs.Screen name="index" options={{ title: 'Home' }} />
    <Tabs.Screen name="jadwal" options={{ title: 'Jadwal' }} />
    <Tabs.Screen name="absensi" options={{ title: 'Absensi' }} />
    <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
  </Tabs>
  
  )
}

export default _layout

// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { Tabs } from 'expo-router'
// import { Ionicons } from '@expo/vector-icons';
// import TabBar from '../components/TabBar'
// import Index from './index';
// import Siswa from './absensi';
// import Absensi from './absensi';

// const Tab = createBottomTabNavigator();
// function _layout() {
//   return (
//     <NavigationContainer>
//     <Tab.Navigator>
//       <Tab.Screen name='Home' component={Index} />
//       <Tab.Screen name='Absensi' component={Absensi}/>
//     </Tab.Navigator>
//     </NavigationContainer>
//   );
// }


// const styles = StyleSheet.create({})