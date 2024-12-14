import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        {/* <Image
          source={require('../assets/images/profile.jpg')} 
          style={styles.profileImage}
        /> */}
        <Text style={styles.name}>Lailatul Qodriyah</Text>
        <Text style={styles.bio}>NIS</Text>
      </View>
      <View style={styles.profilBaru}>
      <View style={styles.container2}>
          <Ionicons name="create-outline" size={18} color="black" style={styles.icon}/>
          <Text style={styles.text}>Edit Profile</Text>
        </View>
        <View style={styles.container2}>
          <Ionicons name="lock-closed-outline" size={18} color="black" style={styles.icon}/>
          <Text style={styles.text}>Password</Text>
        </View>
        <View style={styles.container2}>
          <Ionicons name="construct-outline" size={18} color="black" style={styles.icon}/>
          <Text style={styles.text}>Setting</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
  },
  profileContainer: {
    alignItems: 'center',
    padding: 50,
    marginBottom: 5,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderRadius: 10,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  bio: {
    fontSize: 16,
    color: '#777',
    marginVertical: 10,
  },
  profilBaru: {
    backgroundColor: '#00c6ff',
    paddingLeft: 50,
    paddingTop: 20,
    borderRadius: 10,
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5,
  },
  icon: {
    marginRight: 20,
  },
});

export default ProfileScreen;
