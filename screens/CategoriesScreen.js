import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const Categories = props => {
    const renderGridItem = itemData => {
        return (
            <CategoryGridTile 
                title = {itemData.item.title}
                color = {itemData.item.color}
                onSelect = {() => {
                props.navigation.navigate({ 
                    routeName: 'CategoriesMeals', 
                    params: { 
                        categoryId: itemData.item.id 
                    } 
                })
            }} />
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
    
})

export default Categories;