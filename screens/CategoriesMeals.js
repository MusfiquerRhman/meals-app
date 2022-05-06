import { View, StyleSheet, FlatList } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'

const CategoriesMeals = props => {
    const catId = props.navigation.getParam('categoryId')
    const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

    const renderMealItem = itemData => {
        return (
            <MealItem 
                title={itemData.item.title} 
                onSelectMeal={() => { 
                    props.navigation.navigate({routeName: 'DetailsMeal', params: {
                        mealId: itemData.item.id
                    }})
                }} 
                duration={itemData.item.duaration} 
                affordibility={itemData.item.affordibility}
                complexity={itemData.item.complexity}
                image={itemData.item.imageUrl}
            />
        )
    }

    return (
        <View style={Styles.screen}>
            <FlatList
                data={displayMeals}
                keyExtractor={item => item.id}
                renderItem={renderMealItem}
                style={{ width: '95%', margin: 10 }}
            />
        </View>
    )
}

CategoriesMeals.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCat = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCat.title,
    }
}

const Styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default CategoriesMeals;