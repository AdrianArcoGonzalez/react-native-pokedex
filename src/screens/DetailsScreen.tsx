import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {RootStackParams} from '../navigator/Navigator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FadeInImage} from '../components/FadeInImage/FadeInImage';

interface DetailsScreenProps
    extends StackScreenProps<RootStackParams, 'DetailsScreen'> {}

const DetailsScreen = ({route, navigation}: DetailsScreenProps) => {
    const {
        simplePokemon: {name, id, picture},
        color,
    } = route.params;
    const {top} = useSafeAreaInsets();

    return (
        <View>
            <View
                style={{
                    ...detailsScreenStyle.headerContainer,
                    backgroundColor: color,
                }}>
                <Text
                    style={{...detailsScreenStyle.pokemonName, top: top + 45}}>
                    {name + '\n'} #{id}
                </Text>

                <Image
                    style={detailsScreenStyle.pokeball}
                    source={require('../assets/pokebola-blanca.png')}
                />
                <FadeInImage
                    uri={picture}
                    style={detailsScreenStyle.pokemonImage}
                />
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                    activeOpacity={0.8}
                    style={{
                        ...detailsScreenStyle.backButton,
                        marginTop: top + 20,
                    }}>
                    <Icon name="arrow-back-outline" color={'white'} size={35} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const detailsScreenStyle = StyleSheet.create({
    headerContainer: {
        height: 370,
        zIndex: 10,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },
    backButton: {
        position: 'absolute',
        left: 20,
    },
    pokemonName: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20,
    },
    pokeball: {
        width: 250,
        height: 250,
        bottom: -20,
        opacity: 0.7,
    },
    pokemonImage: {
        height: 260,
        width: 260,
        position: 'absolute',
        bottom: -15,
    },
});

export default DetailsScreen;
