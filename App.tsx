import React from 'react';
import { ThemeProvider } from "styled-components";
import { theme } from './src/infrastructure/theme'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestaurantContextProvider } from './src/services/restaurants/restaurants.context'
import { LocationContextProvider } from './src/services/location/location.context'
import { FavouritesContextProvider } from './src/services/favourites/favourites.context'
import { Navigation } from './src/infrastructure/navigation'


export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantContextProvider >
              <Navigation />
              <ExpoStatusBar style='auto' />
            </RestaurantContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
    </>
  );
}
