import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import HomeScreen from "./screens/HomeScreen";
import FacultyScreen from "./screens/FacultyScreen";
import CourseDetailScreen from "./screens/CourseDetailScreen";
import QuizScreen from "./screens/QuizScreen";

const Stack = createNativeStackNavigator();
const TopTab = createMaterialTopTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Faculty" component={FacultyScreen} />
      <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <TopTab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontWeight: "bold" },
          tabBarStyle: { backgroundColor: "#371eee" },
          tabBarActiveTintColor: "#fff",
          tabBarIndicatorStyle: { backgroundColor: "#fff" },
        }}
      >
        <TopTab.Screen name="Home" component={HomeStack} />
        <TopTab.Screen name="Career Quiz" component={QuizScreen} />
      </TopTab.Navigator>
    </NavigationContainer>
  );
}