import axios from 'axios';

const baseUrl = "https://pokeapi.co/api/v2"

class Services {
    static allPokes() {
        const allPokesPromise = axios({
            method:'GET',
            url:`${baseUrl}/pokemon?limit=4&offset=247`
        })
        return allPokesPromise;
    }

    static typePokes(selectType) {
        const typePokesPromise = axios({
            method: 'GET',
            url: `${baseUrl}/type/${selectType}`
        })
        return typePokesPromise;
    }

    static uniquePoke(selectPoke) {
        const uniquePokePromise = axios({
            method: 'GET',
            url: `${baseUrl}/pokemon/${selectPoke}`
        })
        return uniquePokePromise;
    }
}

export default Services;