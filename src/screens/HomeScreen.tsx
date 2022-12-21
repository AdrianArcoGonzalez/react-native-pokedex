import React from 'react';
import {Image} from 'react-native';
import Header from '../components/Header/Header';
import appTheme from '../theme/appTheme';

const HomeScreen = () => {
    return (
        <>
            <Header text="Pokedex" />
            <Image
                source={require('../assets/pokebola.png')}
                style={appTheme.pokebolaBG}
            />
        </>
    );
};

export default HomeScreen;
