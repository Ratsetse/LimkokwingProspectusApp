import React, { useRef, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import { Video } from "expo-av";
import RatingComponent from "../components/RatingComponent";

export default function CourseDetailScreen({ route }) {
  const { course } = route.params;
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Get screen width to make video responsive
  const screenWidth = Dimensions.get("window").width;
  const videoHeight = (screenWidth - 30) * 9 / 16; // maintain 16:9 aspect ratio

  // Play/pause toggle
  const togglePlayPause = async () => {
    if (!videoRef.current) return;

    const status = await videoRef.current.getStatusAsync();
    if (status.isPlaying) {
      await videoRef.current.pauseAsync();
      setIsPlaying(false);
    } else {
      await videoRef.current.playAsync();
      setIsPlaying(true);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Course Image */}
      <Image source={{ uri: course.image }} style={styles.image} />

      {/* Course Name and Description */}
      <Text style={styles.title}>{course.name}</Text>
      <Text style={styles.description}>{course.description}</Text>

      {/* Video Section */}
      <Text style={styles.sectionTitle}>Course Introduction Video</Text>

      <Video
        ref={videoRef}
        source={{ uri: course.video }}
        style={[styles.video, { width: screenWidth - 30, height: videoHeight }]}
        resizeMode="contain"
        isLooping
      />

      {/* Play / Pause Buttons */}
      <View style={styles.controls}>
        <TouchableOpacity onPress={togglePlayPause} style={styles.button}>
          <Text style={styles.buttonText}>{isPlaying ? "Pause" : "Play"}</Text>
        </TouchableOpacity>
      </View>

      {/* Rating Component */}
      <RatingComponent />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },

  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    marginBottom: 15,
    borderRadius: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },

  description: {
    fontSize: 16,
    lineHeight: 22,
    marginVertical: 10,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },

  video: {
    marginVertical: 15,
    borderRadius: 10,
    backgroundColor: "#000",
  },

  controls: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});