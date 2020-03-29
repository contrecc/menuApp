import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find(category => category.id === catId);

  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go To Meal Details!"
        onPress={() => props.navigation.navigate({ routeName: "MealDetail" })}
      />
      <Button title="Go Back" onPress={() => props.navigation.pop()} />
    </View>
  );
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(category => category.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

export default CategoryMealScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
