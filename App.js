import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [price, setPrice] = useState('Click button to check');


  function checkPrice() {
      let btcUrl = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';
      fetch(btcUrl)
        .then((response) => response.json())
        .then((responseJson) => {
            setPrice(responseJson.bpi.USD.rate);
      })
      .catch((error) => {
          console.error(error);
      });
  }

  return (
    <View style={styles.container}>
      <Text>BTC price: {price}</Text>
      <Button title= "Check BTC price" onPress={() => checkPrice()}/>
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
  },
});
