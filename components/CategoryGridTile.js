import { TouchableOpacity, Text, View, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native'
const CategoryGridTile = props => {
    let TouchableComponent = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    return (
        <View style={Styles.gridItem}>
            <TouchableComponent style={{flex: 1}} onPress={props.onSelect}>
                <View style={{ ...Styles.container, ...{ backgroundColor: props.color } }}>
                    <Text style={Styles.title}>{props.title}</Text>
                </View>
            </TouchableComponent>
        </View>
    )
}

const Styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 5,
        overflow: 'hidden',
    },
    container: {
        flex: 1,
        borderRadius: 5,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',

        // iOS
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 5,

        // Android
        elevation: 3,
    },
    title: {
        fontSize: 22,
        textAlign: 'right',
    }
})

export default CategoryGridTile;