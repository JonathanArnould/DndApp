import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Screens/Home";
import Goodbye from "./Screens/Goodbye";

const Tab = createBottomTabNavigator();

export default function Navbar() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Goodbye" component={Goodbye} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
