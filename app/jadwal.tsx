import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

const Jadwal = () => {
  const [selectedDate, setSelectedDate] = useState('Mon');

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <View style={styles.container}>
    <View style={styles.cardContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateRow}>
        <TouchableOpacity
          onPress={() => handleDateSelect('Mon')}
          style={[styles.dateContainer, selectedDate === 'Mon' && styles.selectedTanggal]}
        >
          <Text style={[styles.hari, selectedDate === 'Mon' && { color: 'black' }]}>Mon</Text>
        </TouchableOpacity>
        {['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((date, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleDateSelect(date)}
            style={[styles.dateContainer, selectedDate === date && styles.selectedTanggal]}
          >
            <Text style={[styles.day, selectedDate === date && { color: 'black' }]}>{date.split(' ')[0]}</Text>
            <Text style={[styles.dayText, selectedDate === date && { color: 'black' }]}>{date.split(' ')[1]}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
    <View style={styles.baru}>
        <Text style={styles.baruJudul}>Mata Pelajaran</Text>
        <Text style={styles.barulagi}>
          {selectedDate === 'Mon'}
        </Text>
      </View>
      <View style={styles.baru}>
        <Text style={styles.baruJudul}>Mata Pelajaran</Text>
        <Text style={styles.barulagi}>
          {selectedDate === 'Mon'}
        </Text>
      </View>
      <View style={styles.baru}>
        <Text style={styles.baruJudul}>Mata Pelajaran</Text>
        <Text style={styles.barulagi}>
          {selectedDate === 'Mon'}
        </Text>
      </View>
      <View style={styles.baru}>
        <Text style={styles.baruJudul}>Mata Pelajaran</Text>
        <Text style={styles.barulagi}>
          {selectedDate === 'Mon'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  cardContainer: {
    width: width * 1, 
    height: 100, 
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignSelf: 'center',
    marginTop: 20,
    marginLeft: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 3,
  },
  dateRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  dateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 5, 
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#f2f2ff',
    marginHorizontal: 5,
  },
  selectedTanggal: {
    backgroundColor: 'dodgerblue',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  day: {
    fontSize: 18,
    color: '#333',
  },
  dayText: {
    fontSize: 14,
    color: '#333',
  },
  hari: {
    fontSize: 18,
    color: 'black',
  },
  baru: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 3,
    marginHorizontal: 20,
  },
  baruJudul: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  barulagi: {
    fontSize: 16,
    color: '#555',
  },
});

export default Jadwal;
