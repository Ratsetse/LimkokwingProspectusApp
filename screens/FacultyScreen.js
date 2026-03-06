import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";

export default function FacultyScreen({ route, navigation }) {
  const { faculty } = route.params;

  const screenWidth = Dimensions.get("window").width;
  const cardPadding = 30;

  return (
    <View style={styles.container}>
      
      {/* Faculty Name */}
      <Text style={styles.title}>{faculty.name}</Text>

      <FlatList
        data={faculty.courses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("CourseDetail", { course: item })
            }
          >
            
            {/* Course Image */}
            <Image
              source={item.image}   
              style={[styles.image, { width: screenWidth - cardPadding }]}
            />

            <Text style={styles.courseName}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>

          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f0f0f0"
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5
  },

  image: {
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
    resizeMode: "cover"
  },

  courseName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5
  },

  description: {
    fontSize: 15,
    lineHeight: 20,
    color: "#555"
  }
});