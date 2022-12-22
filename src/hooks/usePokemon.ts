import {useState, useCallback} from 'react';
import {FullPokemon} from '../interfaces/interfaces';
import pokemonApi from '../Api/pokemonsApi';

const url = 'https://pokeapi.co/api/v2/pokemon/';

const usePokemon = () => {
    const [fullPokemon, setfullPokemon] = useState<FullPokemon>(
        {} as FullPokemon,
    );

    const getPokemon = useCallback(async (id: string) => {
        const response = await pokemonApi.get<FullPokemon>(url + id);

        setfullPokemon(response.data);
    }, []);

    return {getPokemon, fullPokemon};
};

export default usePokemon;
