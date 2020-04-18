import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/dummy-data';

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const selectedId = MEALS.find(meal => meal.id === mealId);
  return (
    <View style={styles.screen}>
      <Text>{selectedId.title}</Text>
      <Button
        title="Go To Categories"
        onPress={() => props.navigation.popToTop()}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedId = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: selectedId.title,
    headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item name="Favorite" iconName="ios-star" onPress={() => { console.log("Mark as pressed") }} />
    </HeaderButtons>
  };
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
