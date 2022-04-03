import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data';

const Categories = props => {
    const renderGridItem = itemData => {
        return (
            <TouchableOpacity style={Styles.gridItem} onPress={() => {
                props.navigation.navigate({ routeName: 'CategoriesMeals', params: { categoryId: itemData.item.id } })
            }}>
                <View >
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    )
}

Categories.navigationOptions = {
    headerTitle: 'Meal Categories',
}

const Styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    }
})

export default Categories;