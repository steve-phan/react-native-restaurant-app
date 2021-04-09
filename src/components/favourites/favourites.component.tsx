import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components';

import { FavouritesContext } from '../../services/favourites/favourites.context'


const FavouritesButton = styled(TouchableOpacity)`
    position : absolute;
    top : 10px;
    right : 10px;
    z-index : 10;

`;

export const Favourites = ({ restaurant }: any) => {
    const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouritesContext)
    const isFavourites = favourites.find((favourite: any) => favourite.placeId === restaurant.placeId)
    return (
        <FavouritesButton
            onPress={() => {
                !isFavourites ?
                    addToFavourites(restaurant) :
                    removeFromFavourites(restaurant)
            }}

        >
            <AntDesign name={isFavourites ? "heart" : 'hearto'} color={isFavourites ? "red" : 'white'} size={24} />
        </FavouritesButton>

    )
};



