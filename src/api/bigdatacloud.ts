import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.bigdatacloud.net'
});

async function getCurrentPosition(latitude: string, longitude: string) {
    try {
        const params = new URLSearchParams({
            latitude,
            longitude
        })
        const data = await instance.get('/data/reverse-geocode-client', { params })
        return Promise.resolve(data)
    }catch (error) {
        return Promise.reject(error)
    }
}

export { getCurrentPosition }

