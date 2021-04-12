import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";


export const FavouritesContext = createContext<any>(undefined);

export const FavouritesContextProvider = ({ children }: any) => {
    const [favourites, setFavourites]: any = useState([]);
    const add = (restaurant: any) => {
        setFavourites([...favourites, restaurant])
    }
    const remove = (restaurant: any) => {
        const removedFavourites = favourites.filter((item: any) => item.placeId !== restaurant.placeId)

        setFavourites(removedFavourites)
    }
    const saveFavourites = async (value: any) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem("@favourites", jsonValue);
        } catch (e) {
            console.log("error storing", e);
        }
    };

    const loadFavourites = async () => {
        try {
            const value = await AsyncStorage.getItem("@favourites");
            if (value !== null) {
                setFavourites(JSON.parse(value));
            }
        } catch (e) {
            console.log("error loading", e);
        }
    };
    useEffect(() => {
        loadFavourites();
    }, []);

    useEffect(() => {
        saveFavourites(favourites);
    }, [favourites]);

    return (
        <FavouritesContext.Provider
            value={{
                favourites,
                addToFavourites: add,
                removeFromFavourites: remove,

            }}
        >
            {children}
        </FavouritesContext.Provider>
    )




}