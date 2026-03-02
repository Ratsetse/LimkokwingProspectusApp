import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function FacultyCard({ faculty, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.text}>{faculty.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 18,
    marginVertical: 8,
    borderRadius: 12,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});