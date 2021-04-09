import React, { createContext, useEffect, useState } from 'react'



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