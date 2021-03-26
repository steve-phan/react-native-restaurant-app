import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { StatusBar as ExpoStatusBar } from 'expo-status-bar'

import { RestaurantsScreen } from './src/features/restaurants/screens/restaurant.screen'

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',

  },
  search: {
    width: '90%',

  }
});
