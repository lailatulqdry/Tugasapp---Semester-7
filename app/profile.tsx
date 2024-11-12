import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/images/profile.jpg')} 
          style={styles.profileImage}
        />
        <Text style={styles.name}>Lailatul Qodriyah</Text>
        <Text style={styles.bio}>NIS</Text>
        <Button title="Edit Profile" onPress={() => alert('Edit Profile Button Clicked')} />
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
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
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
});

export default ProfileScreen;
