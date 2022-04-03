import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoriesMeals from '../screens/CategoriesMeals'
import DetailsMeal from '../screens/DetailsMeals'
import { Platform } from 'react-native';
import Color from '../constants/color';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoriesMeals: {
        screen: CategoriesMeals
    },
    DetailsMeal: DetailsMeal,
} , {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Color.primaryColor : '#FFFFFF'
        },
        headerTintColor: Platform.OS === 'android' ? '#FFFFFF' : Color.primaryColor
    }
});

export default createAppContainer(MealsNavigator);