import React from 'react'
import { Text, View } from 'react-native'

import styled from 'styled-components/native'

import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

export const MapCallOut = ({ restaurant }: any) => {
    const { photos, name } = restaurant

    return (

        <CompactRestaurantInfo isMap restaurant={restaurant} />

    )
}