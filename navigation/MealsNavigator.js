import React from 'react';
import { Platform, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

import Colors from "../constants/Colors";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen
    },
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: {
      screen: MealDetailScreen
    }
  }, { defaultNavigationOptions: defaultStackNavOptions });

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
}, { defaultNavigationOptions: defaultStackNavOptions });

const FavNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetails: MealDetailScreen
}, { defaultNavigationOptions: defaultStackNavOptions });

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel: Platform.OS === "android" ? <Text style={{ fontFamily: 'open-sans-bold' }} >Meals</Text> : "Meals"
    }
  },
  Favorites: {
    screen: FavNavigator, navigationOptions: {
      tabBarLabel: "Favorites",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.secondaryColor,
      tabBarLabel: Platform.OS === "android" ? <Text style={{ fontFamily: 'open-sans-bold' }} >Favorites</Text> : "Favorites"

    }
  }
};

const MealsFavTabNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(tabScreenConfig, {
  activeColor: 'white', shifting: true
}) : createBottomTabNavigator(tabScreenConfig, { tabBarOptions: { labelStyle: { fontFamily: 'open-sans-bold' }, activeTintColor: Colors.secondaryColor } });

const MainNavigator = createDrawerNavigator({
  MealsFavs: { screen: MealsFavTabNavigator, navigationOptions: { drawerLabel: "Meals" } },
  Filters: FiltersNavigator
}, {
  contentOptions: {
    activeTintColor: Colors.secondaryColor,
    labelStyle: { fontFamily: 'open-sans-bold', fontSize: 20 }
  }
});

export default createAppContainer(MainNavigator);