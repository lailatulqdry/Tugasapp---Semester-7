import React, { useEffect, useState } from 'react';
import {ActivityIndicator, Text, View, StyleSheet, TouchableOpacity, ScrollView,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Jadwal() {
  const [dataPost, setDataPost] = useState([]);
  const [selectedDay, setSelectedDay] = useState('Senin');

  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.1.6:8000/api/jadwal');
      const data = await response.json();
      if (Array.isArray(data)) {
        setDataPost(data);
      } else if (data.data && Array.isArray(data.data)) {
        setDataPost(data.data);
      } else {
        console.error('Data yang diterima bukan array:', data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = dataPost.filter((post) => post.hari === selectedDay);

  return (
    <ScrollView style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.namaHari}>
        {['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'].map((date, index) => (
          <TouchableOpacity
          key={index}
          onPress={() => setSelectedDay(date)}
          style={[
            styles.HariContainer,
            date === selectedDay && styles.selectedHariContainer,
          ]}>
          <Text
            style={[
              styles.hariText,
              date === selectedDay && styles.selectedHariText,
            ]}>
            {date}
          </Text>
        </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Tampilan Jadwal Hari */}
      <View style={styles.JadwalContainer}>
        <Text style={styles.JadwalHeader}>Jadwal {selectedDay}</Text>
        {filteredData.length > 0 ? (
          filteredData.map((post, key) => (
            <View key={key} style={styles.JadwalCard}>
              <View style={styles.JadwalDetails}>
                <Text style={styles.JadwalHari}>{post.hari}</Text>
                <Text style={styles.JadwalRuangan}>Ruangan: {post.ruangan}</Text>
                <Text style={styles.JadwalRuangan}>
                  Waktu: {post.jam_mulai} - {post.jam_selesai}
                </Text>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.noDataText}>
            Tidak ada data jadwal untuk hari {selectedDay}.
          </Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 10,
  },
  namaHari: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  HariContainer: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  selectedHariContainer: {
    backgroundColor: 'dodgerblue',
  },
  hariText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  selectedHariText: {
    color: '#fff',
  },
  JadwalContainer: {
    paddingHorizontal: 20,
  },
  JadwalHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  JadwalCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  JadwalDetails: {
    marginLeft: 15,
    flex: 1,
  },
  JadwalHari: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  JadwalRuangan: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  noDataText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
});
