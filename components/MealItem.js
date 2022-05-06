import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
const MealItem = props => {
    return (
        <View style={Styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...Styles.mealsRow, ...Styles.mealHeader }}>
                        <ImageBackground source={{ uri: props.image }} style={Styles.bgImage}>
                            <View style={Styles.titleContainer}>
                                <Text numberOfLines={1} style={Styles.title}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...Styles.mealsRow, ...Styles.mealDetails }}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordibility.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const Styles = StyleSheet.create({
    mealsRow: {
        flexDirection: 'row'
    },
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#ddd',
        borderRadius: 10,
        overflow: 'hidden',
    },
    mealHeader: {
        height: '85%',
    },
    mealDetails: {
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        height: '15%',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    title: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    }
})

export default MealItem;