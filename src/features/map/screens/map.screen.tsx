import React, { useEffect, useState, useContext } from 'react'
import { Text } from 'react-native'

import MapView, { Marker, Callout } from "react-native-maps";
import styled from "styled-components/native";

import { LocationContext } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";

import { Search } from "../components/search.component";

import { MapCallOut } from '../components/callout.component'

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
  z-index: 2019;
  position : absolute;
`;

const CallOutContainer = styled(Callout)`
   position: absolute;
   z-index : 2030;

`;

export const MapScreen = ({ navigation }: any) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant: any) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}

            >
              <CallOutContainer onPress={() => navigation.navigate("RestaurantDetails", { restaurant })} >
                <MapCallOut restaurant={restaurant} />
              </CallOutContainer>

            </Marker>
          );
        })}
      </Map>
    </>
  );
};