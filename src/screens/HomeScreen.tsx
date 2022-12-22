/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, Image, View} from 'react-native';
import Header from '../components/Header/Header';
import appTheme from '../theme/appTheme';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {Pokemon} from '../components/Pokemon/Pokemon';

const HomeScreen = () => {
    const {loadPokemons, simplePokemons} = usePokemonPaginated();

    useEffect(() => {
        loadPokemons();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header text="Pokedex" />

            <Image
                source={require('../assets/pokebola.png')}
                style={appTheme.pokebolaBG}
            />
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={simplePokemons}
                    keyExtractor={pokemon => pokemon.id}
                    onEndReached={loadPokemons}
                    numColumns={2}
                    onEndReachedThreshold={0.4}
                    ListFooterComponent={
                        <ActivityIndicator
                            size={40}
                            color={'grey'}
                            style={{height: 100}}
                        />
                    }
                    renderItem={({item: pokemon}) => (
                        <Pokemon pokemon={pokemon} />
                    )}
                />
            </View>
        </>
    );
};

export default HomeScreen;
