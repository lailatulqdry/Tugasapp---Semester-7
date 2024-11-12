import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window');  
export default function Index() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#00c6ff', '#0072ff']}
        style={styles.BackgroundAtas}
      >
        <View style={styles.nama}>
          <Text style={styles.Text1}>Selamat Datang</Text>
          <Text style={styles.Text2}>LAILATUL QODRIYAH</Text>
        </View>
      </LinearGradient>
      
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card}>
        <Ionicons name="calendar" size={30} color="#0088cc" />
          <Text style={styles.cardText}>Jadwal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="newspaper-outline" size={30} color="#0088cc" />
          <Text style={styles.cardText}>Mata Pelajaran</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="man-outline" size={30} color="#0088cc" />
          <Text style={styles.cardText}>Guru</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="people-circle-outline" size={30} color="#0088cc" />
          <Text style={styles.cardText}>Daftar Kelas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
  },
  BackgroundAtas: {
    width: '100%',  
    height: height / 4,
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  nama: {
    alignItems: 'flex-start', 
    paddingLeft: 20, 
  },
  Text1: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  Text2: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  card: {
    alignItems: 'center',
    width: width / 5,
  },
  cardText: {
    marginTop: 5,
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
});
