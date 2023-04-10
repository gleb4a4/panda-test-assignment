import { defineStore } from 'pinia'
interface Coordinates {
    latitude: number,
    longitude: number,
    accuracy: number
}
interface State {
    options: object,
    myCoordinates: Coordinates
}
export const useGeolocationStore = defineStore('geolocation', {
    state: () => ({
        options: {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        },
        myCoordinates: {},
    } as State),
    getters: {
        isTheAreCoordinates: (state): boolean => Boolean(Object.keys(state.myCoordinates).length)
    },
    actions: {
        success(position: { coords: Coordinates; }) {
            this.myCoordinates = {...position.coords}
        },
        error(err: { code: any; message: any; }) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }
    }
})
