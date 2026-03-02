import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import FacultyScreen from "./screens/FacultyScreen";
import CourseDetailScreen from "./screens/CourseDetailScreen";
import QuizScreen from "./screens/QuizScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#6c5ce7" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold" }
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Faculty" component={FacultyScreen} />
    <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
    <Stack.Screen name="Career Quiz" component={QuizScreen} />
  </Stack.Navigator>
</NavigationContainer>
  )
}