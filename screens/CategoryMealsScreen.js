import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CategoryMealScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen</Text>
    </View>
  );
};

export default CategoryMealScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
