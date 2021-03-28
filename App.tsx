import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { ThemeProvider } from "styled-components";
import { theme } from './src/infrastructure/theme'

// Fonts 
import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';


import { StatusBar as ExpoStatusBar } from 'expo-status-bar'

import { RestaurantsScreen } from './src/features/restaurants/screens/restaurant.screen'



export default function App() {
  const [latoLoaded] = useLato({
    Lato_400Regular,
  })
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  })
  if (!latoLoaded || !oswaldLoaded) {
    return null
  }



  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
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
