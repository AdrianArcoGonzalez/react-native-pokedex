import ImageColors from 'react-native-image-colors';

const getPicturecolor = async (pokemonPictureUrl: string) => {
    const colors = await ImageColors.getColors(pokemonPictureUrl, {
        fallback: 'grey',
    });
    return colors;
};

export default getPicturecolor;
