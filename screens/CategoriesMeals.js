import { Text, View, StyleSheet, Button} from 'react-native'
import { CATEGORIES } from '../data/dummy-data'

const CategoriesMeals = props => {
    const catId = props.navigation.getParam('categoryId')
    const selectedCat = CATEGORIES.find(cat => cat.id === catId);

    return (<View style={Styles.screen}>
        <Text>The CategoriesMeals screen!</Text>
        <Text>{selectedCat.title}</Text>
        <Button title='Go to details' onPress={() => {
            props.navigation.navigate('DetailsMeal')
        }}/>
    </View>)
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