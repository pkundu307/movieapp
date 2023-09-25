import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDA2YTBlMDI1MWYxYmE4NGM2MGYwZmVmYTUxOWNmMyIsInN1YiI6IjYyZDdlZDU3MTI4M2U5MDA0ZTEzZGE5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.exnckFcZwPcbGQX4cQbSkbFaxDqVJpPiZ4c8pZxTznI';

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
