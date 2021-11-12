import axios from 'axios';

const baseUrl = "https://pokeapi.co/api/v2"

class Services {
    static allPokes(limit, offset) {
        const allPokesPromise = axios({
            method:'GET',
            url:`${baseUrl}/pokemon?limit=${limit}&offset=${offset}`
        });

        return allPokesPromise;
    };

    static typePokes(selectType) {
        const typePokesPromise = axios({
            method: 'GET',
            url: `${baseUrl}/type/${selectType}`
        });

        return typePokesPromise;
    };

    static uniquePoke(selectPoke) {
        const uniquePokePromise = axios({
            method: 'GET',
            url: `${baseUrl}/pokemon/${selectPoke}`
        });

        return uniquePokePromise;
    };

    static pokemonTypes() {
        const typesPromise = axios({
            method: 'GET',
            url: `${baseUrl}/type`
        });

        return typesPromise;
    };
}

export default Services;