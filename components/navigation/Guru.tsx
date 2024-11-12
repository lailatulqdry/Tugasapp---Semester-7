import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';


export default function Index({ navigation }) {
  const [dataSiswa, setDataSiswa] = useState(null);

  const fetchData = async () => {
      try {
          const response = await fetch('http://192.168.1.56:8000/api/siswa');
          const data = await response.json();
          setDataSiswa(data.data);
          console.log(data.data);
      } catch (error) {
          console.error(error);
      }
  };

  useEffect(() => {
      fetchData();
  }, []);

  return (
      <View>
        {/* <Text>{dataGuru &&dataGuru.nama}</Text> */}
        {dataSiswa && data.map((siswa, key) => {
          return (
            <Text key={key}>
              {siswa.nama}, 
              {siswa.nis},
              {siswa.jurusan},
              {siswa.alamat},
            </Text>
          )
        })}
      </View>
  );
}