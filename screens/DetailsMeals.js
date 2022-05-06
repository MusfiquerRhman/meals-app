import { Text, View, StyleSheet } from 'react-native'
import { MEALS } from '../data/dummy-data'

const DetailsMeal = props => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (<View style={Styles.screen}>
        <Text>{selectedMeal.title}</Text>
    </View>)
}

DetailsMeal.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    console.log(selectedMeal)
    return {
        headerTitle: selectedMeal.title,
    };
};

const Styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default DetailsMeal;