import {useRef, useState, useCallback} from 'react';
import pokemonApi from '../Api/pokemonsApi';
import {PokemonResponse, Result, SimplePokemon} from '../interfaces/interfaces';

const usePokemonPaginated = () => {
    const pageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');
    const [simplePokemons, setSimplePokemons] = useState<SimplePokemon[]>([]);

    const mapPokemons = useCallback(
        (pokemonList: Result[]) => {
            const newPokemonList: SimplePokemon[] = pokemonList.map(
                ({name, url}) => {
                    const fullUrl = url.split('/');

                    const id = fullUrl[fullUrl.length - 2];

                    const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
                    return {id, picture, name};
                },
            );

            setSimplePokemons([...simplePokemons, ...newPokemonList]);
        },
        [simplePokemons],
    );

    const loadPokemons = useCallback(async () => {
        try {
            const response = await pokemonApi.get<PokemonResponse>(
                pageUrl.current,
            );
            pageUrl.current = response.data.next;
            mapPokemons(response.data.results);
        } catch (error) {
            console.log(error);
        }
    }, [mapPokemons]);

    return {simplePokemons, loadPokemons};
};

export default usePokemonPaginated;
