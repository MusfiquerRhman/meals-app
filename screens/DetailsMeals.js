import { Text, View, StyleSheet } from 'react-native'

const DetailsMeal = props => {
    return (<View style={Styles.screen}>
        <Text>The DetailsMeal screen!</Text>
    </View>)
}

const Styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default DetailsMeal;