import { mocks } from '../mock'
import camelize from 'camelize'

import { mockImages } from '../mock/index'

export const restaurantsRequest = (location: any) => {


    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        // const data = restaurantTransform(mock.results)

        if (mock) resolve(mock.results)

        reject("Not found")
    })
}


export const restaurantTransform = (result: any) => {

    const mappedResult = result.map((restaurant: any) => {
        const photos = mockImages.map(photo => {
            return mockImages[Math.floor(Math.random() * (mockImages.length))]
        })
        const { geometry, icon, name, vicinity, rating } = restaurant

        return {
            photos,
            geometry,
            icon,
            name,
            rating,
            address: vicinity,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status !== 'OPERATIONAL'

        }
    })
    return camelize(mappedResult)

}