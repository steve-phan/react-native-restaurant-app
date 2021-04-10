import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Spacer } from '../spacer/spacer.component';
import { CompactRestaurantInfo } from '../restaurant/compact-restaurant-info.component';
import { TextCustom } from '../typography/text.component';

const FavouritesWrapper = styled.View`
  padding: 10px;
`;
export const FavouritesBar = ({ favourites, onNavigate }: any) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer variant='left.large'>
        <TextCustom variant='caption'>Favourites</TextCustom>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant: any) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position='left' size='medium'>
              <TouchableOpacity
                onPress={() => {
                  onNavigate.navigate('RestaurantDetails', {
                    restaurant,
                  })
                }
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
