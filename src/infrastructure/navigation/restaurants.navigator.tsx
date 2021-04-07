import React from 'react';
import { Text } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';

import { RestaurantsScreen } from '../../features/restaurants/screens/restaurant.screen';

const RestaurantStack = createStackNavigator()

export const RestaurantsNavigator = () => {

    return (
        <RestaurantStack.Navigator >
            <RestaurantStack.Screen
                name="Restaurants"
                component={RestaurantsScreen}
            />
            <RestaurantStack.Screen
                name="RestaurantDetails"
                component={() => <Text>Hello from Details</Text>}
            />
        </RestaurantStack.Navigator>
    )
}
