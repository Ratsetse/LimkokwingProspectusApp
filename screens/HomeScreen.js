import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar
} from "react-native";

import { faculties } from "../data";
import FacultyCard from "../components/FacultyCard";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.container}>

        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.mainTitle}>Limkokwing University</Text>
          <Text style={styles.subTitle}>
            Prospectus & Career Guidance App
          </Text>
        </View>

        {/* Faculty List */}
        <FlatList
          data={faculties}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <FacultyCard
              faculty={item}
              onPress={() =>
                navigation.navigate("Faculty", { faculty: item })
              }
            />
          )}
        />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: "#f4f6f9",
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 10,
    marginBottom: 20,
    alignItems: "center",
  },

  mainTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2c3e50",
  },

  subTitle: {
    fontSize: 16,
    color: "#7f8c8d",
    marginTop: 5,
  },

  listContainer: {
    paddingBottom: 30,
  },

});