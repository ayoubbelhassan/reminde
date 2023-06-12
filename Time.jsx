import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';


export default function Time() {


  const data=[
    {
      duration:90,
    },
    {
      duration:180,
    },
    {
      duration:270,
    },
    {
      duration:360,
    },
    {
      duration:450,
    },
    {
      duration:540,
    },
  ]




  const [CurrentDate, setCurrentDate] = useState(new Date())

  const hour = String(CurrentDate.getHours()).padStart(2, '0');
  const minute = String(CurrentDate.getMinutes()).padStart(2, '0');

    const addMinutes = (minutes) => {
      const newDate = new Date(CurrentDate.getTime());
      newDate.setMinutes(newDate.getMinutes() + minutes);
      const hour = String(newDate.getHours()).padStart(2, '0');
      const minute = String(newDate.getMinutes()).padStart(2, '0');
      return `${hour}:${minute}`;
    };


   

 
    const renderItem = ({ item }) => {
      return (
        <View style={styles.itemde}>
          <Text>{addMinutes(item.duration)}</Text>
        </View>
      );
    };



  return (
    <View style={styles.container}>
      <Text style={styles.textP}>{`${hour}:${minute}`}</Text>
      
      <FlatList
      data={data}
      renderItem={renderItem}
      numColumns={3}
      keyExtractor={(item) => item.id}
      />

      <StatusBar style="auto" />
    </View>
  );
}

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:50
  },
  textP:{
    paddingHorizontal:16,
    paddingVertical:8 ,  
    backgroundColor:'red',
    color:'#FFFFFF',
    marginVertical:32,
    fontWeight:'900'
  },
  itemde:{
    paddingHorizontal:16,
    paddingVertical:8,
    backgroundColor:'green',
    margin:16,
    borderRadius:4
  }
});
