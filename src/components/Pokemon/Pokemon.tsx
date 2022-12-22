import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SimplePokemon} from '../../interfaces/interfaces';
import {FadeInImage} from '../FadeInImage/FadeInImage';
import pokemonStyles from './pokemonStyle';
import {useEffect} from 'react';
import ImageColors from 'react-native-image-colors';
import {IOSImageColors} from 'react-native-image-colors/lib/typescript/types';

interface PokemonProps {
    pokemon: SimplePokemon;
}
const Pokemon = ({pokemon}: PokemonProps) => {
    const [backgroundColor, setBackgroundColor] = useState('grey');

    useEffect(() => {
        ImageColors.getColors(pokemon.picture, {
            fallback: 'grey',
        }).then(colors => {
            colors.platform === 'android'
                ? setBackgroundColor(colors.dominant || 'grey')
                : setBackgroundColor(
                      (colors as IOSImageColors).background || 'grey',
                  );
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TouchableOpacity activeOpacity={0.8}>
            <View style={{...pokemonStyles.cardContainer, backgroundColor}}>
                <Text style={pokemonStyles.title}>{pokemon.name}</Text>
                <Text style={pokemonStyles.title}>#{pokemon.id}</Text>
                <View style={pokemonStyles.pokeballContainer}>
                    <Image
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

export default Pokemon;
