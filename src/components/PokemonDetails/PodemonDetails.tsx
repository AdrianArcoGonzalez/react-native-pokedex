/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {FullPokemon} from '../../interfaces/interfaces';
import {FadeInImage} from '../FadeInImage/FadeInImage';

interface PokemonDetailsProps {
    pokemon: FullPokemon;
}

const PokemonDetails = ({pokemon}: PokemonDetailsProps): JSX.Element => {
    return (
        <ScrollView
            style={{...StyleSheet.absoluteFillObject}}
            showsVerticalScrollIndicator={false}>
            <View style={detailsStyle.detailsContainer}>
                <Text style={detailsStyle.title}>Tipos</Text>

                {pokemon.types.map(({type}) => (
                    <Text key={type.name} style={detailsStyle.info}>
                        {type.name}
                    </Text>
                ))}
                <Text style={detailsStyle.title}>Sprites</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <FadeInImage
                        uri={pokemon.sprites.front_default}
                        style={detailsStyle.basicSprite}
                    />
                    <FadeInImage
                        uri={pokemon.sprites.back_default}
                        style={detailsStyle.basicSprite}
                    />
                    <FadeInImage
                        uri={pokemon.sprites.front_shiny}
                        style={detailsStyle.basicSprite}
                    />
                    <FadeInImage
                        uri={pokemon.sprites.back_shiny}
                        style={detailsStyle.basicSprite}
                    />
                </ScrollView>
                <Text style={detailsStyle.title}>Peso</Text>
                <Text style={detailsStyle.info}>{pokemon.weight}</Text>

                <Text style={detailsStyle.title}>Habilidades Base</Text>

                {pokemon.abilities.map(({ability}) => (
                    <Text key={ability.name} style={detailsStyle.info}>
                        {ability.name}
                    </Text>
                ))}
                <Text style={detailsStyle.title}>Movimientos</Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {pokemon.moves.map(({move}) => (
                        <Text
                            key={move.name}
                            style={{...detailsStyle.info, marginRight: 10}}>
                            {move.name}
                        </Text>
                    ))}
                </View>
                <Text style={detailsStyle.title}>Stats</Text>
                <View>
                    {pokemon.stats.map((stat, indice) => (
                        <View
                            style={{
                                flexDirection: 'row',
                                width: 180,
                                justifyContent: 'space-between',
                            }}>
                            <Text
                                key={stat.stat.name}
                                style={detailsStyle.info}>
                                {stat.stat.name}
                            </Text>

                            <Text
                                key={stat.stat.name + indice}
                                style={{
                                    ...detailsStyle.info,
                                    fontWeight: 'bold',
                                    color: 'black',
                                }}>
                                {stat.base_stat}
                            </Text>
                        </View>
                    ))}
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <FadeInImage
                        uri={pokemon.sprites.front_default}
                        style={detailsStyle.basicSprite}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

const detailsStyle = StyleSheet.create({
    detailsContainer: {
        marginHorizontal: 20,
        marginTop: 370,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 10,
    },
    info: {
        fontSize: 16,
    },
    basicSprite: {
        height: 100,
        width: 100,
    },
});

export default PokemonDetails;
