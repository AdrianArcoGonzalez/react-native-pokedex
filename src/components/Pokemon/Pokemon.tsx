import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SimplePokemon} from '../../interfaces/interfaces';
import {FadeInImage} from '../FadeInImage/FadeInImage';
import pokemonStyles from './pokemonStyle';

import getPicturecolor from '../../utils/getPictureColor';

interface PokemonProps {
    pokemon: SimplePokemon;
}
export const Pokemon = ({pokemon}: PokemonProps) => {
    const [backgroundColor, setBackgroundColor] = useState('grey');

    useEffect(() => {
        (async () => {
            const pokemonColor = await getPicturecolor(pokemon.picture);
            if (pokemonColor.platform === 'android') {
                setBackgroundColor(pokemonColor.dominant || 'grey');
            } else if (pokemonColor.platform === 'ios') {
                setBackgroundColor(pokemonColor.background);
            } else {
                setBackgroundColor('grey');
            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TouchableOpacity activeOpacity={0.8}>
            <View style={{...pokemonStyles.cardContainer, backgroundColor}}>
                <Text data-testID="pokemonTitle" style={pokemonStyles.title}>
                    {pokemon.name}
                </Text>
                <Text data-testID="pokemonId" style={pokemonStyles.title}>
                    #{pokemon.id}
                </Text>
                <View style={pokemonStyles.pokeballContainer}>
                    <Image
                        data-testID="imagePokemon"
                        source={require('../../assets/pokebola-blanca.png')}
                        style={pokemonStyles.pokeball}
                    />
                </View>
                <FadeInImage
                    uri={pokemon.picture}
                    style={pokemonStyles.pokemonImage}
                />
            </View>
        </TouchableOpacity>
    );
};
