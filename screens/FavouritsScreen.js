import { Text, View, StyleSheet } from 'react-native'

const FavouritesScreen = props => {
    return (<View style={Styles.screen}>
        <Text>The FavouritesScreen!</Text>
    </View>)
}

const Styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default FavouritesScreen;