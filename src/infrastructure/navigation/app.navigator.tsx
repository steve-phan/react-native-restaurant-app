import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

// import { RestaurantsScreen } from '../../features/restaurants/screens/restaurant.screen';

import { SafeArea } from '../../components/utility/safe-area.component'

// Fonts 
import {
    useFonts as useLato,
    Lato_400Regular,
} from '@expo-google-fonts/lato';
import {
    useFonts as useOswald,
    Oswald_400Regular,
} from '@expo-google-fonts/oswald';

// Tab Navigation 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RestaurantsNavigator } from './restaurants.navigator'

import { MapScreen } from '../../features/map/screens/map.screen'

const Tab = createBottomTabNavigator();

const Settings = () => {
    return (
        <SafeArea>
            <Text>
                Hello from Settings
  </Text>
        </SafeArea>)
}


export const AppNavigator = () => {

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
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => {
                    return ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName: any;

                            if (route.name === 'Map') {
                                return <Feather name="map-pin" size={size} color={color} />
                            }
                            else if (route.name === 'Settings') {
                                iconName = 'settings-outline';
                            } else if (route.name === 'Restaurant') {
                                iconName = 'restaurant-outline'
                            }

                            // You can return any component that you like here!
                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                    })
                }}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name='Restaurant' component={RestaurantsNavigator} />
                <Tab.Screen name='Map' component={MapScreen} />
                <Tab.Screen name='Settings' component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}