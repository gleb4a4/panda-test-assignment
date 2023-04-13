import { defineStore } from 'pinia'
import {getCurrentPosition} from "@/api/bigdatacloud";

interface Coordinates {
    latitude: number,
    longitude: number,
    accuracy: number
}
interface State {
    options: object,
    myCoordinates: Coordinates,
    city: string
}
export const useGeolocationStore = defineStore('geolocation', {
    state: () => ({
        options: {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        },
        myCoordinates: {},
        city: '',
    } as State),
    getters: {
        isTheAreCoordinates: (state): boolean => Boolean(Object.keys(state.myCoordinates).length)
    },
    actions: {
        async success(position: { coords: Coordinates; }) {
            this.myCoordinates = {...position.coords}
            const { data } = await getCurrentPosition(position.coords.latitude.toString(), position.coords.longitude.toString())
            this.city = data.city;
        },
        error(err: { code: any; message: any; }) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        },
    }
})
