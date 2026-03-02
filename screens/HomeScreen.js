import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { faculties } from "../data";
import FacultyCard from "../components/FacultyCard";
import { TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Limkokwing University</Text>
      <Text style={styles.subTitle}>
        Prospectus & Career Guidance App
      </Text>

      <FlatList
        data={faculties}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <FacultyCard
            faculty={item}
            onPress={() =>
              navigation.navigate("Faculty", { faculty: item })
            }
          />
        )}
      />

      <TouchableOpacity
        style={styles.quizButton}
        onPress={() => navigation.navigate("Career Quiz")}
      >
        <Text style={styles.quizText}>🎯 Take Career Quiz</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f6f9"
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
    color: "#2c3e50"
  },
  subTitle: {
    textAlign: "center",
    marginBottom: 20,
    color: "#7f8c8d"
  },
  quizButton: {
    backgroundColor: "#371eee",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10
  },
  quizText: {
    color: "#fff",
    fontWeight: "bold"
  }
});