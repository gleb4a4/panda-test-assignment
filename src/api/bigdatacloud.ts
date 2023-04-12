import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.bigdatacloud.net'
});

async function getCurrentPosition(latitude: number, longitude: number) {
    try {
        const data = {
            latitude,
            longitude
        }
        const params = new URLSearchParams(data)
      return await instance.get('/data/reverse-geocode-client', { params })
    }catch (error) {
        console.error(error);
    }
}

export { getCurrentPosition }

