import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper'

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container} >
        <View style={styles.search} >
          <Searchbar value="Hello" />
        </View>

      </SafeAreaView>
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
