import {StyleSheet} from 'react-native';

const pokemonStyles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        backgroundColor: 'grey',
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,

        elevation: 8,
    },
    title: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        top: 10,
        left: 10,
    },
    pokeball: {
        height: 100,
        width: 100,
        position: 'absolute',
        right: -20,
        bottom: -20,
    },
    pokeballContainer: {
        height: 100,
        width: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        opacity: 0.5,
        overflow: 'hidden',
    },
    pokemonImage: {
        height: 110,
        width: 110,
        position: 'absolute',
        right: -8,
        bottom: -5,
    },
});

export default pokemonStyles;
