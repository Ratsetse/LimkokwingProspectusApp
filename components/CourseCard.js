import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function CourseCard({ course, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: course.image }} style={styles.image} />
      <Text style={styles.title}>{course.name}</Text>
      <Text style={styles.description}>{course.description}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 15,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
  },
  description: {
    marginTop: 5,
    color: "#555",
  },
});