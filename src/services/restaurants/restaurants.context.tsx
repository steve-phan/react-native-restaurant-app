import React, { useEffect, useState, createContext, useMemo, ReactComponentElement } from "react"


import { restaurantTransform, restaurantsRequest } from './restaurants.services'

import { LocationContext } from "../location/location.context";

type restaurantProp = {
    restaurants: any[],
    isLoading: boolean,
    error: string
}

export const RestaurantContext: any = React.createContext(undefined)

export const RestaurantContextProvider: React.FC = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const { location } = React.useContext(LocationContext);
    const retrieveRestaurants = (loc: any) => {
        // Reset Restaurant...
        setRestaurants([])
        setIsLoading(true)
        setTimeout(() => {
            restaurantsRequest(loc).then(restaurantTransform).then((data) => {
                setIsLoading(false)
                setRestaurants(data)
            }).catch(err => {
                setIsLoading(false)
                setError(err)
            })

        }, 2000)

    }
    useEffect(() => {
        if (location) {
            const locationString = `${location.lat},${location.lng}`;
            retrieveRestaurants(locationString);
        }
    }, [location]);


    return (<RestaurantContext.Provider
        value={{
            restaurants,
            isLoading,
            error
        }}>
        {children}</RestaurantContext.Provider>)
}