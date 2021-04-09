import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components';


const FavouritesButton = styled(TouchableOpacity)`
    position : absolute;
    top : 10px;
    right : 10px;
    z-index : 10;

`;

export const Favourites = () => {

    return (
        <FavouritesButton>
            <AntDesign name='heart' color='red' size={24} />
        </FavouritesButton>

    )
}



