import React from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import headerStyle from './HeaderStyle';

interface HeaderProps {
    text: string;
}

const Header = ({text}: HeaderProps): JSX.Element => {
    const {top} = useSafeAreaInsets();

    return (
        <View style={{...headerStyle.headerContainer, marginTop: top + 20}}>
            <Text style={headerStyle.title}>{text}</Text>
        </View>
    );
};

export default Header;
