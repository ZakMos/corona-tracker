import axios from 'axios';


const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
    try {
        const {data: { confirmed, recoverd, deathes, lastUpdate} } = await axios.get(url);
        return { confirmed, recoverd, deathes, lastUpdate};
    }
    catch (error) {

    }
}