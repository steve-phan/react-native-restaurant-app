import React, { useEffect, useState, createContext, useMemo, ReactComponentElement } from "react"


import { restaurantTransform, restaurantsRequest } from './restaurants.services'

type restaurantProp = {
    restaurants: any[],
    isLoading: boolean,
    error: string
}

export const RestaurantContext: any = createContext(undefined)

export const RestaurantContextProvider: React.FC = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const retrieveRestaurants = () => {
        setIsLoading(true)
        setTimeout(() => {
            restaurantsRequest().then(restaurantTransform).then((data) => {
                setIsLoading(false)
                setRestaurants(data)
            }).catch(err => {
                setIsLoading(false)
                setError(err)
            })

        }, 2000)

    }
    useEffect(() => {
        retrieveRestaurants()
    }, [])


    return (<RestaurantContext.Provider
        value={{
            restaurants,
            isLoading,
            error
        }}>
        {children}</RestaurantContext.Provider>)
}