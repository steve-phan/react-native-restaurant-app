import { mocks } from './mock'
import camelize from 'camelize'
export const restaurantsRequest = (location = '41.878113,-87.629799') => {


    return new Promise((resolve, reject) => {
        const mock = mocks[location];

        console.log(restaurantTransform(mock.results))
        if (mock) resolve(mock)

        reject("Not found")
    })
}


export const restaurantTransform = (result: any) => {

    const mappedResult = result.map((restaurant: any) => {
        return {
            ...restaurant,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status !== 'OPERATIONAL'

        }
    })
    return camelize(mappedResult)

}