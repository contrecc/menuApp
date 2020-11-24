import React from "react";
import { StyleSheet, Text, Button, View, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import { MEALS } from '../data/dummy-data';
import { List } from "react-native-paper";

const ListItem = props => {
  return <View style={styles.listItem}>
    <DefaultText>{props.children}</DefaultText>
  </View>
}

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const selectedId = MEALS.find(meal => meal.id === mealId);
  return (
    <ScrollView>
      <Image source={{uri: selectedId.imageUrl }} style={styles.image}/>
      <View style={styles.details}>
        <DefaultText>{selectedId.duration}m</DefaultText>
        <DefaultText>{selectedId.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedId.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients:</Text>
      {selectedId.ingredients.map(ingredient => (<ListItem key={ingredient}>{ingredient}</ListItem>))}
      <Text style={styles.title}>Steps:</Text>
      {selectedId.steps.map(step => (<ListItem key={step}>{step}</ListItem>))}
    </ScrollView>
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
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around"
  },
  image: {
    width: "100%",
    height: 200
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center"
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10
  }
});
